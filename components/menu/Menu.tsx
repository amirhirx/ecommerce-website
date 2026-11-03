import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { v4 as uuidv4 } from "uuid";

export default function Menu() {
  const id = uuidv4();
  const navigationMenuItems: {
    text: string;
    link: string;
  }[] = [
    { text: "خانه", link: "/" },
    { text: "درباره ما", link: "/about-us" },
    { text: "تماس با ما", link: "/contact-ut" },
    {
      text: "محصولات",
      link: "/products",
    },
  ];

  return (
    <header className="bg-white py-2 px-4 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-xl font-black">بازارک</h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navigationMenuItems.map((item) => {
            return (
              <NavigationMenuItem key={id}>
                <NavigationMenuLink
                  render={<Link href={item.link}>{item.text}</Link>}
                />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
