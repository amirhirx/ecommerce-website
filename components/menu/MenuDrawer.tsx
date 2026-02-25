import { INavigation } from "@/types/navigation";
import Link from "next/link";
import { MdClose } from "react-icons/md";

export default function MenuDrawer({
  items,
  isShown,
  closeHandler,
}: {
  items: INavigation[];
  isShown: boolean;
  closeHandler: () => void;
}) {
  return (
    <div
      className={`w-60 h-screen p-4 z-10 fixed top-0 right-0 bg-white shadow-3xl border-l border-l-gray-200 transition duration-500 ${
        isShown ? "translate-x-0" : "translate-x-100"
      }`}
    >
      <MdClose
        onClick={closeHandler}
        size={22}
        className="absolute top-5 left-5"
      />

      <ul className="space-y-6 font-medium py-10 text-center text-lg">
        {items.map(({ text, href }, index) => {
          return (
            <li key={`mobile-nav-${index}`}>
              <Link href={href} onClick={closeHandler}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
