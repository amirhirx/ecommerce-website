import ProductsFilter from "@/components/ProductsFilter"
import ProductsList from "@/components/ProductsList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "محصولات",
    description: "صفحه محصولات فروشگاه",
}

export default async function Products() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-black my-2">محصولات</h1>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="md:w-2/12 w-full">
                    <ProductsFilter />
                </div>
                <div className="md:w-10/12 w-full">
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}
