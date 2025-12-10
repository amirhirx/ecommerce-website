export default function ProductsFilter() {
    return (
        <div className="bg-white p-4 rounded-md shadow-lg sticky top-5 space-y-4">
            <h2 className="font-bold text-lg">فیلتر ها</h2>
            <form>
                <div className="space-y-2">
                    <label
                        htmlFor="products-price"
                        className="font-bold text-md"
                    >
                        قیمت
                    </label>
                    <input
                        type="range"
                        name="products-price"
                        id="products-price"
                        className="w-full accent-green-400"
                        min={0}
                        max={100000000}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="brand" className="font-bold text-md">
                        برند
                    </label>
                    <select
                        name="brand"
                        id="brand"
                        className="w-full py-2 px-4 bg-gray-300/60 rounded-lg outline-none"
                    >
                        <option value="samsung">سامسونگ</option>
                        <option value="xiaomi">شیائومی</option>
                        <option value="poco">پوکو</option>
                        <option value="apple">اپل</option>
                        <option value="nothing">ناتینگ</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
