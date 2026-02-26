import Link from "next/link"
import { LogIn } from "lucide-react"

export default function Account() {
    return (
        <Link
            href={"/login"}
            className="p-2 flex items-center gap-2 text-sm font-medium text-gray-700 md:border border-gray-300 rounded-lg"
        >
            <LogIn className="rotate-180" />
            <span className="md:block hidden">ورود | ثبت نام</span>
        </Link>
    )
}
