import { Metadata } from "next"
import ProductsFilter from "@/components/ProductsFilter"
import ProductsContainer from "@/components/ProductsContainer"
import { getAllProducts } from "@/services/getAllProducts"

export const metadata: Metadata = {
    title: "محصولات",
    description: "صفحه محصولات فروشگاه",
}

export default async function Products({
    searchParams,
}: {
    searchParams: { page: string }
}) {
    const products = await getAllProducts()
    const { page } = await searchParams

    return (
        <div className="w-[97.5%] mx-auto">
            <h1 className="text-2xl font-black my-2">محصولات</h1>
            <div className="md:flex md:items-start md:gap-6">
                <ProductsFilter />
                <ProductsContainer products={products} page={Number(page)} />
            </div>
        </div>
    )
}
