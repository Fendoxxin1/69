interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

let product: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
  description: "Powerful laptop",
};

function updateProduct(update: Partial<Pick<Product, "name" | "price">>) {
  if (update.name) product.name = update.name;
  if (update.price) product.price = update.price;
}

updateProduct({ name: "New Laptop", price: 1100 });
console.log(product);

type ProductSummary = Pick<Product, "id" | "name">;

function showProductSummary(prod: ProductSummary): void {
  console.log(`ID: ${prod.id} - Nomi: ${prod.name}`);
}

showProductSummary({ id: 1, name: "New Laptop" });

const readonlyProduct: Readonly<Product> = {
  id: 1,
  name: "Phone",
  price: 500,
  description: "Smartphone",
};
