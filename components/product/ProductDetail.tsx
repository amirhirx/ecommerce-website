import { HugeiconsIcon } from "@hugeicons/react";
import { Card, CardContent } from "../ui/card";
import ProductGallery from "./ProductGallery";
import { InfoIcon } from "@hugeicons/core-free-icons";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "../ui/item";

export default function ProductDetail({
  title,
  shortDescription,
  images,
  features,
}: {
  title: string;
  shortDescription: string;
  images: string[];
  features: {
    text: string;
    value: string;
  }[];
}) {
  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row gap-4">
        <ProductGallery images={images} alt={title} />
        <div className="space-y-4">
          <h1 className="font-black text-2xl">{title}</h1>
          <p className="text-gray-600">{shortDescription}</p>
          <div>
            <h3 className="flex items-center gap-2 font-bold text-lg mb-2">
              ویژگی ها
            </h3>
            <ItemGroup className="md:w-[50vw]">
              {features.map(({ text, value }, index) => {
                return (
                  <Item key={`feature-${index}`} variant="muted">
                    <ItemContent className="md:flex md:flex-row md:gap-8 md:justify-between md:items-center">
                      <ItemTitle>{text}</ItemTitle>
                      <ItemDescription>{value}</ItemDescription>
                    </ItemContent>
                  </Item>
                );
              })}
            </ItemGroup>
          </div>
          <p className="flex items-center gap-2 text-xs text-gray-600">
            <HugeiconsIcon icon={InfoIcon} />
            امکان برگشت کالا تنها در صورتی مورد قبول است که پلمب کالا باز نشده
            باشد.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
