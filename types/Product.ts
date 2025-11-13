export interface IProduct {
    id: number
    title: string
    slug: string
    shortDescription: string
    description: string
    price: number
    discount: number
    inStock: boolean
    stockCount: number
    brand: string
    category: string[]
    tags: string[]
    images: string[]
    features: { text: string; value: string }[]
    reviews: {
        name: string
        comment: string
        rating: number
    }[]
}
