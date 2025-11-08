import Image from "next/image"
import Link from "next/link"
import { IoSearchOutline } from "react-icons/io5"

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
