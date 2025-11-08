import Image from "next/image"

export default function Menu() {
    return (
        <div className="bg-white w-full py-2 px-4 flex items-center justify-between">
            <div className="flex items-center gap-4 w-6/12">
                <Image src={"/logo.svg"} alt="Logo" width={56} height={56} />
                <span className="font-black text-xl">فروشگاه</span>
                <div className="bg-gray-100 p-2 rounded w-full">
                    <input
                        type="text"
                        placeholder="جستجو"
                        className="outline-none"
                    />
                </div>
            </div>
        </div>
    )
}
