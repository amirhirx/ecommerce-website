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
        <div className="flex justify-center items-center gap-4 py-4">
            {currentPages > 1 && (
                <Link
                    href={`?page=${currentPages - 1}`}
                    className="bg-white w-10 h-10 rounded-lg flex justify-center items-center"
                >
                    <BsArrowRight />
                </Link>
            )}
            <Link
                href={`?page=${currentPages}`}
                className="bg-white w-10 h-10 rounded-lg flex justify-center items-center"
            >
                {currentPages}
            </Link>
            {currentPages < totalPages && (
                <Link
                    href={`?page=${currentPages + 1}`}
                    className="bg-white w-10 h-10 rounded-lg flex justify-center items-center"
                >
                    <BsArrowLeft />
                </Link>
            )}
        </div>
    )
}
