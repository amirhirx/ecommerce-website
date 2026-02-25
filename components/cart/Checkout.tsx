import { IProductInCart } from "@/types/ProductInCart"
import { formatPrice } from "@/utils/formatPrice"
import { useState, useEffect } from "react"

export function Checkout({ products }: { products: IProductInCart[] }) {
    const [prices, setPrices] = useState<{
        total: number
        discounted: number
    }>({ total: 0, discounted: 0 })

    useEffect(() => {
        let total = 0
        let discounted = 0

        products.forEach(({ product, qty }) => {
            const { price, discount } = product
            total += price * qty
            discounted += ((price * discount) / 100) * qty
        })

        const updatePrices = () => setPrices({ discounted, total })
        updatePrices()
    }, [products])

    return (
        <div className="md:w-3/12 w-full h-max bg-white p-4 rounded-lg">
            <h2 className="text-xl font-extrabold">مجموع</h2>
            <ul className="space-y-2 py-4 font-medium">
                <li className="flex items-center gap-2">
                    <span className="font-bold">قیمت کل:</span>
                    <span>{formatPrice(prices.total)}</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="font-bold">تخفیف:</span>
                    <span>{formatPrice(prices.discounted)}</span>
                </li>
                <li className="flex items-center gap-2">
                    <span className="font-bold">قیمت نهایی:</span>
                    <span>{formatPrice(prices.total - prices.discounted)}</span>
                </li>
            </ul>
            <button className="w-full bg-green-400 text-white font-bold py-1.5 rounded-lg cursor-pointer">
                پرداخت
            </button>
        </div>
    )
}
