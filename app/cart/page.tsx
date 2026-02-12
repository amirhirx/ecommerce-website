"use client"
import { Checkout } from "@/components/cart/Checkout"
import { ProductCartCard } from "@/components/cart/ProductCartCard"
import { CartContext } from "@/contexts/CartContext"
import { getProductById } from "@/services/getProductById"
import { IProductInCart } from "@/types/ProductInCart"
import { useContext, useEffect, useState } from "react"

export default function Cart() {
    const { cart } = useContext(CartContext)
    const [productsInCart, setProductsInCart] = useState<IProductInCart[]>(
        [] as IProductInCart[],
    )

    useEffect(() => {
        let mounted = true
        async function load() {
            const results = await Promise.all(
                cart.map(async ({ id, qty }) => {
                    const product = await getProductById(id)
                    return { product, qty } as IProductInCart
                }),
            )
            if (mounted) setProductsInCart(results)
        }
        load()
        return () => {
            mounted = false
        }
    }, [cart])

    return (
        <>
            {productsInCart.length > 0 ? (
                <div className="w-10/12 mx-auto py-2 md:gap-4 md:flex space-y-4">
                    <div className="md:w-9/12 w-full space-y-2">
                        {productsInCart.map(({ product, qty }, index) => {
                            return (
                                <ProductCartCard
                                    key={`pcc-${index}`}
                                    title={product.title}
                                    qty={qty}
                                    thumbnail={product.images[0]}
                                    discount={product.discount}
                                    price={product.price}
                                />
                            )
                        })}
                    </div>
                    <Checkout products={productsInCart} />
                </div>
            ) : (
                <div className="w-full h-[50vh] flex items-center justify-center">
                    <div>
                        <h2 className="text-xl font-bold">
                            سبد خرید شما خالی است!
                        </h2>
                    </div>
                </div>
            )}
        </>
    )
}
