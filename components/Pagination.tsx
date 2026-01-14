"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

export default function Pagination({
    count,
    productPerPage,
}: {
    count: number
    productPerPage: number
}) {
    const searchParams = useSearchParams()
    const currentPages = Number(searchParams.get("page") || 1)
    const totalPages = Math.ceil(count / productPerPage)

    return (
        <ul className="flex justify-center items-center gap-4 py-4">
            {currentPages > 1 && (
                <li className="bg-white w-10 h-10 rounded-lg flex justify-center items-center">
                    <Link href={`?page=${currentPages - 1}`}>
                        <BsArrowRight />
                    </Link>
                </li>
            )}
            <li className="bg-white w-10 h-10 rounded-lg flex justify-center items-center">
                <Link href={`?page=${currentPages}`}>{currentPages}</Link>
            </li>
            {currentPages < totalPages && (
                <li className="bg-white w-10 h-10 rounded-lg flex justify-center items-center">
                    <Link href={`?page=${currentPages + 1}`}>
                        <BsArrowLeft />
                    </Link>
                </li>
            )}
        </ul>
    )
}
