"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";

const mainMenu: { title: string; href: string }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "Signals",
    href: "/signals",
  },
  {
    title: "Education",
    href: "/education",
  },
  {
    title: "Community",
    href: "/community",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Header = () => {
  return (
    <div className="w-full h-[112px] fixed left-0 top-0 pt-[32px] z-50 backdrop-blur-sm border">
      <div className="max-w-[1440px] m-auto flex gap-2 items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={56}
            alt="logo"
            className=""
          />
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="gap-8">
            {mainMenu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink className="hover:!bg-transparent !text-[14px]">
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-3 justify-end items-center">
          <Button>
            Login
          </Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
