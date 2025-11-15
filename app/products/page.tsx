import ProductCard from "@/components/ProductCard"

export default async function Products() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-black my-2">محصولات</h1>
            <div className="flex flex-col-reverse md:flex-row gap-4">
                <div className="md:w-2/12 w-full">
                    <div className="bg-white p-4 rounded-md shadow-lg sticky top-3">
                        <h2 className="font-bold text-lg">فیلتر ها</h2>
                        <div>
                            <h3>برند</h3>
                            <select name="" id="">
                                <option value="samsung">Samsung</option>
                                <option value="xiaomi">Xiaomi</option>
                                <option value="poco">Poco</option>
                                <option value="apple">Apple</option>
                                <option value="nothing">Nothing</option>
                            </select>
                        </div>
                        <div>
                            <h3>قیمت</h3>
                        </div>
                        <div>
                            <h3>فقط کالا های موجود</h3>
                        </div>
                    </div>
                </div>
                <div className="md:w-10/12 w-full">
                    <div className="md:flex md:flex-wrap md:gap-4 gap-2 grid grid-cols-2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
