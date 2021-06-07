import Head from "next/head";
import { Alert, Badge, Button, Col, Container, Input, Row } from "reactstrap";
import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import categoriesHierarhyNew from "../categories_hierarchy_new.json";
import { YMInitializer } from "react-yandex-metrika";
import fs from "fs";
import InputRange from "react-input-range";
import { addBackToTop } from "vanilla-back-to-top";
import { useRouter } from "next/router";

const MongoClient = require("mongodb").MongoClient;

var formatter = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function Home({
  codes,
  products: _products,
  scanEnd,
  fastScanEnd,
  hierarchy,
  parentCategories,
  categoriesIds,
  categories,
}) {
  const products = useMemo(
    () =>
      _products.map((p, i) => ({
        ...p,
        code: codes[p.code],
        categories: new Set(categories[p.category]),
      })),
    [_products]
  );

  let [useRefLinks, setUseRefLinks] = useState("disabled");

  const router = useRouter();

  const [showAllCodes, setShowAllCodes] = useState(false);
  const [selectedCategory, setSelectedCategry] = useState(["Все"]);
  const [selectedCode, setSelectedCode] = useState("Все");
  const [displayedItems, setDisplayedItems] = useState([]);
  const [search, setSearch] = useState("");
  const [minProductPrice, setMinProductPrice] = useState(0);
  const [maxProductPrice, setMaxProductPrice] = useState(1);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1 });
  const [itemsLoaded, setItemsLoaded] = useState(false);

  const [subCategories, setSubCategories] = useState(parentCategories);

  useEffect(() => {
    addBackToTop({ backgroundColor: "#ffc107" });
    //console.log(localStorage.getItem("useRefLinks"));
    if (!localStorage.getItem("useRefLinks")) {
      localStorage.setItem("useRefLinks", "enabled");
    }

    setUseRefLinks(localStorage.getItem("useRefLinks") === "enabled");
  }, []);

  useEffect(() => {
    const filtredProducts = products.filter(
      (item) =>
        (selectedCode === "Все" ||
          item.code.toUpperCase() === selectedCode.toUpperCase()) &&
        (selectedCategory.length === 1 ||
          item.categories.has(
            categoriesIds[selectedCategory[selectedCategory.length - 1]]
          )) &&
        item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    const prices = filtredProducts.map((p) => p.price);
    let _minProductPrice = prices[0] || 0;
    for (const price of prices) {
      _minProductPrice = Math.min(price, _minProductPrice);
    }
    setMinProductPrice(_minProductPrice);
    let _maxProductPrice = prices[0] || 1;
    for (const price of prices) {
      _maxProductPrice = Math.max(price, _maxProductPrice);
    }
    _maxProductPrice = Math.max(_maxProductPrice, _minProductPrice + 1);
    setMaxProductPrice(_maxProductPrice);
    let _priceFilter = {
      min:
        minProductPrice === priceFilter.min
          ? _minProductPrice
          : Math.min(
              Math.max(priceFilter.min, _minProductPrice),
              _maxProductPrice - 0.01
            ),
      max:
        maxProductPrice === priceFilter.max
          ? _maxProductPrice
          : Math.max(
              Math.min(priceFilter.max, _maxProductPrice),
              _minProductPrice + 0.01
            ),
    };
    if (
      _priceFilter.min !== priceFilter.min ||
      _priceFilter.max !== priceFilter.max
    ) {
      setPriceFilter(_priceFilter);
    }

    setDisplayedItems(
      filtredProducts.filter(
        (p) => p.price >= _priceFilter.min && p.price <= _priceFilter.max
      )
    );
    setItemsLoaded(true);

    setSubCategories(
      (selectedCategory.length === 1
        ? [...parentCategories]
        : Object.keys(getByPath(hierarchy, selectedCategory.slice(1)))
      )
        .sort()
        .filter((c) =>
          filtredProducts.find((p) => p.categories.has(categoriesIds[c]))
        )
    );
  }, [selectedCode, selectedCategory, search, priceFilter]);

  const columns = [
    {
      name: "Изображение",
      selector: "image",
      cell: (row) => (
        <img
          src={
            row.img
              ? `//avatars.mds.yandex.net/${row.img}/50x50`
              : "/not_found_svg.svg"
          }
          width="50"
          height="50"
          alt={row.name}
        />
      ),
      center: true,
      grow: "0",
      compact: true,
    },
    {
      name: "Название",
      selector: "name",
      sortable: true,
      grow: "2",
      wrap: true,
      compact: true,
    },
    {
      name: "Старая цена",
      selector: "old_price",
      sortable: true,
      cell: (row) => <span>{row.old_price}₽</span>,
      grow: "0",
      compact: true,
      minWidth: "60px",
    },
    {
      name: "Цена со скидкой",
      selector: "price",
      sortable: true,
      cell: (row) => <span>{row.price}₽</span>,
      grow: "0",
      compact: true,
      minWidth: "60px",
    },
    {
      name: "Реальная выгода",
      selector: "real_discount",
      sortable: true,
      defaultSortAsc: false,
      cell: (row) => <span>{row.real_discount}₽</span>,
      sortFunction: (rowA, rowB) =>
        (parseInt(rowA.real_discount) + 0.1 || 0.5) -
        (parseInt(rowB.real_discount) + 0.1 || 0.5),
      grow: "0",
      compact: true,
      minWidth: "60px",
    },
    {
      name: "Промокод",
      selector: "code",
      sortable: true,
      cell: (row) => <span>{row.code.toUpperCase()}</span>,
      sortFunction: (rowA, rowB) =>
        parseInt((rowA.code.match(/\d+/) || ["0"])[0]) -
        parseInt((rowB.code.match(/\d+/) || ["0"])[0]),
      defaultSortAsc: false,
      grow: "0",
      compact: true,
      minWidth: "70px",
    },
    {
      name: "Купить",
      selector: "buy",
      cell: (row) => (
        <Button
          color="warning"
          href={`https://pokupki.market.yandex.ru/product/${row.id}${
            useRefLinks ? "?pp=1900&clid=2449277&mclid=1002&distr_type=7" : ""
          }`}
          target="_blank"
          rel="noopener"
        >
          Купить
        </Button>
      ),
      minWidth: "100px",
      grow: "0",
      compact: true,
    },
  ];

  function getByPath(obj, parts) {
    var o = obj;
    if (parts.length > 1) {
      for (var i = 0; i < parts.length - 1; i++) {
        if (!o[parts[i]]) o[parts[i]] = {};
        o = o[parts[i]];
      }
    }

    return o[parts[parts.length - 1]];
  }

  const selectors = (
    <>
      {" "}
      <div className="d-flex flex-wrap">
        <h3 className="mr-2">Промокоды:</h3>
        {[
          ...(showAllCodes ? ["Все", ...codes] : ["Все"]).map((code) => (
            <div className="h3 mr-1" key={code}>
              <Badge
                color={code === selectedCode ? "warning" : "secondary"}
                pill
                onClick={() => setSelectedCode(code)}
              >
                {code.toUpperCase()}
              </Badge>
            </div>
          )),
          <div className="h3 mr-1" key="toggle">
            <Badge
              color="light"
              className="border border-warning"
              pill
              onClick={() => setShowAllCodes(!showAllCodes)}
            >
              {showAllCodes ? "< Скрыть список" : "Показать список >"}
            </Badge>
          </div>,
        ]}
      </div>
      <div className="d-flex flex-wrap overflow-auto mt-2">
        <h5 className="mr-2">Категория:</h5>
        <ol className="breadcrumb-arrow">
          {selectedCategory.map((sc, i) => (
            <li key={sc}>
              <span
                role="button"
                onClick={() =>
                  setSelectedCategry(selectedCategory.slice(0, i + 1))
                }
              >
                {sc}
              </span>
            </li>
          ))}
        </ol>
      </div>
      {subCategories.length > 0 ? (
        <div className="d-flex flex-wrap overflow-auto">
          <h5 className="mr-2 mb-0">Подкатегории:</h5>
          {subCategories.map((category) => (
            <div className="h4 mr-1 mb-1" key={category}>
              <Badge
                color={category === selectedCategory ? "warning" : "secondary"}
                pill
                onClick={() => {
                  setSelectedCategry([...selectedCategory, category]);
                }}
              >
                {category}
              </Badge>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );

  let dataTableRef;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Head>
        <title className="mb-0">Промокоды для Яндекс.Маркета</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Каталог всех товаров доступных для покупки на Яндекс.Маркете со скидкой по промокодам ${codes.join(
            ", "
          )}.`}
        />
      </Head>
      <header className="bg-warning mb-3">
        <Container>
          <div className="w-100 py-2">
            <h1 className="mb-0">
              <a href="/">Промокоды для Яндекс.Маркета</a>
            </h1>
          </div>
        </Container>
        <Alert color="success" className="mb-0 text-center" fade={false}>
          <Container>
            <p className="mb-0">
              Огромное спасибо всем, кто распространяет ссылку на этот сайт!
            </p>
          </Container>
        </Alert>
      </header>
      <main className="overflow-auto mb-3">
        <Container fluid="md">
          {selectors}
          <Row className="mt-3">
            <Col md={4}>
              <Input
                placeholder="Поиск"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            {/* <Col xs={6} md={2} className="pr-2">
              <Input
                type="number"
                placeholder={formatter.format(priceFilter.min)}
                value={priceFilter.min}
                onBlur={(e) =>
                  setPriceFilter({ min: e.target.value, max: priceFilter.max })
                }
              ></Input>
            </Col>
            -
            <Col xs={6} md={2} className="pl-1">
              <Input
                type="number"
                placeholder={formatter.format(priceFilter.max)}
              ></Input>
            </Col> */}
            <Col md={7} className="py-4 mx-3 pt-md-0 mx-md-0">
              <InputRange
                maxValue={maxProductPrice + 0.001}
                minValue={minProductPrice - 0.001}
                value={priceFilter}
                formatLabel={(value) =>
                  `${
                    value === minProductPrice || value === maxProductPrice
                      ? ""
                      : formatter.format(value)
                  }`
                }
                onChange={(value) =>
                  setPriceFilter({
                    min: Math.max(value.min, minProductPrice),
                    max: Math.min(value.max, maxProductPrice),
                  })
                }
              />
            </Col>
          </Row>
          <div ref={(ref) => (dataTableRef = ref)}>
            <DataTable
              noHeader={true}
              columns={columns}
              data={displayedItems}
              noDataComponent={
                itemsLoaded ? (
                  "Не найдено товаров соответвущий критериям"
                ) : (
                  <h2 className="text-center">Идёт загрузка товаров...</h2>
                )
              }
              pagination={true}
              paginationRowsPerPageOptions={[10, 50, 100, 500, 1000]}
              paginationComponentOptions={{
                rowsPerPageText: "Товаров на странице:",
                rangeSeparatorText: "из",
                noRowsPerPage: false,
                selectAllRowsItem: false,
                selectAllRowsItemText: "Все",
              }}
              onChangePage={() => {
                dataTableRef.scrollIntoView();
              }}
            />
          </div>
          {router.query["bb"] ? selectors : null}
        </Container>
      </main>
      <footer className="bg-secondary text-white py-0 w-100">
        <Alert color="secondary" className="mb-0" fade={false}>
          <p className="mb-0">
            Последнее обновление списка товаров:{" "}
            {new Date(fastScanEnd).toLocaleString()}
          </p>
          {/* <p className="mb-0">
            Последнее обновление списка промокодов и реальной выгоды:{" "}
            {new Date(scanEnd).toLocaleString()}
          </p> */}
        </Alert>
        <Alert color="info" className="mb-0" fade={false}>
          Ссылки на Маркет являются партнёрскими(
          <span
            className="text-primary"
            role="button"
            onClick={() => {
              if (localStorage.getItem("useRefLinks") === "enabled") {
                localStorage.setItem("useRefLinks", "disabled");
                setUseRefLinks(false);
              } else {
                localStorage.setItem("useRefLinks", "enabled");
                setUseRefLinks(true);
              }
            }}
          >
            {useRefLinks ? "отключить" : "включить"}
          </span>
          ) . Для некоторых товаров имеется колонка "Реальная выгода", она
          показывает разницу с минимальной ценой на товар по маркету в Москве
          (за идею спасибо{" "}
          <a href="https://www.pepper.ru/profile/Rustik_Ufa">Rustik_Ufa</a>).
          Обратную связь по сайту, можете написать мне в{" "}
          <a
            href="https://www.pepper.ru/profile/sevskii"
            target="_blank"
            rel="noopener"
          >
            личку на Pepper
          </a>{" "}
          или на почту{" "}
          <a href="mailto:sevskii111@gmail.com" target="_blank" rel="noopener">
            sevskii111@gmail.com
          </a>
          .
        </Alert>
        {/* <Alert color="danger" className="mb-0">
          Картинки некоторых товаров могут быть от товаров с похожими
          названиями. Проблема затрагивает только сами картинки и я постараюсь
          её как можно скорее исправить.
        </Alert> */}
        <Container className="py-2">
          Создатель сайта не имеет отношения к компаниям Яндекс и Яндекс.Маркет
        </Container>
      </footer>
      <YMInitializer accounts={[71256484]} />
    </div>
  );
}

export async function getStaticProps(context) {
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

  const archive_files = 3;
  let fastProductsMap = {};
  for (let i = archive_files; i >= 0; i--) {
    const from =
      i === 0
        ? `./products_from_promos.json`
        : `./products_from_promos_${i}.json`;
    if (!fs.existsSync(from)) continue;
    const products_from_file = JSON.parse(fs.readFileSync(from, "utf-8"));
    for (const product of products_from_file) {
      fastProductsMap[product.id] = product;
    }
  }
  const fastProducts = Object.values(fastProductsMap);

  let codes = new Set();
  const products = [
    ...(await products_collection
      .find({
        min_price: { $ne: null },
        id: { $in: fastProducts.map((p) => "" + p.id) },
      })
      .toArray()),
    ...require("../products_from_search.json"),
  ];

  console.log(products.length);

  const scanEnds = (await updates_collection.findOne()) || {};

  const scanEnd = scanEnds.products || 0;
  const fastScanEnd = scanEnds.promos || 0;

  const unknowHids = new Set(
    JSON.parse(fs.readFileSync("./public/unknownHids.json"))
  );
  const hids = require("../hids");
  const hidToSubCategroyMap = {};
  for (const hid of hids) {
    unknowHids.delete(parseInt(hid.hid));
    hidToSubCategroyMap[hid.hid] = hid.subCategory;
  }

  let uniqueProducts = {};
  let bad_prices = [];
  let productsCsv = "Ссылка,Название,Цена со скидкой, Код";

  for (const product of fastProducts) {
    codes.add(product.code);
    if (hidToSubCategroyMap[product.hid]) {
      uniqueProducts[product.id] = {
        ...product,
        real_discount: "?",
        category: hidToSubCategroyMap[product.hid],
      };
    } else {
      unknowHids.add(product.hid);
    }
  }

  for (const product of products) {
    //codes.add(product.code);
    if (!uniqueProducts[product.id]) {
      if (product.code !== "VSEMPODARKI8") continue;
      uniqueProducts[product.id] = {
        ...product,
        real_discount:
          product.min_price &&
          product.min_price < uniqueProducts[product.id].old_price
            ? product.min_price - product.price
            : "?",
      };
    } else {
      uniqueProducts[product.id].real_discount =
        product.min_price &&
        product.min_price < uniqueProducts[product.id].old_price
          ? product.min_price - uniqueProducts[product.id].price
          : "?";
      //uniqueProducts[product.id].img = product.img;
    }
    if (product.min_price > product.old_price) {
      bad_prices.push(product);
    }
    productsCsv += `https://pokupki.market.yandex.ru/product/${product.id},${product.name},${product.price},${product.code}\n`;
  }
  console.log(`${bad_prices.length} prices are bad`);
  console.log(bad_prices);
  // for (const product of Object.values(uniqueProducts)) {
  //   product.category = categoriesHierarhy[product.category];

  //   if (!product.img) {
  //     product.img = "/icons8-inbox-48.png";
  //   }
  // }

  fs.writeFileSync("./products_json.json", JSON.stringify(products), "utf8");
  fs.writeFileSync("./products.csv", productsCsv);
  fs.writeFileSync(
    "./public/unknownHids.json",
    JSON.stringify([...unknowHids])
  );

  codes = [...codes].sort(
    (a, b) =>
      (b.match(/\d+/) ? b.match(/\d+/)[0] : 0) -
      (a.match(/\d+/) ? a.match(/\d+/)[0] : 0)
  );
  let codesMap = {};
  codes.forEach((code, i) => (codesMap[code] = i));

  const categoriesIds = {};
  const categories = {};
  for (const category in categoriesHierarhyNew.hierarchy_inversed) {
    if (!categoriesIds[category]) {
      categoriesIds[category] = Object.keys(categoriesIds).length;
    }
    const categoryTree = categoriesHierarhyNew.hierarchy_inversed[category];
    for (const parentCategory of categoryTree) {
      if (!categoriesIds[parentCategory]) {
        categoriesIds[parentCategory] = Object.keys(categoriesIds).length;
      }
    }

    categories[categoriesIds[category]] = categoryTree.map(
      (c) => categoriesIds[c]
    );
  }

  // console.log(categories);

  console.log(Object.values(uniqueProducts)[0]);

  let products_sorted = Object.values(uniqueProducts).sort(
    (a, b) =>
      (parseInt(b.real_discount) + 0.1 || 0.5) -
      (parseInt(a.real_discount) + 0.1 || 0.5)
  );

  const wtf_products = products_sorted.filter(
    (p) => !p.category || !categoriesIds[p.category]
  );
  if (wtf_products.length > 0) {
    console.log("No category for:");
    console.log(wtf_products);
  }

  products_sorted = products_sorted.filter(
    (p) => !!p.category && categoriesIds[p.category] && p.price < p.old_price
  );


  return JSON.parse(
    JSON.stringify({
      props: {
        codes: codes,
        hierarchy: categoriesHierarhyNew.hierarchy,
        parentCategories: categoriesHierarhyNew.parentCategories.sort(),
        products: products_sorted.map((product) => ({
          name: product.name,
          img: product.img
            ? (product.img.split('/')[3] + '/' + product.img.split('/')[4] + '/' + product.img.split('/')[5])
            : null,
          id: product.id,
          code: codesMap[product.code],
          old_price: product.old_price,
          price: product.price,
          category: categoriesIds[product.category],
          real_discount: product.real_discount,
        })),

        categoriesIds,
        categories,
        scanEnd,
        fastScanEnd,
      },
    })
  );
}
