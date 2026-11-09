"use client";
import { useUpdateSearchParams } from "@/hooks/useUpdateSearchParams";
import { IFilter } from "@/types/Filter";
import { formatPrice } from "@/utils/formatPrice";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

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
    <Card className="md:w-80 w-11/12 mx-auto md:sticky md:top-3 space-y-4">
      <CardHeader>
        <CardTitle className="font-bold text-lg">فیلتر ها</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="maxPrice" className="my-3 font-semibold">
                قیمت
              </Label>
              <p className="text-sm font-medium text-gray-600">
                {formatPrice(filter.maxPrice)} تومان
              </p>
            </div>
            <Slider
              dir="ltr"
              name="maxPrice"
              id="maxPrice"
              step={100_000}
              max={500_000_000}
              value={filter.maxPrice}
              onValueChange={(value) =>
                setFilter((prev) => ({ ...prev, maxPrice: Number(value) }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand" className="my-3 font-semibold">
              برند
            </Label>
            <Select
              name="brand"
              id="brand"
              defaultValue={""}
              // onChange={filterChangeHandler}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="برند ها" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="samsung">سامسونگ</SelectItem>
                <SelectItem value="xiaomi">شیائومی</SelectItem>
                <SelectItem value="poco">پوکو</SelectItem>
                <SelectItem value="apple">اپل</SelectItem>
                <SelectItem value="nothing">ناتینگ</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="pt-4">
            <Button
              className="w-full"
              onClick={() =>
                setParams({
                  price: filter.maxPrice,
                  brand: filter.brand,
                })
              }
            >
              فیلتر
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
