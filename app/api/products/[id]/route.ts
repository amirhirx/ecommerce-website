import { NextResponse } from "next/server"
import productsJSON from "@/data.json"
import { IProduct } from "@/types/Product"

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: number }> },
) {
    const { id } = await params
    const products: IProduct[] = productsJSON.products
    const product = products.find((product) => {
        return product.id == id
    })

    try {
        return NextResponse.json({ product }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
