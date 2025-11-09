import Image from "next/image"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5"
import { PiShoppingCartSimple } from "react-icons/pi"
import { TbLogin } from "react-icons/tb"
import { GoBell } from "react-icons/go"

export default function Menu() {
    return (
        <div className="bg-white">
            <div className=" py-2 px-4 flex items-center justify-between">
                <div className="flex items-center gap-4 w-6/12">
                    <Image
                        src={"/logo.svg"}
                        alt="Logo"
                        width={56}
                        height={56}
                    />
                    <span className="font-black text-xl">فروشگاه</span>
                    <div className="bg-gray-100 p-2 rounded w-full flex items-center gap-2 text-gray-600">
                        <IoSearchOutline className="text-2xl" />
                        <input
                            type="text"
                            placeholder="جستجو"
                            className="outline-none w-full"
                        />
                    </div>
                </div>
                <div className="flex gap-4 items-center ">
                    <GoBell className="text-2xl text-gray-600" />
                    <Link
                        href={"/"}
                        className="flex gap-2 items-center border border-gray-200  rounded-lg px-4 py-2"
                    >
                        <TbLogin className="text-2xl text-gray-700" />
                        <span className="text-gray-700 text-sm font-bold">
                            ورود | ثبت نام
                        </span>
                    </Link>
                    <PiShoppingCartSimple className="text-2xl text-gray-600" />
                </div>
            </div>
            <div className="p-2">
                <nav className="flex gap-2">
                    <span>دسته بندی کالاها</span>
                    <ul className="flex gap-4 text-gray-600">
                        <li>
                            <Link href={"/"}>لینک ۱</Link>
                        </li>
                        <li>
                            <Link href={"/"}>لینک ۲</Link>
                        </li>
                        <li>
                            <Link href={"/"}>لینک ۳</Link>
                        </li>
                        <li>
                            <Link href={"/"}>لینک ۴</Link>
                        </li>
                        <li>
                            <Link href={"/"}>لینک ۵</Link>
                        </li>
                        <li>
                            <Link href={"/"}>لینک ۶</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
