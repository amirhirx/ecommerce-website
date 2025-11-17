export async function getProductBySlug(slug: string) {
    const url = `http://localhost:3000/api/products/${slug}`
    const res = await fetch(url)
    const { product } = await res.json()
    return product
}
