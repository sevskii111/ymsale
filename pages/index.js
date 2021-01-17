import Head from "next/head";
import { Badge, Button, Container } from "reactstrap";
import codes from "../codes.js";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import products from "../products.json";
import { YMInitializer } from "react-yandex-metrika";

export default function Home({ codes, products }) {
  const [selectedCategory, setSelectedCategry] = useState("Все");
  const [selectedCode, setSelectedCode] = useState(codes[0].code);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    setDisplayedItems(
      products.filter(
        (items) =>
          (selectedCode === "Все" || items.code === selectedCode) &&
          (selectedCategory === "Все" || items.category === selectedCategory)
      )
    );
  }, [selectedCode, selectedCategory]);

  const columns = [
    {
      name: "Изображение",
      selector: "image",
      cell: (row) => <img src={row.img} width="64" />,
      center: true,
      grow: "0",
      compact: true,
    },
    {
      name: "Название",
      selector: "name",
      sortable: true,
      grow: "1",
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
    },
    {
      name: "Цена со скидкой",
      selector: "price",
      sortable: true,
      cell: (row) => <span>{row.price}₽</span>,
      grow: "0",
      compact: true,
    },
    {
      name: "Купить",
      selector: "buy",
      cell: (row) => (
        <Button
          color="warning"
          href={`https://pokupki.market.yandex.ru/product/${row.id}`}
          target="_blank"
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
    ...products
      .filter((items) => selectedCode === "Все" || items.code === selectedCode)
      .reduce((prev, curr) => {
        return prev.add(curr.category);
      }, new Set()),
  ];
  return (
    <div className="min-vh-100">
      <Head>
        <title>Промокоды для Яндекс.Маректа</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="yandex-verification" content="8b9b2457041ebe9e" />
      </Head>
      <header className="bg-warning mb-3">
        <Container>
          <div className="w-100 py-2">
            <h1>Промокоды для Яндекс.Маректа</h1>
          </div>
        </Container>
      </header>
      <main className="overflow-auto">
        <Container>
          <div className="d-flex flex-wrap">
            <h3 className="mr-2">Промокоды:</h3>
            {[
              [{ code: "Все" }, ...codes].map((code) => (
                <div className="h3 mr-1" key={code.code}>
                  <Badge
                    color={code.code === selectedCode ? "warning" : "secondary"}
                    pill
                    onClick={() => setSelectedCode(code.code)}
                  >
                    {code.code}
                  </Badge>
                </div>
              )),
            ]}
          </div>
          <div className="d-flex flex-wrap">
            <h5 className="mr-2">Категории:</h5>
            {categories.map((category) => (
              <div className="h5 mr-1" key={category}>
                <Badge
                  color={
                    category === selectedCategory ? "warning" : "secondary"
                  }
                  pill
                  onClick={() => setSelectedCategry(category)}
                >
                  {category}
                </Badge>
              </div>
            ))}
          </div>
          <DataTable
            noHeader={true}
            columns={columns}
            data={displayedItems}
            noDataComponent
            noDataComponent="Не найдено товаров соответвущий критериям"
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
        </Container>
      </main>

      <footer className="bg-secondary text-white py-3 w-100">
        <Container>
          Создатель сайта не имеет отношения к компаниям Яндекс и Яндекс.Марект
        </Container>
      </footer>
      <YMInitializer accounts={[71256484]} />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      codes,
      products,
    },
  };
}
