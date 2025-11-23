"use client"
import { createContext, useState } from "react"

const CartContext = createContext<ICartContextProvider>(
    {} as ICartContextProvider
)

export interface ICartProduct {
    id: number
    qty: number
}

export interface ICartContextProvider {
    cart: ICartProduct[]
}

function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<ICartProduct[]>([] as ICartProduct[])

    return (
        <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }
