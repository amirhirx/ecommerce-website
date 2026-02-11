"use client"
import { createContext, useEffect, useState } from "react"

const CartContext = createContext<ICartContextProvider>(
    {} as ICartContextProvider,
)

export interface ICartProduct {
    id: number
    qty: number
}

export interface ICartContextProvider {
    cart: ICartProduct[]
    addItem: (id: number) => void
    quantity: number
}

function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<ICartProduct[]>([] as ICartProduct[])

    const [quantity, setQuantity] = useState<number>(0)
    useEffect(() => {
        const setQuantityToZero = () => setQuantity(0)
        setQuantityToZero()
        cart.map(({ qty }) => {
            setQuantity((prev) => prev + qty)
        })
    }, [cart])

    const addItem = (id: number) => {
        const itemInCart = cart.find((item) => item.id == id)
        if (itemInCart) {
            setCart((prevCart) => {
                return prevCart.map((item) => {
                    if (item.id == itemInCart.id) {
                        return { ...item, qty: item.qty++ }
                    } else {
                        return item
                    }
                })
            })
        } else {
            setCart((prev) => [...prev, { id: id, qty: 1 }])
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, quantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider }
