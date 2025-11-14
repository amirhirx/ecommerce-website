import { NextResponse } from "next/server"
import products from "@/data.json"

export async function GET() {
    try {
        return NextResponse.json({ products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
