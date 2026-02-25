/* eslint-disable @next/next/no-img-element */
import { IProductCard } from "@/types/ProductCard";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";

export default function ProductCard({
  title,
  price,
  image,
  slug,
  discount,
  inStock,
}: IProductCard) {
  const priceAfterDiscount = price - Math.ceil((price * discount) / 100);
  return (
    <Link href={`/products/${slug}`}>
      <div className="md:w-60 w-full p-4 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col gap-4 relative">
        <img
          className="w-full md:h-52 h-72 rounded-lg shadow object-cover"
          alt="Thumbnail"
          src={image}
        />
        <h3 className="md:text-sm font-medium line-clamp-1">{title}</h3>
        <div className="flex items-center justify-between">
          {inStock ? (
            <>
              <div className="text-lg md:text-sm font-semibold">
                {discount
                  ? formatPrice(priceAfterDiscount)
                  : formatPrice(price)}
                تومان{" "}
              </div>
              {discount ? (
                <>
                  <div className="md:text-xs text-red-500 font-medium">
                    {formatPrice(price)} تومان
                  </div>
                  <div className="absolute top-3 left-3 w-8 h-8 bg-red-500 text-white font-medium text-sm rounded-xl flex items-center justify-center">
                    {discount}%
                  </div>
                </>
              ) : null}
            </>
          ) : (
            <p className="font-medium">موجود نیست!</p>
          )}
        </div>
      </div>
    </Link>
  );
}
