import Image from "next/image"
import Link from "next/link"
import { PiShoppingCartSimple } from "react-icons/pi"
import { TbLogin } from "react-icons/tb"
import { GoBell } from "react-icons/go"
import { GoHomeFill } from "react-icons/go"
import { BiSolidCategory } from "react-icons/bi"
import { IoMdMore } from "react-icons/io"
import MenuSearch from "./MenuSearch"

export default function Menu() {
    return (
        <>
            <div className="bg-white shadow-md md:block hidden">
                <div className=" py-2 px-4 flex items-center justify-between">
                    <div className="flex items-center gap-4 w-6/12">
                        <Image
                            src={"/logo.svg"}
                            alt="Logo"
                            width={56}
                            height={56}
                        />
                        <span className="font-black text-xl">فروشگاه</span>
                        <MenuSearch />
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
            </div>
            <div className="md:hidden">
                <div className="w-full bg-white flex justify-between items-center p-4 gap-4 border-b border-gray-300 fixed top-0 z-10">
                    <Image
                        src={"/logo.svg"}
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <MenuSearch />
                    <IoMdMore className="w-10 h-10 text-gray-600" />
                </div>
                <div className="w-full flex gap-4 fixed bottom-0 bg-white p-4 items-center justify-around text-gray-600 border-t border-gray-300 z-10">
                    <Link href={"/"}>
                        <div className="flex flex-col items-center gap-2">
                            <GoHomeFill className="w-6 h-6" />
                            <span className="text-xs">صفحه اصلی</span>
                        </div>
                    </Link>
                    <Link href={"/categories"}>
                        <div className="flex flex-col items-center gap-2">
                            <BiSolidCategory className="w-6 h-6" />
                            <span className="text-xs">دسته بندی ها</span>
                        </div>
                    </Link>
                    <Link href={"/cart"}>
                        <div className="flex flex-col items-center gap-2">
                            <PiShoppingCartSimple className="w-6 h-6" />
                            <span className="text-xs">سبد خرید</span>
                        </div>
                    </Link>
                    <Link href={"/login"}>
                        <div className="flex flex-col items-center gap-2">
                            <TbLogin className="w-6 h-6" />
                            <span className="text-xs">ورود</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
