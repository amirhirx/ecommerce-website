"use client";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
export default function ProductPagination({
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
    <Pagination>
      <PaginationContent>
        {currentPages > 1 && (
          <PaginationItem onClick={() => setParams({ page: currentPages - 1 })}>
            <PaginationLink>
              <HugeiconsIcon icon={ArrowRight} />
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink>{currentPages}</PaginationLink>
        </PaginationItem>
        {currentPages < totalPages && (
          <PaginationItem onClick={() => setParams({ page: currentPages + 1 })}>
            <PaginationLink>
              <HugeiconsIcon icon={ArrowLeft} />
            </PaginationLink>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
