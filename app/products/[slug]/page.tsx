import ProductDetail from "@/components/product/ProductDetail"
import ProductPrice from "@/components/product/ProductPrice"
import { getProductBySlug } from "@/services/getProductBySlug"
import { IProduct } from "@/types/Product"

export default async function Product({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const {
        id,
        price,
        discount,
        title,
        images,
        shortDescription,
        features,
    }: IProduct = await getProductBySlug(slug)

    return (
        <div className="w-[97.5%] mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-full">
                    <ProductDetail
                        title={title}
                        shortDescription={shortDescription}
                        images={images}
                        features={features}
                    />
                </div>
                <div className="md:w-84 w-full">
                    <ProductPrice id={id} price={price} discount={discount} />
                </div>
            </div>
        </div>
    )
}
