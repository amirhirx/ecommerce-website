import { IProduct } from "@/types/Product"

export async function getProductById(id: number) {
    const url = `http://localhost:3000/api/products/${id}`
    const res = await fetch(url)
    const { product } = await res.json()
    return product as IProduct
}
