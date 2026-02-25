import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { BsShop } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import MenuNavigation from "./MenuNavigation";
import { INavigation } from "@/types/navigation";
import CartIcon from "./CartIcon";

const navigations: INavigation[] = [
  { text: "صفحه اصلی", href: "/", icon: FiHome({}) },
  { text: "فروشگاه", href: "/products", icon: BsShop({}) },
  { text: "وبلاگ", href: "/blog", icon: MdOutlineArticle({}) },
  { text: "درباره ما", href: "/about", icon: IoInformationCircleOutline({}) },
  { text: "تماس با ما", href: "/contact", icon: TfiHeadphoneAlt({}) },
];

export default function Menu() {
  return (
    <header className="w-full md:w-98/100 md:my-1.5 mb-1.5 py-3.5 px-4 md:mx-auto md:rounded-xl md:overflow-hidden shadow flex items-center justify-between bg-white ">
      <div>
        <Link href={"/"}>
          <h1 className="text-lg font-black">وبسایت فروشگاهی</h1>
        </Link>
      </div>
      <MenuNavigation items={navigations} />
      <div className="flex items-center gap-4">
        <Link href={"#"}>
          <FiUser size={22} />
        </Link>

        <CartIcon />
      </div>
    </header>
  );
}
