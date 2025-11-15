import ProductCard from "@/components/ProductCard"
import ProductsFilter from "@/components/ProductsFilter"

export default async function Products() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-black my-2">محصولات</h1>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="md:w-2/12 w-full">
                    <ProductsFilter />
                </div>
                <div className="md:w-10/12 w-full">
                    <div className="md:flex md:flex-wrap md:gap-4 gap-2 grid grid-cols-2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
