"use client";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatPrice";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DeliveryBox01Icon,
  DollarSignIcon,
  Payment02Icon,
  ShoppingBag03Icon,
} from "@hugeicons/core-free-icons";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

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
    <Card className="w-full px-4 space-y-4 md:sticky md:top-3">
      <h3 className="font-bold text-xl md:text-lg select-none">خرید محصول</h3>
      <ul className="md:text-sm text-gray-600 space-y-4 select-none">
        <li className="flex gap-2 items-center">
          <HugeiconsIcon icon={DeliveryBox01Icon} />
          ارسال توسط فروشگاه
        </li>
        <li className="flex gap-2 items-center">
          <HugeiconsIcon icon={ShoppingBag03Icon} />
          گارانتی اصالت و سلامت کالا
        </li>
        <li className="flex gap-2 items-center">
          <HugeiconsIcon icon={DollarSignIcon} />
          قیمت منصفانه و رقابتی
        </li>
        <li className="flex gap-2 items-center">
          <HugeiconsIcon icon={Payment02Icon} />
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
      <Button onClick={clickHandler} disabled={!inStock}>
        {inStock ? " افزودن به سبد خرید" : "موجود نیست"}
      </Button>
    </Card>
  );
}
