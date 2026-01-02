import { Metadata } from "next"
import ProductsFilter from "@/components/ProductsFilter"
import ProductsContainer from "@/components/ProductsContainer"
import { IProduct } from "@/types/Product"
import ProductCard from "@/components/ProductCard"
import { getAllProducts } from "@/services/getAllProducts"

export const metadata: Metadata = {
    title: "محصولات",
    description: "صفحه محصولات فروشگاه",
}

export default async function Products() {
    const { products } = await getAllProducts()
    return (
        <div className="w-[97.5%] mx-auto">
            <h1 className="text-2xl font-black my-2">محصولات</h1>
            <div className="md:flex md:items-start md:gap-6">
                <ProductsFilter />
                <ProductsContainer>
                    {products.map(
                        ({ id, title, price, images, slug }: IProduct) => {
                            return (
                                <ProductCard
                                    key={id}
                                    title={title}
                                    price={price}
                                    image={images[0]}
                                    slug={slug}
                                />
                            )
                        }
                    )}
                </ProductsContainer>
            </div>
        </div>
    )
}
