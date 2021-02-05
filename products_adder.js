const fs = require("fs");

const newProducts = JSON.parse(fs.readFileSync("new_products.json"));
const products = JSON.parse(fs.readFileSync("products.json"));

let productsMap = {};

for (const product of newProducts) {
  if (!productsMap[product.id]) {
    productsMap[product.id] = product;
  }
}

let bad_prices = 0;
for (const product of products) {
  let min_price = null;
  if (productsMap[product.id]) {
    if (productsMap[product.id].img != product.img) {
      bad_prices++;
    } else {
      min_price = productsMap[product.id].min_price;
    }
  }
  productsMap[product.id] = {
    ...product,
    min_price: min_price || product.old_price,
  };
}
console.log(`${bad_prices} prices are bad`);

const uniqueProducts = Object.values(productsMap);
fs.writeFileSync("products.json", JSON.stringify(uniqueProducts));
