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
import Home from "./index";
const MongoClient = require("mongodb").MongoClient;

export default Home;

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

  let codes = new Set();
  const products = [
    ...(await products_collection.find({}).toArray()),
    ...require("../products_from_search.json"),
  ];
  const fastProducts = require("../products_from_promos.json");

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

  codes.add("VSEMPODARKI8");
  for (const product of products) {
    if (!product.code) {
      console.log(product);
    }
    //codes.add(product.code);
    if (!uniqueProducts[product.id]) {
      if (product.code !== "VSEMPODARKI8") continue;
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

  codes = [...codes]
    .filter((code) => code === "VSEMPODARKI8")
    .sort(
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

  let products_sorted = Object.values(uniqueProducts)
    .filter((product) => product.code === "VSEMPODARKI8")
    .sort(
      (a, b) =>
        (parseInt(b.real_discount) + 0.1 || 0.5) -
        (parseInt(a.real_discount) + 0.1 || 0.5)
    );

  const wtf_products = products_sorted.filter(
    (p) => !p.category || !categoriesIds[p.category]
  );
  if (wtf_products.length == 0) {
    console.log("No category for:");
    console.log(wtf_products);
  }

  products_sorted = products_sorted.filter(
    (p) => !!p.category && categoriesIds[p.category]
  );

  return {
    props: {
      codes: codes,
      hierarchy: categoriesHierarhyNew.hierarchy,
      parentCategories: categoriesHierarhyNew.parentCategories,
      products: products_sorted.map((product) => ({
        name: product.name,
        img: product.img
          ? product.img
              .replace("https://avatars.mds.yandex.net/get-mpic/", "")
              .replace("//avatars.mds.yandex.net/get-mpic/", "")
              .replace("/50x50", "")
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
  };
}
