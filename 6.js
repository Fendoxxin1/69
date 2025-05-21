"use strict";
let product = {
  id: 1,
  name: "Laptop",
  price: 1000,
  description: "Powerful laptop",
};
function updateProduct(update) {
  if (update.name) product.name = update.name;
  if (update.price) product.price = update.price;
}
updateProduct({ name: "New Laptop", price: 1100 });
console.log(product);
function showProductSummary(prod) {
  console.log(`ID: ${prod.id} - Nomi: ${prod.name}`);
}
showProductSummary({ id: 1, name: "New Laptop" });
const readonlyProduct = {
  id: 1,
  name: "Phone",
  price: 500,
  description: "Smartphone",
};
