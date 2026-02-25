import { IProduct } from "@/types/Product";

const url = "http://localhost:3000/api/products";

export async function getAllProducts() {
  const res = await fetch(url);
  const { products } = await res.json();
  return products as IProduct[];
}
