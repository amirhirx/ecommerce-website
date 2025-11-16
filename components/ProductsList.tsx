import { IProduct } from "@/types/Product"
import ProductCard from "./ProductCard"
import { getAllProducts } from "@/services/getAllProducts"

export default async function ProductsList() {
    const { products } = await getAllProducts()

    return (
        <div className="md:flex md:flex-wrap md:gap-4 gap-2 grid grid-cols-2">
            {console.log(products)}
            {products.map(({ id, title, price, images, slug }: IProduct) => {
                return (
                    <ProductCard
                        key={id}
                        title={title}
                        price={price}
                        image={images[0]}
                        slug={slug}
                    />
                )
            })}
        </div>
    )
}
