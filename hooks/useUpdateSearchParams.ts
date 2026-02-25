"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setParams = (
    params: Record<string, string | number | null | undefined>,
  ) => {
    const current = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(([key, value]) => {
      if (value == null || value == "") {
        current.delete(key);
      } else {
        current.set(key, String(value));
      }
    });
    const query = current.toString();
    router.replace(query ? `${pathname}?${current.toString()}` : pathname);
  };
  return setParams;
}
