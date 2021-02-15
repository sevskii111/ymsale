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
import Home from "./index";

export default Home;

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

  // fs.writeFileSync("./products_json.json", JSON.stringify(products), "utf8");
  // fs.writeFileSync("./products.csv", productsCsv);
  // fs.writeFileSync("./unknownHids.json", JSON.stringify([...unknowHids]));

  return {
    props: {
      codes: ["VSEMPODARKI"],
      products: Object.values(uniqueProducts)
        .filter((p) => p.code === "VSEMPODARKI")
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
