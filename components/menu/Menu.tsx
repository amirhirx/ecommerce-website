import Link from "next/link"

import { FiHome } from "react-icons/fi"
import { BsShop } from "react-icons/bs"
import { MdOutlineArticle } from "react-icons/md"
import { IoInformationCircleOutline } from "react-icons/io5"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { LuShoppingBasket } from "react-icons/lu"
import { FiUser } from "react-icons/fi"
import { SlFire } from "react-icons/sl"
import { FaHashtag } from "react-icons/fa6"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import MenuNavigation from "./MenuNavigation"
import { INavigation } from "@/types/navigation"

const navigations: INavigation[] = [
    { text: "صفحه اصلی", href: "/", icon: FiHome() },
    { text: "فروشگاه", href: "/products", icon: BsShop() },
    { text: "وبلاگ", href: "/blog", icon: MdOutlineArticle() },
    { text: "درباره ما", href: "/about", icon: IoInformationCircleOutline() },
    { text: "تماس با ما", href: "/contact", icon: TfiHeadphoneAlt() },
]

const topTags: string[] = ["لپ_تاپ_گیمینگ", "دانشجویی", "مدیریت_شرکت"]

export default function Menu() {
    return (
        <header className="w-full md:w-98/100 md:my-4 md:mx-auto bg-green-400 md:rounded-xl md:overflow-hidden shadow">
            <div className="flex items-center justify-between bg-white p-4 md:p-6 md:rounded-br-3xl">
                <div>
                    <Link href={"/"}>
                        <h1 className="text-lg font-black">وبسایت فروشگاهی</h1>
                    </Link>
                </div>
                <MenuNavigation items={navigations} />
                <div className="flex items-center gap-4">
                    <Link href={"#"}>
                        <FiUser size={22} />
                    </Link>
                    <Link
                        href={"/cart"}
                        className="text-white bg-green-400 hover:bg-green-500 transition p-2 rounded-xl"
                    >
                        <LuShoppingBasket size={22} />
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex items-center justify-between py-2 px-6">
                <div>
                    <ul className="flex item-center gap-4">
                        <h2 className="font-bold flex items-center gap-2">
                            <SlFire />
                            محبوبترین ها
                        </h2>
                        {topTags.map((tag, index) => {
                            return (
                                <li key={`tag-${index}`}>
                                    <Link
                                        href={"#"}
                                        className="flex items-center gap-1 font-medium"
                                    >
                                        <FaHashtag />
                                        {tag}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <form className="flex item-center gap-2">
                        <input
                            type="text"
                            placeholder="جستجوی محصولات..."
                            className="bg-white rounded-lg outline-none p-1 text-sm"
                        />
                        <button className="bg-green-600 rounded-lg p-1 px-1.5">
                            <HiOutlineMagnifyingGlass className="text-white" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}
