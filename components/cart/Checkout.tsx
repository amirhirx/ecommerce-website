export function Checkout() {
    return (
        <div className="md:w-3/12 w-full h-max bg-white p-4 rounded-lg">
            <h2 className="text-xl font-extrabold">مجموع</h2>
            <ul className="space-y-2 py-4 font-medium">
                <li>قیمت کل:</li>
                <li>تخفیف:</li>
                <li>قیمت نهایی:</li>
            </ul>
            <button className="w-full bg-green-400 text-white font-bold py-1.5 rounded-lg cursor-pointer">
                پرداخت
            </button>
        </div>
    )
}
