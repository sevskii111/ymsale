const fs = require("fs");
const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
const FormData = require("form-data");
let shopPromoIds;
const MongoClient = require("mongodb").MongoClient;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const logs = process.argv.indexOf("--logs") !== -1;

const debug = process.argv.indexOf("--debug") !== -1;
const captcha = process.argv.indexOf("--captcha");
let captchaApi;

if (captcha !== -1) {
  captchaApi = process.argv[captcha + 1];
}

let browserConfig = { args: [] };
// dumpio: true,

if (logs) {
  browserConfig["dumpio"] = true;
}

if (debug) {
  browserConfig.headless = false;
  browserConfig.args.push(
    "--window-size=1400,900",
    "--remote-debugging-port=9222",
    "--remote-debugging-address=0.0.0.0",
    "--disable-gpu",
    "--disable-features=IsolateOrigins,site-per-process",
    "--blink-settings=imagesEnabled=true"
  );
}

const root = process.argv.indexOf("--root") !== -1;

if (root) {
  browserConfig.args.push("--no-sandbox");
}

async function solveCaptcha() {
  const formData = new FormData();
  formData.append("key", captchaApi);
  formData.append("file", fs.createReadStream(`captcha.png`));

  const id = (
    await fetch("http://rucaptcha.com/in.php", {
      method: "POST",
      body: formData,
    }).then((res) => res.text())
  ).match(/\d+/)[0];

  let solution;
  await sleep(1000);

  while (!solution) {
    const res = await fetch(
      `http://rucaptcha.com/res.php?key=${captchaApi}&action=get&id=${id}&json=1`
    ).then((res) => res.json());
    if (res.request !== "CAPCHA_NOT_READY") {
      solution = res.request;
    }
    await sleep(500);
  }
  return { solution, id };
}

