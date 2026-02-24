import { NextRequest, NextResponse } from "next/server"
import { products } from "@/data.json"

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> },
) {
    try {
        const { id } = await context.params
        const product = products.find((product) => {
            return product.id == Number(id)
        })
        if (!product)
            return NextResponse.json({ message: "Not found" }, { status: 404 })

        return NextResponse.json({ product }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
