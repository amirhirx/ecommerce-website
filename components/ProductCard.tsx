/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

interface IProductCard {
    title: string
    price: number
    image: string
    slug: string
}

export default function ProductCard({
    title,
    price,
    image,
    slug,
}: IProductCard) {
    return (
        <Link href={`/products/${slug}`}>
            <div className="md:w-60 w-40 p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4">
                <img
                    className="w-full rounded-lg shadow"
                    alt="Thumbnail"
                    src={image}
                />
                <h3 className="text-md font-medium line-clamp-2">{title}</h3>
                <p className="text-left font-bold">
                    <span className="text-lg">{price}</span>
                    <span className="mr-1">تومان</span>
                </p>
            </div>
        </Link>
    )
}
