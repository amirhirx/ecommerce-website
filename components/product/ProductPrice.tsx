"use client";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatPrice";

export default function ProductPrice({
  id,
  price,
  discount,
  inStock,
}: {
  id: number;
  price: number;
  discount: number;
  inStock: boolean;
}) {
  const isPriceOff = discount ? true : false;
  const discountedPrice = price - (price * discount) / 100;

  const { addItem } = useContext(CartContext);
  const clickHandler = () => {
    addItem(id);
  };

  return (
    <div className="w-full bg-white rounded-xl py-3 md:py-2 px-4 space-y-4 md:sticky md:top-3">
      <h3 className="font-bold text-xl md:text-lg">خرید محصول</h3>
      <ul className="md:text-sm text-gray-600 space-y-4">
        <li className="flex gap-2 items-center">
          <FaBoxesPacking className="text-xl md:text-sm" />
          ارسال توسط فروشگاه
        </li>
        <li className="flex gap-2 items-center">
          <IoBagCheckSharp className="text-xl md:text-sm" />
          گارانتی اصالت و سلامت کالا
        </li>
        <li className="flex gap-2 items-center">
          <IoMdPricetags className="text-xl md:text-sm" />
          قیمت منصفانه و رقابتی
        </li>
        <li className="flex gap-2 items-center">
          <MdPayments className="text-xl md:text-sm" />
          پرداخت آنلاین، سریع و ایمن
        </li>
      </ul>
      {inStock && (
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            {isPriceOff && (
              <strong className="text-xl line-through decoration-1 text-red-500">
                {formatPrice(price)}
              </strong>
            )}
            <strong className={`text-2xl md:text-lg`}>
              {isPriceOff ? formatPrice(discountedPrice) : formatPrice(price)}
              <span> تومان</span>
            </strong>
          </div>
          {discount ? (
            <div>
              <span className="bg-red-500 text-white rounded-xl py-1.5 px-2">
                {discount}%
              </span>
            </div>
          ) : null}
        </div>
      )}
      <button
        onClick={clickHandler}
        className="w-full py-3 md:py-2 bg-green-400 disabled:bg-gray-500 text-white font-extrabold rounded-xl cursor-pointer"
        disabled={!inStock}
      >
        {inStock ? " افزودن به سبد خرید" : "موجود نیست"}
      </button>
    </div>
  );
}
