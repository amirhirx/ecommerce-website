import { FaBoxesPacking } from "react-icons/fa6"
import { IoBagCheckSharp } from "react-icons/io5"
import { IoMdPricetags } from "react-icons/io"
import { MdPayments } from "react-icons/md"

export default function ProductPrice({
    price,
    discount,
}: {
    id: number
    price: number
    discount: number
}) {
    const isPriceOff = discount ? true : false
    const discountedPrice = price - (price * discount) / 100

    return (
        <div className="w-full bg-white rounded-xl py-2 px-4 space-y-4">
            <h3 className="font-bold text-lg">خرید محصول</h3>
            <ul className="text-sm text-gray-600 space-y-4">
                <li className="flex gap-2">
                    <FaBoxesPacking size={18} />
                    ارسال توسط فروشگاه
                </li>
                <li className="flex gap-2">
                    <IoBagCheckSharp size={18} />
                    گارانتی اصالت و سلامت کالا
                </li>
                <li className="flex gap-2">
                    <IoMdPricetags size={18} />
                    قیمت منصفانه و رقابتی
                </li>
                <li className="flex gap-2">
                    <MdPayments size={18} />
                    پرداخت آنلاین، سریع و ایمن
                </li>
            </ul>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    {isPriceOff && (
                        <strong className="text-xl line-through decoration-1 text-red-500">
                            {price}
                        </strong>
                    )}
                    <strong className={`text-xl`}>
                        {isPriceOff ? discountedPrice : price} تومان
                    </strong>
                </div>
                <div>
                    <span className="bg-red-500 text-white rounded-xl py-1.5 px-2">
                        {discount}%
                    </span>
                </div>
            </div>
            <button className="w-full py-2 bg-green-400 text-white font-extrabold rounded-xl cursor-pointer">
                افزودن به سبد خرید
            </button>
        </div>
    )
}
