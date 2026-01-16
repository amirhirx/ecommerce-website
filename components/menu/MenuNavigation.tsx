"use client"
import { INavigation } from "@/types/navigation"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiBars3 } from "react-icons/hi2"
import MenuDrawer from "./MenuDrawer"
import { useState } from "react"

export default function MenuNavigation({ items }: { items: INavigation[] }) {
    const path = usePathname()
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false)
    return (
        <>
            <div className="md:hidden -order-1">
                {/* Mobile Menu */}
                <HiBars3 size={22} onClick={() => setIsMenuShown(true)} />
                <MenuDrawer
                    items={items}
                    isShown={isMenuShown}
                    closeHandler={() => setIsMenuShown(false)}
                />
            </div>
            <div className="hidden md:block">
                {/* Desktop Menu */}
                <ul className="flex items-center gap-8">
                    {items.map(({ text, href, icon }, index) => {
                        return (
                            <li
                                key={`nav-${index}`}
                                className={`flex items-center gap-2 hover:text-green-600 transition font-semibold ${
                                    path === href
                                        ? "text-green-600"
                                        : "text-gray-600"
                                }`}
                            >
                                {icon}
                                <Link href={href}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