(async function () {
  let browser = await puppeteer.launch(browserConfig);
  let page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75"
  );

  async function parseAllPromos() {
    await page.goto(`https://pokupki.market.yandex.ru/`);
    //await page.waitForNavigation({ waitUntil: "networkidle0" });
    let captchaEl = await page.$(".captcha__image img");
    while (captchaEl) {
      console.log("Captcha!");
      await captchaEl.screenshot({ path: `captcha.png` });
      const { solution, id } = await solveCaptcha();
      await page.focus("input");
      await page.keyboard.type(solution);
      await page.click("button");
      await page.waitForNavigation();
      await sleep(5000);
      captchaEl = await page.$(".captcha__image img");
      console.log(solution);
      if (captchaEl) {
        console.log("Captcha failed!");
        await fetch(
          `http://rucaptcha.com/res.php?key=${captchaApi}&action=reportbad&id=${id}`
        );
      } else {
        console.log("Captcha solved!");
        await fetch(
          `http://rucaptcha.com/res.php?key=${captchaApi}&action=reportgood&id=${id}`
        );
      }
    }
    console.log("Setting up browser...");
    await sleep(5000);

    const products = await page.evaluate(async (shopPromoIds) => {
      function parseOfferShowPlace(offerShowPlace) {
        let result = {};

        for (const _offerShowPlace of Object.values(offerShowPlace)) {
          for (const promoId of _offerShowPlace.promoIds) {
            if (!result[_offerShowPlace.id])
              if (!_offerShowPlace.urls.direct.match(/\/(\d+)/)) {
                console.log(JSON.stringify(offerShowPlace, null, 2));
              }
            result[_offerShowPlace.id] = {
              promos: [],
              id: _offerShowPlace.urls.direct.match(/\/(\d+)/)[1],
            };
            result[_offerShowPlace.id].promos.push(promoId);
          }
        }
        return result;
      }

      function parsePromo(promo) {
        let result = {};

        for (const _promo of Object.values(promo)) {
          if (_promo.type !== "promo-code") continue;
          const itemsInfo = _promo.itemsInfo;
          result[_promo.id] = {
            code: _promo.promoCode,
            shopPromoId: _promo.shopPromoId,
            old_price: itemsInfo.price.oldPrice.value,
            price: itemsInfo.price.currentPrice.value,
          };
        }

        return result;
      }

      function parseProduct(product) {
        let result = { filledProducts: {}, unfilledProducts: {} };

        for (const _product of Object.values(product)) {
          let showPlaceIds = _product.showPlaceIds;
          if (showPlaceIds) {
            const img = _product.pictures
              ? _product.pictures[0].original
              : null;

            for (const showPlaceId of showPlaceIds) {
              result.filledProducts[showPlaceId] = {
                uid: showPlaceId,
                name: _product.titles.raw,
                img: img
                  ? `https://avatars.mds.yandex.net/get-mpic/${img.groupId}/${img.key}/50x50`
                  : null,
                hid: _product.categoryIds[0],
              };
            }
          } else {
            console.log(`No showplaceid for ${JSON.stringify(_product)}`);
          }
        }
        return result;
      }

      function parseCollections(collections) {
        const offerShowPlaces = parseOfferShowPlace(collections.offerShowPlace);
        // console.log(JSON.stringify(offerShowPlaces, null, 2));
        const promos = parsePromo(collections.promo);
        // console.log(JSON.stringify(promos, null, 2));
        const products = parseProduct(collections.product);
        //console.log(JSON.stringify(products, null, 2));

        let filledResult = [];

        for (const productId in products.filledProducts) {
          const product = products.filledProducts[productId];
          const offerShowPlace = offerShowPlaces[productId].promos;
          for (const promoId of offerShowPlace) {
            const promo = promos[promoId];
            if (!promo) {
              console.log("No offer for product");
              console.log(JSON.stringify(product));
              console.log(JSON.stringify(offerShowPlace));
              continue;
            }
            filledResult.push({
              ...product,
              ...promo,
              id: offerShowPlaces[productId].id,
            });
          }
        }

        let unfilledResult = [];
        for (const productId in products.unfilledProducts) {
          unfilledResult.push({
            product_id: productId,
            min_price: products.unfilledProducts[productId].min_price,
            title: products.unfilledProducts[productId].title,
          });
        }
        return {
          filledProducts: filledResult,
          unfilledProducts: unfilledResult,
        };
      }
      /////////////////////////////////////////////////////////////////////////////

      async function getNextPage(memento, i) {
        let res = null;
        while (!res || !res.data || !res.data.data) {
          try {
            res = await fetch(
              "https://pokupki.market.yandex.ru/api/data-collector",
              {
                headers: {
                  accept: "*/*",
                  "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                  "content-type": "application/json; charset=UTF-8",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  sk: window.state.user.secretKey,
                },
                referrer:
                  "https://pokupki.market.yandex.ru/special/promo-code-landing?shopPromoId=L136267",
                referrerPolicy: "unsafe-url",
                body: `{\"n\":100,\"memento\":\"${memento}\"}`,
                method: "POST",
                mode: "cors",
                credentials: "include",
              }
            ).then((res) => res.json());
          } catch (e) {}
        }
        const next_memento = res.data.memento;
        let products = parseCollections(res.data.data.collections)
          .filledProducts;
        if (i > 0 && next_memento) {
          products = [...products, ...(await getNextPage(next_memento, i - 1))];
        }

        if (!next_memento) {
          console.log("No more products to load!");
        }

        return products;
      }

      async function loadProducts() {
        const lazyRender = await fetch(
          "https://pokupki.market.yandex.ru/api/render-lazy",
          {
            headers: {
              accept: "*/*",
              "accept-language": "en-US,en;q=0.9,ru;q=0.8",
              "content-type": "application/json",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              sk: window.state.user.secretKey,
            },
            referrer: "https://pokupki.market.yandex.ru/promo-code-landing",
            referrerPolicy: "unsafe-url",
            body: JSON.stringify({
              widgets: [
                {
                  lazyId: "94802748",
                  widgetName: "@marketplace/Roll",
                  options: {
                    id: 94802748,
                    mboWidgetId: 94802748,
                    props: {
                      limit: 300,
                      subtitle: {
                        type: "default",
                      },
                      titleParams: {
                        size: "m",
                        type: "default",
                      },
                      paddingTop: "normal",
                      paddingBottom: "normal",
                      paddingLeft: "normal",
                      paddingRight: "normal",
                      theme: "light",
                      titleStyle: "default",
                      compensateSideMargin: false,
                    },
                    resources: {
                      garsons: [
                        {
                          id: "PrimeSearchNormalized",
                          count: 15,
                          params: {
                            onstock: "1",
                            hid: "6427100",
                          },
                        },
                        ...shopPromoIds.map((shopPromoId) => ({
                          id: "PrimeSearchNormalized",
                          count: 99999,
                          params: {
                            onstock: "1",
                            "shop-promo-id": [shopPromoId],
                          },
                        })),
                      ],
                    },
                    name: "Roll",
                    otherCmsOptions: {
                      entity: "widget",
                      loadMode: "lazy",
                      placeholder: "SnippetScrollbox",
                    },
                  },
                  slotOptions: {},
                },
              ],
              cspNonce: "oRkgT2yCM7ZeUnCL0IecAg==",
              path: "/special/promo-code-landing",
            }),
            method: "POST",
            mode: "cors",
            credentials: "include",
          }
        ).then((res) => res.text());
        const dataStart = lazyRender.indexOf(
          `<script class="apiary-patch" type="application/json">`
        );
        const dataEnd = lazyRender.indexOf("</script>", dataStart);
        const data = JSON.parse(
          lazyRender.substring(
            dataStart +
              `<script class="apiary-patch" type="application/json">`.length,
            dataEnd
          )
        );
        const memento =
          data["widgets"]["@marketplace/Roll"]["/94802748"].memento;
        const products = await getNextPage(memento, 100000);
        //console.log(products);
        return products;
      }

      return await loadProducts();
    }, shopPromoIds);
    return products;
  }

  const mongoClient = new MongoClient(
    "mongodb+srv://admin:X3LWT3h2E83frAPp@cluster0.zqbcv.mongodb.net/ymsales?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const client = await mongoClient.connect();

  const db = client.db("ymsales");
  const updates_collection = db.collection("updates");
  const products_collection = db.collection("products");
  const products_from_promos_collection = db.collection("products_from_promos");

  while (true) {
    const products = await (await products_collection.find()).toArray();
    shopPromoIds = products.reduce(
      (prev, curr) => prev.add(curr.shopPromoId),
      new Set()
    );

    shopPromoIds.delete("L137199");
    shopPromoIds = [...shopPromoIds];

    console.log("Started scan");
    const productsFromPromos = await parseAllPromos();
    if (products.length === 0) {
      throw "WTF";
    }

    await products_from_promos_collection.deleteMany({});
    await products_from_promos_collection.insertMany(productsFromPromos);

    await updates_collection.updateOne(
      {},
      { $set: { promos: Date.now() } },
      { upsert: true }
    );
    await sleep(10000);
  }
})();
