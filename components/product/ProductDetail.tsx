import ProductGallery from "./ProductGallery";
import { GoInfo } from "react-icons/go";

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
    <div className="flex flex-col md:flex-row gap-4 py-8 px-4 bg-white rounded-xl">
      <div>
        <ProductGallery images={images} alt={`The image of ${title}`} />
      </div>
      <div>
        <div className="space-y-4">
          <h1 className="font-black text-2xl">{title}</h1>
          <p className="text-gray-600">{shortDescription}</p>
          <div>
            <h3 className="flex items-center gap-2 font-bold text-lg mb-2">
              ویژگی ها
            </h3>
            <ul className="space-y-2.5">
              {features.map(({ text, value }, index) => {
                return (
                  <li
                    key={`feature-${index}`}
                    className="text-gray-600 text-sm"
                  >
                    <b className="text-black font-semibold">{text}:</b> {value}
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="flex items-center gap-2 text-xs text-gray-600">
            <GoInfo size={18} />
            امکان برگشت کالا تنها در صورتی مورد قبول است که پلمب کالا باز نشده
            باشد.
          </p>
        </div>
      </div>
    </div>
  );
}
