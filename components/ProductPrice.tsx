"use client"

import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

export default function ProductPrice({
    id,
    price,
}: {
    id: number
    price: number
}) {
    const { addItem } = useContext(CartContext)
    return (
        <div className="w-full h-max bg-gray-100 border border-gray-300 rounded-md p-4 flex flex-col gap-4">
            <h2 className="font-bold">
                <span className="text-md">قیمت:</span>
                <span className="float-left">{price} تومان</span>
            </h2>
            <button
                onClick={() => {
                    addItem(id)
                }}
                className="bg-red-500 text-white font-extrabold rounded-md py-2 px-4 cursor-pointer"
            >
                افزودن به سبد خرید
            </button>
        </div>
    )
}
