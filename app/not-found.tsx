import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-4 grid grid-rows-3 gap-4 max-w-2/3">
                <h1 className="text-2xl font-black text-green-600">
                    صفحه‌ای که دنبال آن بودید، پیدا نشد
                </h1>
                <p>ممکن است آدرس اشتباه باشد و یا صفحه پاک شده باشد</p>
                <Link className="font-bold" href={"/"}>
                    رفتن به صفحه اصلی
                </Link>
            </div>
        </div>
    )
}
