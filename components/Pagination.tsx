"use client";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Pagination({
  count,
  productPerPage,
}: {
  count: number;
  productPerPage: number;
}) {
  const searchParams = useSearchParams();
  const setParams = useUpdateSearchParams();
  const currentPages = Number(searchParams.get("page") || 1);
  const totalPages = Math.ceil(count / productPerPage);

  return (
    <div className="flex justify-center items-center gap-4 py-4">
      {currentPages > 1 && (
        <button
          onClick={() => setParams({ page: currentPages - 1 })}
          className="bg-white w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer"
        >
          <BsArrowRight />
        </button>
      )}
      <div className="bg-white w-10 h-10 rounded-lg flex justify-center items-center">
        {currentPages}
      </div>
      {currentPages < totalPages && (
        <button
          onClick={() => setParams({ page: currentPages + 1 })}
          className="bg-white w-10 h-10 rounded-lg flex justify-center items-center cursor-pointer"
        >
          <BsArrowLeft />
        </button>
      )}
    </div>
  );
}
