import Image from "next/image"
import { IoSearchOutline } from "react-icons/io5"

export default function Menu() {
    return (
        <div className="bg-white w-full py-2 px-4 flex items-center justify-between">
            <div className="flex items-center gap-4 w-6/12">
                <Image src={"/logo.svg"} alt="Logo" width={56} height={56} />
                <span className="font-black text-xl">فروشگاه</span>
                <div className="bg-gray-100 p-2 rounded w-full flex items-center gap-2 text-gray-600">
                    <IoSearchOutline className="text-2xl" />
                    <input
                        type="text"
                        placeholder="جستجو"
                        className="outline-none w-full"
                    />
                </div>
            </div>
        </div>
    )
}
