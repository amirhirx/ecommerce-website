import Link from "next/link"
import CartIcon from "./CartIcon"
import Account from "./Account"
import SearchBar from "./SearchBar"
import Drawer from "./Drawer"
import { CircleQuestionMark } from "lucide-react"

export default function Menu() {
    return (
        <header className="w-full flex md:py-2 md:px-4 flex-col gap-2 md:flex-row items-center justify-between bg-white">
            <div className="w-full md:w-auto pt-3 pb-1.5 px-4 md:p-0 flex item-center gap-2 justify-between">
                <Drawer />
                <Link href={"/"} className="text-2xl font-black text-red-500">
                    فروشگاه آنلاین
                </Link>
                <CircleQuestionMark className="md:hidden" />
                <div className="w-full md:w-120 hidden md:block">
                    <SearchBar />
                </div>
            </div>
            <div className="w-full px-3 pb-2 md:p-0 md:w-auto flex items-center gap-2 md:gap-4">
                <div className="w-full md:w-120 md:hidden">
                    <SearchBar />
                </div>
                <Account />
                <CartIcon />
            </div>
        </header>
    )
}
