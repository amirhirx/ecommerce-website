import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { v4 as uuid } from "uuid";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { More03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Menu() {
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
    <header className="bg-background py-2 px-4 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-xl font-black">بازارک</h1>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navigationMenuItems.map((item) => {
            return (
              <NavigationMenuItem key={uuid()}>
                <NavigationMenuLink
                  render={<Link href={item.link}>{item.text}</Link>}
                />
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center justify-center">
            <HugeiconsIcon icon={More03Icon} />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="py-16 opacity-90 backdrop-blur-lg px-8"
          >
            <ul className="flex flex-col items-center justify-center gap-4">
              {navigationMenuItems.map((item) => {
                return (
                  <li key={uuid()} className="text-lg font-semibold">
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
