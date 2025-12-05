"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "@/public/assets/logo.svg";
import switch_en_hanja_icon from "@/public/assets/switch_en_hanja_icon.svg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import export_box_icon from "@/public/assets/export_box_icon.svg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingBag, Ticket } from "lucide-react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "News & Media", href: "/news" },
  { name: "Team", href: "/team" },
  { name: "Matches", href: "/matches" },
];

export default function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState("EN");
  return (
    <header
      className="
    fixed top-0 left-0 w-full z-50
    bg-gradient-to-b
    from-black/95
    via-black/60
    to-transparent
    "
    >
      <div className="border-t-7 border-[#0091B6] flex justify-end px-12 py-2">
        <ToggleGroup
          type="single"
          value={lang}
          onValueChange={(v) => v && setLang(v)}
          className="bg-[#001E24] w-18 h-5 rounded flex flex-row-reverse p-0"
        >
          {/* EN BUTTON */}
          <ToggleGroupItem
            value="EN"
            className={`
            w-1/2 text-[12px] font-semibold
            flex items-center justify-center h-5

            text-white
            data-[state=on]:text-[#ffff]
            data-[state=off]:text-white/80

            data-[state=on]:bg-[#001317]
            data-[state=off]:bg-transparent

            hover:text-[#FFE000]
      `}
          >
            EN
          </ToggleGroupItem>

          {/* IMAGE BUTTON */}
          <ToggleGroupItem
            value="ICON"
            className={`
            w-1/2 h-5 flex items-center justify-center
            data-[state=on]:bg-[#001317]
            data-[state=off]:bg-transparent
      `}
          >
            <Image
              src={switch_en_hanja_icon}
              alt="switch icon"
              width={7}
              height={7}
              className="opacity-90"
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* ---------- */}
      <div className="mx-auto flex items-center justify-between px-12 py-3 border-t border-[#0091B6]/30">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Al-Orobah Club Logo"
            width={180}
            height={150}
            className="object-contain"
          />
        </Link>

        {/* MIDDLE: NAVIGATION (Desktop) */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      className={`
                        bg-transparent
                        hover:bg-transparent
                        focus:bg-transparent
                        rounded-none
                        transition-colors
                        ${active ? "text-[#FFE000] !important" : "text-white !important"}
                        `}
                    >
                      <Link
                        href={item.href}
                        className={`
                            uppercase
                            font-bold

                            p-0
                            no-underline
                            ${active ? "text-[#FFE000]" : "text-white"}
                            hover:!text-[#FFE000]
                            focus:!text-[#FFE000]
                        `}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* RIGHT SIDE BUTTONS (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* STORE */}
          <Link
            href="/store"
            className="flex items-center gap-2 text-white font-semibold hover:text-[#FFE000]"
          >
            STORE
            <Image
              src={export_box_icon}
              alt="export"
              width={16}
              height={16}
              className="opacity-90"
            />
          </Link>

          {/* TICKETS */}
          <Link
            href="/tickets"
            className="flex items-center gap-2 text-white font-semibold hover:text-[#FFE000]"
          >
            TICKETS
            <Image
              src={export_box_icon}
              alt="export"
              width={16}
              height={16}
              className="opacity-90"
            />
          </Link>
        </div>

        {/* MOBILE MENU */}
        <Sheet>
          <SheetTrigger className="md:hidden text-white">
            <Menu size={28} />
          </SheetTrigger>

          <SheetContent side="left" className="bg-black text-white">
            <div className="mt-10 space-y-6 text-lg font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block ${pathname === item.href ? "text-[#FFE000]" : "text-white"}`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-6 border-t border-white/20 space-y-4">
                <Link
                  href="/store"
                  className="flex items-center gap-3 text-white hover:text-[#FFE000]"
                >
                  <ShoppingBag size={20} />
                  STORE
                </Link>

                <Link
                  href="/tickets"
                  className="flex items-center gap-3 text-white hover:text-[#FFE000]"
                >
                  <Ticket size={20} />
                  TICKETS
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
