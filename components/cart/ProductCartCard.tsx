import { formatPrice } from "@/utils/formatPrice"
import Image from "next/image"

export function ProductCartCard({
    title,
    qty,
    thumbnail,
    price,
    discount,
}: {
    title: string
    qty: number
    thumbnail: string
    price: number
    discount: number
}) {
    const discountedPrice = Math.ceil((price * discount) / 100)
    const priceAfterDiscount = price - discountedPrice

    return (
        <div className="px-1 py-2 bg-white rounded-lg flex gap-2 items-center">
            <div className="w-2/12">
                <Image src={thumbnail} alt={title} width={150} height={150} />
            </div>
            <div className="w-8/12">
                <h3 className="font-bold">{title}</h3>
                <p>تعداد {qty}</p>
            </div>
            <div className="2/12 h-20 text-left pl-4 flex items-end">
                {discount > 0 ? (
                    <div>
                        <p className="w-max mr-auto p-1 rounded-lg text-sm font-semibold bg-red-600 text-white">
                            {discount}%
                        </p>
                        <p className="line-through text-sm">
                            {" "}
                            {formatPrice(price)}تومان{" "}
                        </p>
                        <p className="font-semibold">
                            {formatPrice(priceAfterDiscount)}تومان
                        </p>
                    </div>
                ) : (
                    <div>
                        <p className="font-semibold">
                            {formatPrice(price)}تومان
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
