import { Search } from "lucide-react"
import React from "react"

export default function SearchBar() {
    return (
        <div className="w-full flex items-center gap-2 rounded-lg p-2.5 bg-gray-200 text-gray-600">
            <Search />
            <input
                type="text"
                placeholder="جستجو"
                className="w-full outline-none"
            />
        </div>
    )
}
