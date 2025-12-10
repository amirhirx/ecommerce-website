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
        <div className="p-4">
            <h1 className="text-2xl font-black my-2">محصولات</h1>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="md:w-2/12 w-full">
                    <ProductsFilter />
                </div>
                <div className="md:w-10/12 w-full">
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
        </div>
    )
}
