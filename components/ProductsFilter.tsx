export default function ProductsFilter() {
    return (
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
    )
}
