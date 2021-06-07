const fs = require("fs");
const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
const FormData = require("form-data");
let hids = require("./hids.js");
const PromisePool = require("es6-promise-pool");

const MongoClient = require("mongodb").MongoClient;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const fast = process.argv.indexOf("--fast") !== -1;

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

async function setupBrowser() {
  let browser = await puppeteer.launch(browserConfig);
  let page = (await browser.pages())[0];
  page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36 Edg/87.0.664.75"
  );

  await page.goto(
    `https://market.yandex.ru/search?text=%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%B8%D0%B2%D1%8B&cvredirect=2&cpa=0&onstock=0&local-offers-first=0`
  );

  //await page.waitForNavigation();
  await sleep(10000);
  let captchaEl = await page.$(".CheckboxCaptcha");
  while (captchaEl) {
    console.log("Captcha!");
    const rect = await page.evaluate((el) => {
      const { x, y } = el.getBoundingClientRect();
      return { x, y };
    }, captchaEl);

    const offset = { x: 10, y: 10 };

    await page.mouse.click(rect.x + offset.x, rect.y + offset.y);

    console.log("Captcha clicked!");
    await sleep(5000);
    captchaEl = await page.$("img.AdvancedCaptcha-Image");
    await captchaEl.screenshot({ path: `captcha.png` });
    const { solution, id } = await solveCaptcha();
    console.log("Got soulution");
    await page.focus("input");
    await page.keyboard.type(solution);
    const button = await page.$("button[type='submit']");
    await button.click({
      button: "left",
    });

    await page.waitForNavigation();
    await sleep(5000);
    captchaEl = await page.$("img.AdvancedCaptcha-Image");
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
  await page.evaluate(async () => {
    await fetch("https://market.yandex.ru/api/settings/region", {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,ru;q=0.8",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        pragma: "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        sk: window.state.user.sk,
      },
      referrer:
        "https://market.yandex.ru/search?text=%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%B2%D0%B0%D1%82%D0%B8%D0%B2%D1%8B&cpa=0&lr=213&onstock=0&local-offers-first=0",
      referrerPolicy: "unsafe-url",
      body: "options=%7B%22region%22%3A%22213%22%7D",
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
    try {
      document
        .querySelector(".zsSJkfeAPw._16jABpOZ2-._36y1jOUHs5.XAAXSBumqa")
        .click();
    } catch (e) {
      console.log("Can't set region!");
    }
  });
  await sleep(5000);
  return { browser, page };
}

(async function () {
  const mongoClient = new MongoClient(
    "mongodb+srv://admin:X3LWT3h2E83frAPp@cluster0.zqbcv.mongodb.net/ymsales?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const client = await mongoClient.connect();

  const db = client.db("ymsales");
  const products_collection = db.collection("products");
  const updates_collection = db.collection("updates");

  let { page } = await setupBrowser();

  async function parseAllProductsForHids(hids) {
    const products = await page.evaluate(
      async (fast, hids) => {
        /////////////////////////////////////////////////////////////////////////////

        const fastMode = fast;
        const superFastMode = fast;

        function parseOfferShowPlace(offerShowPlace) {
          let result = {};

          for (const _offerShowPlace of Object.values(offerShowPlace)) {
            for (const promoId of _offerShowPlace.promoIds) {
              if (!result[_offerShowPlace.id]) {
                if (!_offerShowPlace.urls.direct.match(/\/(\d+)/)) {
                  //console.log(JSON.stringify(offerShowPlace, null, 2));
                  continue;
                }
                result[_offerShowPlace.id] = {
                  promos: [],
                  id: _offerShowPlace.urls.direct.match(/\/(\d+)/)[1],
                };
              }
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
          const offerShowPlaces = parseOfferShowPlace(
            collections.offerShowPlace
          );
          // console.log(JSON.stringify(offerShowPlaces, null, 2));
          const promos = parsePromo(collections.promo);
          // console.log(JSON.stringify(promos, null, 2));
          const products = parseProduct(collections.product);
          //console.log(JSON.stringify(products, null, 2));

          console.log(offerShowPlaces);
          console.log(promos);
          console.log(products);

          let filledResult = [];

          for (const productId in products.filledProducts) {
            const product = products.filledProducts[productId];
            if (!offerShowPlaces[productId]) {
              continue;
            }
            const offerShowPlace = offerShowPlaces[productId].promos;
            for (const promoId of offerShowPlace) {
              const promo = promos[promoId];
              if (!promo) {
                console.log("No offer for product");
                // console.log(JSON.stringify(product));
                // console.log(JSON.stringify(offerShowPlace));
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

        let globalFailedSearch = [];

        async function parseSearchPageOffers(
          hid,
          text,
          cpa = true,
          withCode = true
        ) {
          try {
            const res = await fetch(
              `https://market.yandex.ru/api/search?${
                cpa ? "cpa=1&" : ""
              }&hid=${hid}&text=${text}&onstock=1&page=1${
                withCode ? "&promo-type=promo-code" : ""
              }`,
              {
                headers: {
                  accept: "*/*",
                  "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                  "content-type": "application/json",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  sk: window.state.user.sk,
                },
                referrer: "https://market.yandex.ru/",
                referrerPolicy: "unsafe-url",
                body: null,
                method: "GET",
                mode: "cors",
                credentials: "include",
              }
            ).then((res) => res.json());

            const collections = res.normalizedState.collections;

            return { ...parseCollections(collections), total: res.total };
          } catch (e) {
            console.log(e);
            globalFailedSearch.push(`${hid} ${text}`);
            return { filledProducts: [], unfilledProducts: [], total: 0 };
          }
        }

        async function parseSearchPage(hid, page = 1, how = "dprice") {
          try {
            const res = await fetch(
              `https://market.yandex.ru/api/search?cpa=1&hid=${hid}&onstock=1&page=${page}&promo-type=promo-code${
                how ? `&how=${how}` : ""
              }`,
              {
                headers: {
                  accept: "*/*",
                  "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                  "content-type": "application/json",
                  "sec-fetch-dest": "empty",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-site": "same-origin",
                  sk: window.state.user.sk,
                },
                referrer: "https://market.yandex.ru/",
                referrerPolicy: "unsafe-url",
                body: null,
                method: "GET",
                mode: "cors",
                credentials: "include",
              }
            ).then((res) => res.json());

            const collections = res.normalizedState.collections;

            return { ...parseCollections(collections), total: res.total };
          } catch (e) {
            console.log(e);
            globalFailedSearch.push(`${hid} ${page}`);

            return { filledProducts: [], unfilledProducts: [], total: 0 };
          }
        }

        function calcLen(products) {
          let i =
            Object.keys(products.filledProducts).length * 100000 +
            Object.values(products.filledProducts).filter(
              (p) => !!p.shopPromoId
            ).length;
          if (superFastMode) i %= 100000;

          return (
            i * 100000 +
            Object.keys(products.unfilledProducts).length *
              (superFastMode ? 0 : 1)
          );
        }

        async function parseHid(hid) {
          const products = { filledProducts: {}, unfilledProducts: {} };
          let total = -1;
          let prevProductsAmount = products.size;

          for (const how of [
            "dpop",
            "aprice",
            "dprice",
            "rorp",
            "discount_p",
          ]) {
            console.log(how);
            let i = 1;
            do {
              prevProductsAmount = calcLen(products);
              const page = await parseSearchPage(hid, i++, how);
              total = page.total;
              page.filledProducts.forEach((product) => {
                products.filledProducts[product.id] = product;
              });
              page.unfilledProducts.forEach((product) => {
                products.unfilledProducts[product.product_id] = product;
              });
              console.log(prevProductsAmount, calcLen(products));
            } while (
              prevProductsAmount < calcLen(products) &&
              Object.keys(products.filledProducts).length < total
            );
            if (Object.keys(products.filledProducts).length >= total) {
              break;
            }
          }

          const filledProductsKeys = Object.keys(products.filledProducts);
          for (const filledProduct of filledProductsKeys) {
            const product = products.filledProducts[filledProduct];
            if (!fastMode) {
              products.unfilledProducts[product.product_id] = {
                title: product.name,
                product_id: product.product_id,
              };
              products.filledProducts[filledProduct].min_price =
                products.filledProducts[filledProduct].old_price;
              products.filledProducts[filledProduct].reload = !fastMode;
              //delete products.filledProducts[filledProduct];
            } else if (products.unfilledProducts[product.product_id]) {
              delete products.unfilledProducts[product.product_id];
            }
          }

          // console.log(products);
          return products;
        }

        async function parseAllProducts() {
          let globalProducts = [];
          let globalUnfilled = [];

          let i = 0;
          for (const { hid, subCategory } of hids) {
            i++;
            console.log(`${i}/${hids.length}`);
            const { filledProducts, unfilledProducts } = await parseHid(hid);
            let firstStep = 0;
            if (fastMode && superFastMode) {
              firstStep = 3;
            } else if (!fastMode) {
              firstStep = 2;
            }
            for (let step = firstStep; step < 3; step++) {
              const visitedProducts = new Set();
              let productsToFind = null;
              while (
                (productsToFind = Object.keys(unfilledProducts).filter(
                  (id) => !visitedProducts.has(id)
                )).length > 0
              ) {
                const productToFind = unfilledProducts[productsToFind[0]];
                visitedProducts.add(`${productToFind.product_id}`);
                let page = null;
                switch (step) {
                  case 0:
                    page = await parseSearchPageOffers(
                      hid,
                      productToFind.title
                    );
                    break;
                  case 1:
                    page = await parseSearchPageOffers(
                      hid,
                      productToFind.title,
                      false
                    );
                    break;
                  case 2:
                    page = await parseSearchPageOffers(
                      hid,
                      productToFind.title,
                      false,
                      false
                    );
                    break;
                }
                page.filledProducts.forEach((product) => {
                  if (filledProducts[product.id]) {
                    filledProducts[product.id].min_price = Math.min(
                      product.min_price,
                      filledProducts[product.id].min_price
                    );
                    filledProducts[product.id].reload = false;
                  } else {
                    filledProducts[product.id] = product;
                  }
                });
                page.unfilledProducts.forEach((product) => {
                  for (const filledProduct in filledProducts) {
                    const _filledProduct = filledProducts[filledProduct];
                    if (
                      _filledProduct.product_id === product.product_id &&
                      product.min_price
                    ) {
                      _filledProduct.min_price = Math.min(
                        _filledProduct.min_price,
                        product.min_price
                      );
                      _filledProduct.reload = false;
                    }
                  }
                });
                for (const filledProduct in filledProducts) {
                  const product = filledProducts[filledProduct];
                  if (unfilledProducts[product.product_id] && !product.reload) {
                    delete unfilledProducts[product.product_id];
                  }
                }
              }
            }

            for (const filledProduct in filledProducts) {
              globalProducts.push({
                ...filledProducts[filledProduct],
                price: +filledProducts[filledProduct].price,
                old_price: +filledProducts[filledProduct].old_price,
                min_price: +filledProducts[filledProduct].min_price,
                category: subCategory,
              });
            }
            for (const unfilledProduct in unfilledProducts) {
              globalUnfilled.push({
                ...unfilledProducts[unfilledProduct],
                category: subCategory,
              });
            }
          }
          return globalProducts;
        }
        return await parseAllProducts();
        ///////////////////////////////////////////////////////////////////
      },
      fast,
      hids
    );
    return products;
  }

  let allProducts = [];

  async function parseAllProductsForHidsAndUpload(hid) {
    const productsForHid = await parseAllProductsForHids([hid]);
    if (productsForHid.length > 0) {
      const bulk = products_collection.initializeUnorderedBulkOp();
      for (const product of productsForHid) {
        bulk
          .find({ id: product.id })
          .upsert()
          .replaceOne({ ...product, timestamp: Date.now() });
      }
      await bulk.execute();
      allProducts = [...allProducts, ...productsForHid];
    }
    return productsForHid;
  }

  while (true) {
    hids = require("./hids.js");
    allProducts = [];
    console.log("Started scan");
    let i = 0;
    const promiseProducer = function () {
      if (i < hids.length) {
        const hid = hids[i];
        i++;
        console.log(hid.hid, `${i}/${hids.length}`);
        return parseAllProductsForHidsAndUpload(hid);
      } else {
        return null;
      }
    };
    const pool = new PromisePool(promiseProducer, 3);
    await pool.start();

    if (allProducts.length === 0) {
      throw "No products";
    }

    fs.writeFileSync(
      "../products_from_search.json",
      JSON.stringify(allProducts)
    );
    // await products_collection.deleteMany({
    //   timestamp: { $lt: Date.now() - 1.728e8 },
    // });
    //await products_collection.insertMany(allProducts);

    await updates_collection.updateOne(
      {},
      { $set: { products: Date.now() } },
      { upsert: true }
    );

    await sleep(10000);
  }
})();
