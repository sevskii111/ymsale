import Head from "next/head";
import { Alert, Badge, Button, Col, Container, Input, Row } from "reactstrap";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import categoriesHierarhy from "../categories_hierarchy.json";
import { YMInitializer } from "react-yandex-metrika";
import fs from "fs";
import InputRange from "react-input-range";
import { addBackToTop } from "vanilla-back-to-top";
import { useRouter } from "next/router";

var formatter = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",

  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function Home({ codes, products, scanEnd, fastScanEnd }) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategry] = useState("Все");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Все");
  const [selectedCode, setSelectedCode] = useState("Все");
  const [displayedItems, setDisplayedItems] = useState();
  const [showSubcategoriesFor, setShowSubcategoriesFor] = useState(null);
  const [search, setSearch] = useState("");
  const [minProductPrice, setMinProductPrice] = useState(0);
  const [maxProductPrice, setMaxProductPrice] = useState(1);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1 });
  const [itemsLoaded, setItemsLoaded] = useState(false);

  useEffect(() => {
    addBackToTop({ backgroundColor: "#ffc107" });
  }, []);

  useEffect(() => {
    const filtredProducts = products.filter(
      (item) =>
        (selectedCode === "Все" ||
          item.code.toUpperCase() === selectedCode.toUpperCase()) &&
        (selectedCategory === "Все" || item.category === selectedCategory) &&
        (selectedSubCategory === "Все" ||
          item.subcategory === selectedSubCategory) &&
        item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
        (!item.isAdult ||
          (selectedCategory === "Товары для взрослых" &&
            localStorage.getItem("isAdult") === "true"))
    );
    const prices = filtredProducts.map((p) => p.price);
    let _minProductPrice = prices[0];
    for (const price of prices) {
      _minProductPrice = Math.min(price, _minProductPrice);
    }
    setMinProductPrice(_minProductPrice);
    let _maxProductPrice = prices[0];
    for (const price of prices) {
      _maxProductPrice = Math.max(price, _maxProductPrice);
    }
    _maxProductPrice = Math.max(_maxProductPrice, _minProductPrice + 1);
    setMaxProductPrice(_maxProductPrice);
    let _priceFilter = {
      min:
        minProductPrice === priceFilter.min
          ? _minProductPrice
          : Math.max(priceFilter.min, _minProductPrice),
      max:
        maxProductPrice === priceFilter.max
          ? _maxProductPrice
          : Math.min(priceFilter.max, _maxProductPrice),
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
  }, [
    selectedCode,
    selectedCategory,
    selectedSubCategory,
    search,
    priceFilter,
  ]);

  const columns = [
    {
      name: "Изображение",
      selector: "image",
      cell: (row) => (
        <img src={row.img} width="50" height="50" alt={row.name} />
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
          href={`https://pokupki.market.yandex.ru/product/${row.id}`}
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

  const categories = [
    "Все",
    ...[
      ...products
        .filter(
          (item) =>
            selectedCode === "Все" ||
            item.code.toUpperCase() === selectedCode.toUpperCase()
        )
        .reduce((prev, curr) => {
          return prev.add(curr.category);
        }, new Set()),
    ].sort((a, b) =>
      a === "Товары для взрослых"
        ? 1
        : b === "Товары для взрослых"
        ? -1
        : a.localeCompare(b)
    ),
  ];

  const subCategories = [
    "Все",
    ...[
      ...products
        .filter(
          (item) =>
            (selectedCode === "Все" ||
              item.code.toUpperCase() === selectedCode.toUpperCase()) &&
            showSubcategoriesFor === item.category
        )
        .reduce((prev, curr) => {
          return prev.add(curr.subcategory);
        }, new Set()),
    ].sort(),
  ];

  const selectors = (
    <>
      {" "}
      <div className="d-flex flex-wrap">
        <h3 className="mr-2">Промокоды:</h3>
        {[
          ["Все", ...codes].map((code) => (
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
        ]}
      </div>
      <div className="d-flex flex-wrap overflow-auto">
        <h5 className="mr-2">Категории:</h5>
        {categories.map((category) => (
          <div className="h5 mr-1" key={category}>
            <Badge
              color={
                category === selectedCategory
                  ? "warning"
                  : category === "Товары для взрослых"
                  ? "danger"
                  : "secondary"
              }
              pill
              onClick={() => {
                if (
                  category === "Товары для взрослых" &&
                  (!localStorage.getItem("isAdult") ||
                    localStorage.getItem("isAdult") !== "true")
                ) {
                  const isAdult = confirm("Вам есть 18 лет?");
                  localStorage.setItem("isAdult", isAdult);
                  if (!isAdult) {
                    return;
                  }
                }
                setSelectedCategry(category);
                setShowSubcategoriesFor(category === "Все" ? null : category);
                setSelectedSubCategory("Все");
              }}
            >
              {category}
            </Badge>
          </div>
        ))}
      </div>
      {showSubcategoriesFor !== null ? (
        <div className="d-flex flex-wrap">
          <p className="mr-2 mb-0">Подкатегории:</p>
          {subCategories.map((sub) => (
            <Badge
              color={sub === selectedSubCategory ? "warning" : "secondary"}
              pill
              onClick={() => setSelectedSubCategory(sub)}
              className="my-1 mr-1"
            >
              {sub}
            </Badge>
          ))}
        </div>
      ) : null}
    </>
  );

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Head>
        <title>Промокоды для Яндекс.Маркета</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Каталог всех товаров доступных для покупки на Яндекс.Маркете со скидкой по промокодам CUT4-CUT25 и GO3-GO29."
        />
      </Head>
      <header className="bg-warning mb-3">
        <Container>
          <div className="w-100 py-2">
            <h1>Промокоды для Яндекс.Маркета</h1>
          </div>
        </Container>
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
          <DataTable
            noHeader={true}
            columns={columns}
            data={displayedItems}
            noDataComponent={
              itemsLoaded
                ? "Не найдено товаров соответвущий критериям"
                : "Идёт загрузка товаров..."
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
          />
          {router.query["bb"] ? selectors : null}
        </Container>
      </main>
      <footer className="bg-secondary text-white py-0 w-100">
        <Alert color="secondary" className="mb-0">
          <p className="mb-0">
            Последнее обновление списка товаров:{" "}
            {new Date(fastScanEnd).toLocaleString()}
          </p>
          <p className="mb-0">
            Последнее обновление списка промокодов и реальной выгоды:{" "}
            {new Date(scanEnd).toLocaleString()}
          </p>
        </Alert>
        <Alert color="info" className="mb-0">
          В таблицу добавлена колонка "Реальная выгода", она показывает разницу
          с минимальной ценой на товар по маректу в Москве (за идею спасибо{" "}
          <a href="https://www.pepper.ru/profile/Rustik_Ufa">Rustik_Ufa</a>),
          пока что в этой колонке возможны ошибки и пропуски. Вопросы, советы и
          замечания по сайту, можете написать мне в{" "}
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
          Создатель сайта не имеет отношения к компаниям Яндекс и Яндекс.Марект
        </Container>
      </footer>
      <YMInitializer accounts={[71256484]} />
    </div>
  );
}

export async function getStaticProps(context) {
  let codes = new Set();
  const { products, scanEnd } = JSON.parse(
    fs.readFileSync("./products_with_timestamp.json")
  );
  const { products: fastProducts, scanEnd: fastScanEnd } = JSON.parse(
    fs.readFileSync("./products_with_timestamp_from_promos.json")
  );
  const unknowHids = new Set(JSON.parse(fs.readFileSync("unknownHids.json")));
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
    if (!product.code) {
      console.log(product);
    }
    codes.add(product.code);
    if (!uniqueProducts[product.id]) {
      uniqueProducts[product.id] = {
        ...product,
        real_discount:
          product.min_price < product.old_price
            ? product.min_price - product.price
            : "?",
      };
    } else {
      uniqueProducts[product.id].real_discount =
        product.min_price < uniqueProducts[product.id].old_price
          ? product.min_price - uniqueProducts[product.id].price
          : "?";
      uniqueProducts[product.id].img = product.img;
    }
    if (product.min_price > product.old_price) {
      bad_prices.push(product);
    }
    productsCsv += `https://pokupki.market.yandex.ru/product/${product.id},${product.name},${product.price},${product.code}\n`;
  }
  console.log(`${bad_prices.length} prices are bad`);
  console.log(bad_prices);
  for (const product of Object.values(uniqueProducts)) {
    if (!product.subcategory) {
      product.subcategory = product.category;
      product.category = categoriesHierarhy[product.category];
      product.isAdult = product.category === "Товары для взрослых";
      if (!product.category) {
        console.log(product);
      }
    }
    if (!product.img) {
      product.img = "/icons8-inbox-48.png";
    }
  }

  fs.writeFileSync("./products_json.json", JSON.stringify(products), "utf8");
  fs.writeFileSync("./products.csv", productsCsv);
  fs.writeFileSync("./unknownHids.json", JSON.stringify([...unknowHids]));

  return {
    props: {
      codes: [...codes].sort(
        (a, b) =>
          (b.match(/\d+/) ? b.match(/\d+/)[0] : 0) -
          (a.match(/\d+/) ? a.match(/\d+/)[0] : 0)
      ),
      products: Object.values(uniqueProducts)
        .sort(
          (a, b) =>
            (parseInt(b.real_discount) + 0.1 || 0.5) -
            (parseInt(a.real_discount) + 0.1 || 0.5)
        )
        .map((product) => ({
          name: product.name,
          img: product.img,
          id: product.id,
          code: product.code,
          old_price: product.old_price,
          price: product.price,
          category: product.category,
          subcategory: product.subcategory,
          real_discount: product.real_discount,
        })),
      scanEnd,
      fastScanEnd,
    },
  };
}
