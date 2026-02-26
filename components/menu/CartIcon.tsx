"use client"
import { CartContext } from "@/contexts/CartContext"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useContext } from "react"

export default function CartIcon() {
    const { quantity } = useContext(CartContext)

    return (
        <Link
            href={"/cart"}
            className="w-max text-gray-700 transition p-2 rounded-xl relative"
        >
            {quantity > 0 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 p-0.5 rounded-full text-sm font-bold bg-red-500 flex items-center justify-center">
                    {quantity < 9 ? quantity : "9+"}
                </div>
            )}
            <ShoppingCart />
        </Link>
    )
}
