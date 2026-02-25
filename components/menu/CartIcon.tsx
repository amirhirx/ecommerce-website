"use client";
import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import { useContext } from "react";
import { LuShoppingBasket } from "react-icons/lu";

export default function CartIcon() {
  const { quantity } = useContext(CartContext);

  return (
    <Link
      href={"/cart"}
      className="w-max text-white bg-green-400 hover:bg-green-500 transition p-2 rounded-xl relative"
    >
      {quantity > 0 && (
        <div className="absolute -top-2 -right-2 w-6 h-6 p-0.5 rounded-full text-sm font-bold bg-red-500 flex items-center justify-center">
          {quantity < 9 ? quantity : "9+"}
        </div>
      )}

      <LuShoppingBasket size={22} />
    </Link>
  );
}
