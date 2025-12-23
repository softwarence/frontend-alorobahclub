"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

import downArrow from "@/public/assets/downArrow_white.svg";
import GetMiddleNavigationStore from "./GetMiddleNavigationStore";

import searchIcon from "@/public/assets/search_icon.svg";
import userIcon from "@/public/assets/user_icon.svg";
import cardIcon from "@/public/assets/card_icon.svg";

export default function StoreHeader() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News & Media", href: "/news" },
    { name: "Team", href: "/team" },
    { name: "Matches", href: "/matches" },
  ];

  const path = usePathname();
  const segments = path.split("/");
  const storeId = segments[segments.indexOf("store") + 1];
  const isStoreNumberPage = storeId && !isNaN(Number(storeId));

  const widthInclude = path.includes("/matches") || isStoreNumberPage || path.includes("/checkout");

  return (
    <header
      className={`
      ${widthInclude ? "bg-[#001317]" : "absolute  bg-gradient-to-b from-black/95 via-black/60 to-transparent"} top-0 left-0 w-full z-50 pb-4`}
    >
      <div className="xl:px-12 px-5 py-2">
        <p className="text-[#FFE000]">Free Shipping within Saudi Arabia</p>
        <div className=" w-full flex items-center justify-center max-w-7xl">
          <div className="">
            <Button variant={"link"} className="text-white flex items-center gap-4">
              Saudi Sar
              <Image src={downArrow} alt="" className="pt-1"></Image>
            </Button>
          </div>
          <div className="">
            <Button variant={"link"} className="text-white flex items-center gap-4">
              English <Image src={downArrow} alt="" className="pt-1"></Image>
            </Button>
          </div>
        </div>
      </div>

      {/* ---------- */}
      <div className="mx-auto flex items-center justify-between xl:px-12 px-5">
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
          <GetMiddleNavigationStore></GetMiddleNavigationStore>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="py-6 rounded-xl bg-black/40 backdrop-blur-md shadow-lg hover:bg-black/60 transition md:hidden">
              <Menu className="text-white size-7" />
            </Button>
          </SheetTrigger>

          <SheetContent
            showDefaultCloseIcon={false}
            side="left"
            className="
          bg-black/80 backdrop-blur-xl text-white w-72
          border-r border-white/10 shadow-2xl p-0 overflow-hidden
          "
          >
            {/* Radix Accessibility */}
            <VisuallyHidden>
              <DialogTitle>Mobile Navigation Menu</DialogTitle>
            </VisuallyHidden>

            {/* Sheet Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
              <Image src={logo} alt="Logo" className="h-10 w-auto" />
              <SheetTrigger>
                <X className="size-6 text-white hover:text-red-400 transition" />{" "}
              </SheetTrigger>
            </div>

            {/* Menu Body */}
            <div className="p-5 space-y-6">
              <h2 className="text-lg font-semibold tracking-wide uppercase text-white/80">Menu</h2>
              <Separator className="bg-white/20" />

              <nav className="flex flex-col gap-4 text-lg">
                {navLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center gap-3 px-2 py-2 rounded-lg transition
                           ${isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white"}
                        `}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        {/* RIGHT SIDE BUTTONS (Desktop) */}
        <div className="md:flex items-center justify-center md:gap-6 hidden">
          <Image
            src={searchIcon}
            alt=""
            className="cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80"
          />
          <Link href={"/dashboard"}>
            <Image
              src={userIcon}
              alt=""
              className="cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80"
            />
          </Link>
          <Image
            src={cardIcon}
            alt=""
            className="cursor-pointer transition-all duration-200 hover:scale-110 hover:opacity-80"
          />
        </div>
      </div>
    </header>
  );
}
