"use client";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { IFilter } from "@/types/Filter";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";

export default function ProductsFilter() {
  const setParams = useUpdateSearchParams();
  const [filter, setFilter] = useState({
    brand: "",
    maxPrice: 1_000_000_000,
  } as IFilter);

  const filterChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => {
      return { ...prevFilter, [name]: value };
    });
  };

  return (
    <div className="md:w-80 w-11/12 mx-auto bg-white p-4 rounded-lg shadow-lg border border-gray-200 md:sticky md:top-3 space-y-4">
      <h2 className="font-bold text-lg">فیلتر ها</h2>
      <form>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="maxPrice" className="font-bold text-md">
              قیمت
            </label>
            <p className="text-sm font-medium text-gray-600">
              {formatPrice(filter.maxPrice)} تومان
            </p>
          </div>
          <input
            type="range"
            name="maxPrice"
            id="maxPrice"
            className="w-full accent-green-400"
            min={0}
            max={1_000_000_000}
            step={1_000_000}
            value={filter.maxPrice}
            onChange={filterChangeHandler}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="brand" className="font-bold text-md">
            برند
          </label>
          <select
            name="brand"
            id="brand"
            className="w-full py-2 px-4 bg-gray-300/60 rounded-lg outline-none appearance-none"
            defaultValue={""}
            onChange={filterChangeHandler}
          >
            <option value={""}>برند ها...</option>
            <option value="samsung">سامسونگ</option>
            <option value="xiaomi">شیائومی</option>
            <option value="poco">پوکو</option>
            <option value="apple">اپل</option>
            <option value="nothing">ناتینگ</option>
          </select>
        </div>
        <div className="pt-4">
          <button
            className="w-full rounded-md py-2 bg-green-400 text-white font-bold cursor-pointer"
            onClick={() =>
              setParams({
                price: filter.maxPrice,
                brand: filter.brand,
              })
            }
          >
            فیلتر
          </button>
        </div>
      </form>
    </div>
  );
}
