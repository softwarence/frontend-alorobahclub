"use client";

import Link from "next/link";

import Image from "next/image";

import logo from "@/public/assets/logo.svg";

import GetMiddleNavigation from "./getMiddleNavigation";
import GetRightSideButton from "./getRightSideButton";
import GetLanguageToggleButton from "./getLanguageToggleButton";

export default function Header() {
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

        {/* RIGHT SIDE BUTTONS (Desktop) */}
        <GetRightSideButton />
      </div>
    </header>
  );
}
