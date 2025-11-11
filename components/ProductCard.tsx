/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default function ProductCard() {
    const title =
        "گوشی موبایل سامسونگ مدل Galaxy A16 4G ظرفیت 128 گیگابایت رم 4 گیگابایت - ویتنام"
    const price = 12960000
    const image =
        "https://www.technolife.com/image/small_product-TLP-69646_ca7a1c03-d5a4-4d76-aab9-d64da1219b5d.png"

    return (
        <Link href={"/"}>
            <div className="w-64 p-4 bg-white rounded-lg shadow-lg flex flex-col gap-4">
                <img
                    className="w-full rounded-lg shadow"
                    alt="Thumbnail"
                    src={image}
                />
                <h3 className="text-md font-medium line-clamp-2">{title}</h3>
                <p className="text-left font-bold">
                    <span className="text-lg">{price}</span>
                    <span className="mr-1">تومان</span>
                </p>
            </div>
        </Link>
    )
}
