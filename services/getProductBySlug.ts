import { IProduct } from "@/types/Product";

export async function getProductBySlug(slug: string) {
  const url = `http://localhost:3000/api/products/?slug=${slug}`;
  const res = await fetch(url);
  const { product } = await res.json();
  return product as IProduct;
}
