import { IProductCard } from "@/types/ProductCard";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ProductCard({
  title,
  price,
  image,
  slug,
  discount,
  inStock,
}: IProductCard) {
  const priceAfterDiscount = price - Math.round((price * discount) / 100);
  return (
    <Link href={`/products/${slug}`}>
      <Card className="relative">
        <CardHeader className="p-0">
          <Image
            width={512}
            height={512}
            className="w-full md:h-52 h-72 rounded-lg object-cover"
            alt={title}
            src={image}
          />
        </CardHeader>
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
        <CardFooter>
          <CardDescription>
            {inStock ? (
              <>
                <span className="text-lg md:text-sm font-semibold">
                  {discount
                    ? formatPrice(priceAfterDiscount)
                    : formatPrice(price)}
                  تومان
                </span>
                {discount ? (
                  <>
                    <span className="md:text-xs text-red-500 font-medium">
                      {formatPrice(price)} تومان
                    </span>
                    <span className="absolute top-3 right-3 w-8 h-8 bg-red-500 text-white font-medium text-sm rounded-lg flex items-center justify-center">
                      {discount}%
                    </span>
                  </>
                ) : null}
              </>
            ) : (
              <span>موجود نیست!</span>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
}
