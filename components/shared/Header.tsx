"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";

import GetMiddleNavigation from "./getMiddleNavigation";
import GetRightSideButton from "./getRightSideButton";
import GetLanguageToggleButton from "./getLanguageToggleButton";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header
      className="
      absolute top-0 left-0 w-full z-50
      bg-gradient-to-b
      from-black/95
      via-black/60
      to-transparent
    "
    >
      <div className="border-t-7 border-[#0091B6] flex justify-end xl:px-12 px-5 py-2">
        <GetLanguageToggleButton></GetLanguageToggleButton>
      </div>

      {/* ---------- */}
      <div className="mx-auto flex items-center justify-between xl:px-12 px-5 py-3 border-t border-[#0091B6]/30">
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
          <GetMiddleNavigation></GetMiddleNavigation>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-xl bg-black/40 backdrop-blur-md shadow-lg hover:bg-black/60 transition md:hidden">
              <Menu className="text-white size-7" />
            </button>
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
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-2 py-2 rounded-lg transition
                ${isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white"}
              `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        {/* RIGHT SIDE BUTTONS (Desktop) */}
        <GetRightSideButton />
      </div>
    </header>
  );
}
