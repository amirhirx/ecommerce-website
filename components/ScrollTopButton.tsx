"use client";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollTopButton() {
  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <button
      onClick={scrollTop}
      className="flex items-center border border-gray-500 rounded-lg  text-gray-500 p-3 md:py-2 md:px-4 gap-2 text-sm cursor-pointer hover:text-green-400 hover:border-green-400 shadow"
    >
      <span className="font-semibold hidden md:block">بازگشت به بالا</span>
      <IoIosArrowUp size={18} />
    </button>
  );
}
