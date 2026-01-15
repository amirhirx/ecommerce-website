/* eslint-disable @next/next/no-img-element */
import { IProductCard } from "@/types/ProductCard"
import Link from "next/link"

export default function ProductCard({
    title,
    price,
    image,
    slug,
    discount,
}: IProductCard) {
    const priceAfterDiscount = price - Math.ceil((price * discount) / 100)
    return (
        <Link href={`/products/${slug}`}>
            <div className="md:w-60 w-full p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4 relative">
                <img
                    className="w-full md:h-52 h-72 rounded-lg shadow object-cover"
                    alt="Thumbnail"
                    src={image}
                />
                <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
                <div className="flex items-center justify-between">
                    <div className="font-semibold">
                        {discount ? priceAfterDiscount : price} تومان{" "}
                    </div>
                    {discount ? (
                        <>
                            <div className="text-xs text-red-500 font-medium">
                                {price} تومان
                            </div>
                            <div className="absolute top-3 left-3 w-8 h-8 bg-red-500 text-white font-medium text-sm rounded-xl flex items-center justify-center">
                                {discount}%
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </Link>
    )
}
