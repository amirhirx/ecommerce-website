import { INavigation } from "@/types/navigation"
import Link from "next/link"
import { HiBars3 } from "react-icons/hi2"

export default function MenuNavigation({ items }: { items: INavigation[] }) {
    return (
        <>
            <div className="md:hidden -order-1">
                {/* Mobile Menu */}
                <HiBars3 size={22} />
                {/* TODO: Menu items drawer */}
            </div>
            <div className="hidden md:block">
                {/* Desktop Menu */}
                <ul className="flex items-center gap-8">
                    {items.map(({ text, href, icon: Icon }, index) => {
                        return (
                            <li
                                key={`nav-${index}`}
                                className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition font-semibold"
                            >
                                <Icon />
                                <Link href={href}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
