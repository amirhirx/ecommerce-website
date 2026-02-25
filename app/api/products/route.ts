import { NextResponse } from "next/server";
import { products } from "@/data.json";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slugQuery = searchParams.get("slug");
    const categoryQuery = searchParams.get("category");

    if (categoryQuery) {
      const categorizedProducts = products.filter((p) =>
        p.category.includes(categoryQuery),
      );
      return NextResponse.json(
        { products: categorizedProducts },
        { status: 200 },
      );
    }

    if (slugQuery) {
      const product = products.find((items) => items.slug === slugQuery);
      if (product) {
        return NextResponse.json({ product }, { status: 200 });
      } else {
        return NextResponse.json({ message: "Not found!" }, { status: 404 });
      }
    }

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
