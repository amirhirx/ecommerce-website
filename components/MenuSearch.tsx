import { IoSearchOutline } from "react-icons/io5";

export default function MenuSearch() {
  return (
    <div className="flex bg-gray-100 p-2 rounded w-full items-center gap-2 text-gray-600">
      <IoSearchOutline className="text-2xl" />
      <input type="text" placeholder="جستجو" className="outline-none w-full" />
    </div>
  );
}
