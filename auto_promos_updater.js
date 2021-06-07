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

function timeout(ms, promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("TIMEOUT"));
    }, ms);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((reason) => {
        clearTimeout(timer);
        reject(reason);
      });
  });
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

  console.log("Sent captcha!");
  let solution;
  await sleep(5000);

  let a = 0;
  while (!solution) {
    a++;
    if (a > 100) {
      throw "Error";
    }
    try {
      const res = await timeout(
        5000,
        fetch(
          `http://rucaptcha.com/res.php?key=${captchaApi}&action=get&id=${id}&json=1`
        ).then((res) => res.json())
      );
      console.log("Ping captcha");
      if (res.request !== "CAPCHA_NOT_READY") {
        solution = res.request;
      }
    } catch (e) {}
    await sleep(1000);
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
      console.log("Got solution!");
      await page.focus("input");
      await page.keyboard.type(solution);
      await page.click("button");
      //await page.waitForNavigation();
      await sleep(20000);
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
          result[_offerShowPlace.offerId] = _offerShowPlace.promoIds;
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

      function parseOffer(offer) {
        let result = {};

        for (const _offer of Object.values(offer)) {
          const img = _offer.pictures ? _offer.pictures[0].original : null;
          let imgUrl = null;
          result[_offer.id] = {
            name: _offer.titles.raw,
            img: img
              ? `https://avatars.mds.yandex.net/get-${img.namespace}/${img.groupId}/${img.key}/50x50`
              : null,
            hid: _offer.categoryIds[0],
            id: _offer.marketSku || _offer.productId,
          };
        }
        return result;
      }

      function parseCollections(collections) {
        const offerShowPlaces = parseOfferShowPlace(collections.offerShowPlace);
        // console.log(JSON.stringify(offerShowPlaces, null, 2));
        const promos = parsePromo(collections.promo);
        // console.log(JSON.stringify(promos, null, 2));
        const offers = parseOffer(collections.offer);
        //console.log(JSON.stringify(products, null, 2));

        let result = [];

        for (const offerId in offerShowPlaces) {
          const offer = offers[offerId];
          const offerPromos = offerShowPlaces[offerId];
          let foundPromo = false;
          for (const promoId of offerPromos) {
            const promo = promos[promoId];
            if (!promo) {
              continue;
            }
            foundPromo = true;
            result.push({
              ...offer,
              ...promo,
            });
          }
          if (!foundPromo) {
            console.log("No offer for product");
            console.log(JSON.stringify(offer));
            console.log(JSON.stringify(offerPromos));
          }
        }

        return result;
      }
      /////////////////////////////////////////////////////////////////////////////

      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      async function getNextPage(memento, i) {
        let res = null;
        let n = 1000;
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
                body: `{\"n\":${n},\"memento\":\"${memento}\"}`,
                method: "POST",
                mode: "cors",
                credentials: "include",
              }
            ).then((res) => res.json());
          } catch (e) {
            await sleep(20000);
            console.log(e);
          }
          n /= 2;
          n = parseInt(n);
          if (n < 1) {
            n = 1;
          }
        }
        const next_memento = res.data.memento;
        let products = parseCollections(res.data.data.collections);
        if (i > 0 && next_memento) {
          console.log("Waiting before next page...");
          await sleep(1000);
          products = [...products, ...(await getNextPage(next_memento, i - 1))];
        }

        if (!next_memento) {
          console.log("No more products to load!");
        }

        return products;
      }

      async function loadProducts() {
        if (!window.state) {
          console.log("No winodw state");
          console.log(window.location.href);
          console.log(document.querySelector("html").innerHTML);
        }
        const lazyRender = await fetch(
          "https://pokupki.market.yandex.ru/api/render-lazy?w=%40marketfront%2FRoll",
          {
            headers: {
              accept: "*/*",
              "accept-language": "en-US,en;q=0.9,ru;q=0.8",
              "content-type": "application/json",
              "sec-ch-ua":
                '"Chromium";v="92", " Not A;Brand";v="99", "Microsoft Edge";v="92"',
              "sec-ch-ua-mobile": "?0",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              sk: window.state.user.secretKey,
            },
            referrer:
              "https://pokupki.market.yandex.ru/special/promo-code-landing?shopPromoId=L141151",
            referrerPolicy: "unsafe-url",
            body: JSON.stringify({
              widgets: [
                {
                  lazyId: "94802748",
                  widgetName: "@marketfront/Roll",
                  options: {
                    id: 94802748,
                    mboWidgetId: 94802748,
                    props: {
                      subtitle: { type: "default" },
                      titleParams: { size: "m", type: "default" },
                      paddingTop: "normal",
                      paddingBottom: "normal",
                      paddingLeft: "normal",
                      paddingRight: "normal",
                      theme: "light",
                      titleStyle: "default",
                      compensateSideMargin: false,
                    },
                    resources: {
                      garsons: shopPromoIds.map((shopPromoId) => ({
                        id: "PrimeSearchNormalized",
                        count: 99999,
                        params: {
                          onstock: "1",
                          "shop-promo-id": [shopPromoId],
                        },
                      })),
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
              cspNonce: "Bow9nCFSMX2eC9PFjIZEZA==",
              path: "/special/promo-code-landing",
            }),
            method: "POST",
            mode: "cors",
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
        const mementoStart = lazyRender.indexOf("memento") + 10;
        const mementoEnd = lazyRender.indexOf('"', mementoStart);
        const memento = lazyRender.substring(mementoStart, mementoEnd);
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
  const promos_collection = db.collection("promos");
  const products_from_promos_collection = db.collection(
    "products_from_promos_collection"
  );

  while (true) {
    console.log("here");
    const products = [
      ...(await products_collection.distinct("shopPromoId")).map((spi) => ({
        shopPromoId: spi,
      })),
      ...require("./products_from_search.json"),
    ];
    console.log("And there");
    shopPromoIds = (
      await promos_collection
        .find({ timestamp: { $gt: Date.now() - 2.592e9 } })
        .toArray()
    ).map((p) => p.promo);
    // products.reduce(
    //   (prev, curr) => prev.add(curr.shopPromoId),
    //   new Set()
    // );

    // shopPromoIds.delete("L137199");
    // shopPromoIds.delete(null);
    // shopPromoIds = [...shopPromoIds];

    console.log(shopPromoIds);

    console.log("Started scan");
    const productsFromPromos = await parseAllPromos();
    if (products.length === 0) {
      throw "WTF";
    }

    const archive_files = 3;
    for (let i = archive_files; i >= 0; i--) {
      const from =
        i === 0
          ? `./products_from_promos.json`
          : `./products_from_promos_${i}.json`;
      const to = `./products_from_promos_${i + 1}.json`;
      if (fs.existsSync(from)) {
        fs.copyFileSync(from, to);
      }
    }

    fs.writeFileSync(
      "./products_from_promos.json",
      JSON.stringify(productsFromPromos)
    );
    await products_from_promos_collection.deleteMany({});
    //await products_from_promos_collection.insertMany(productsFromPromos);

    await updates_collection.updateOne(
      {},
      { $set: { promos: Date.now() } },
      { upsert: true }
    );
    await sleep(10000);
  }
})();

process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(-1);
  throw e;
});
