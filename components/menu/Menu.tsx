import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { v4 as uuid } from "uuid";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  Contact01Icon,
  DeliveryBox02Icon,
  Home07Icon,
  InfoIcon,
  More03Icon,
  ShoppingBag,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { IconSvgObject } from "@hugeicons/core-free-icons/types";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Menu() {
  const navigationMenuItems: {
    icon: IconSvgObject;
    text: string;
    link: string;
  }[] = [
    { icon: Home07Icon, text: "خانه", link: "/" },
    { icon: InfoIcon, text: "درباره ما", link: "/about-us" },
    { icon: Contact01Icon, text: "تماس با ما", link: "/contact-ut" },
    {
      icon: DeliveryBox02Icon,
      text: "محصولات",
      link: "/products",
    },
  ];

  return (
    <header className="bg-background py-2 px-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image width={32} height={32} alt="website logo" src={"/logo.svg"} />
        <h1 className="text-xl font-black">بازارک</h1>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {navigationMenuItems.map((item) => {
            return (
              <NavigationMenuItem key={uuid()}>
                <NavigationMenuLink
                  render={
                    <Link href={item.link}>
                      <HugeiconsIcon icon={item.icon} />
                      {item.text}
                    </Link>
                  }
                />
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={
                <Button>
                  <Link href="/cart" className="flex items-center gap-2">
                    <HugeiconsIcon icon={ShoppingBag} />
                    <span>سبد خرید</span>
                  </Link>
                </Button>
              }
            />
          </NavigationMenuItem>
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
                    <Link href={item.link} className="flex items-center gap-2">
                      <HugeiconsIcon icon={item.icon} />
                      {item.text}
                    </Link>
                  </li>
                );
              })}
              <li key={uuid()} className="text-lg font-semibold">
                <Link href="/cart" className="flex items-center gap-2">
                  <HugeiconsIcon icon={ShoppingBag} />
                  سبد خرید
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
