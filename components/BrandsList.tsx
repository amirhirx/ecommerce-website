import { getAllProducts } from "@/services/getAllProducts"
import Image from "next/image"

export default async function BrandsList() {
    // TODO: Create an get brands list seprately
    const { brands }: { brands: { name: string; image: string }[] } =
        await getAllProducts()
    return (
        <div className="overflow-scroll">
            <div className="md:w-full w-max flex items-center justify-center gap-4">
                {brands.map(({ name, image }, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2"
                        >
                            <Image
                                src={image}
                                alt={name}
                                width={72}
                                height={72}
                                className="rounded-lg"
                            />
                            <p className="font-medium text-center text-xs line-clamp-1">
                                {name}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
