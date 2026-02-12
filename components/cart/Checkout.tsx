import { CartContext } from "@/contexts/CartContext"
import { IProductInCart } from "@/types/ProductInCart"
import { formatPrice } from "@/utils/formatPrice"
import { useContext, useEffect, useState } from "react"

export function Checkout({ products }: { products: IProductInCart[] }) {
    const { cart } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        const setTotalPriceToZero = () => setTotalPrice(0)
        setTotalPriceToZero()
        products.map(({ product, qty }) => {
            setTotalPrice((prev) => prev + product.price * qty)
        })
    }, [cart, products])

    return (
        <div className="md:w-3/12 w-full h-max bg-white p-4 rounded-lg">
            <h2 className="text-xl font-extrabold">مجموع</h2>
            <ul className="space-y-2 py-4 font-medium">
                <li>قیمت کل: {formatPrice(totalPrice)}</li>
                <li>تخفیف: {formatPrice(0)}</li>
                <li>قیمت نهایی: {formatPrice(0)}</li>
            </ul>
            <button className="w-full bg-green-400 text-white font-bold py-1.5 rounded-lg cursor-pointer">
                پرداخت
            </button>
        </div>
    )
}
