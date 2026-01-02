import ProductGallery from "@/components/ProductGallery"
import ProductPrice from "@/components/ProductPrice"
import { getProductBySlug } from "@/services/getProductBySlug"
import { IProduct } from "@/types/Product"

export default async function Product({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const { id, title, images, features, price, shortDescription }: IProduct =
        await getProductBySlug(slug)

    return (
        <div className="md:flex md:gap-4 mt-1 p-4 bg-white">
            <div className="md:w-4/12">
                <ProductGallery images={images} alt={shortDescription} />
            </div>
            <div className="md:w-8/12 md:flex md:gap-4 md:justify-between">
                <div className="md:3/6 mt-4">
                    <h1 className="text-2xl font-black">{title}</h1>
                    <p className="font-medium">{shortDescription}</p>
                    <div className="md:w-80 p-4 flex">
                        <ProductPrice id={id} price={price} />
                    </div>
                    <h2 className="text-xl font-bold">ویژگی ها</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4 p-4">
                        {features.map(({ text, value }, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-gray-100 rounded-md border border-gray-300 p-4"
                                >
                                    <h3 className="font-bold text-md">
                                        {text}
                                    </h3>
                                    <p className="text-sm">{value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
