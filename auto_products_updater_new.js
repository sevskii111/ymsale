const fs = require("fs");
const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
const FormData = require("form-data");
const PromisePool = require("es6-promise-pool");

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

  async function searchForProduct(productName) {
    const products = await page.evaluate(async (productToFind) => {
      /////////////////////////////////////////////////////////////////////////////
      function parseOffer(offer) {
        let result = {};

        for (const _offer of Object.values(offer)) {
          if (!_offer.productId || !_offer.marketSku) continue;
          result[_offer.productId] = _offer.marketSku;
        }

        return result;
      }

      function parseProduct(product) {
        let result = {};

        for (const _product of Object.values(product)) {
          result[_product.id] = {
            id: _product.id,
            min_price: _product.prices.min,
          };
        }
        return result;
      }

      function parseCollections(collections) {
        const offers = parseOffer(collections.offer);
        console.log(JSON.stringify(offers, null, 2));
        const products = parseProduct(collections.product);
        console.log(JSON.stringify(products, null, 2));

        // console.log(offerShowPlaces);
        // console.log(promos);
        // console.log(products);

        let result = [];

        for (const product_id in offers) {
          result.push({
            min_price: products[product_id].min_price,
            id: offers[product_id],
          });
        }

        return result;
      }

      async function parseSearchPageOffers(
        text,
        cpa = false,
        withCode = false
      ) {
        try {
          const res = await fetch(
            `https://market.yandex.ru/api/search?${
              cpa ? "cpa=1&" : ""
            }text=${text}&onstock=1&page=1${
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

          return parseCollections(collections);
        } catch (e) {
          console.log(e);
          //globalFailedSearch.push(`${hid} ${text}`);
          return [];
        }
      }

      async function doSearch() {
        const foundProducts = (page = await parseSearchPageOffers(
          productToFind
        ));
        console.log(foundProducts);
        return foundProducts;
      }
      return await doSearch();
      ///////////////////////////////////////////////////////////////////
    }, productName);
    return products;
  }

  let allProducts = [];

  async function searchForProductAndUpload(productName) {
    const foundProducts = await searchForProduct(productName);
    if (foundProducts.length > 0) {
      const bulk = products_collection.initializeUnorderedBulkOp();
      for (const product of foundProducts) {
        bulk
          .find({ id: product.id })
          .upsert()
          .replaceOne({
            ...product,
            experimental: true,
            timestamp: Date.now(),
          });
      }
      await bulk.execute();
      allProducts = [...allProducts, ...foundProducts];
    }
    return foundProducts;
  }

  while (true) {
    const products_from_promos = require("./products_from_promos.json");
    allProducts = [];
    console.log("Started scan");
    let i = 0;
    const promiseProducer = function () {
      if (i < products_from_promos.length) {
        const product = products_from_promos[i];
        i++;
        console.log(product.name, `${i}/${products_from_promos.length}`);
        return searchForProductAndUpload(product.name);
      } else {
        return null;
      }
    };
    const pool = new PromisePool(promiseProducer, 3);
    await pool.start();

    if (allProducts.length === 0) {
      throw "No products";
    }

    // fs.writeFileSync(
    //   "../products_from_search.json",
    //   JSON.stringify(allProducts)
    // );
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

process.on("unhandledRejection", (e) => {
  console.error(e);
  process.exit(-1);
  throw e;
});
