"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- ASSETS ---
import AlOrobahLogo from "@/public/assets/logo_d.svg"; // Main logo
import AppStoreBadge from "@/public/assets/footer/apple.svg"; // App Store badge
import GooglePlayBadge from "@/public/assets/footer/goggle.svg"; // Google Play badge
import GetMiddleNavigation from "./getMiddleNavigation";
import GetRightSideButton from "./getRightSideButton";
import GetLanguageToggleButton from "./getLanguageToggleButton";

// --- SOCIAL ICONS ---
import youtube from "@/public/assets/social/youtube.svg";
import X from "@/public/assets/social/X.svg";
import instagram from "@/public/assets/social/instragram.svg";
import tiktok from "@/public/assets/social/tiktok.svg";
import snapChat from "@/public/assets/social/snapChat.svg";

const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: youtube, href: "#youtube" },
    { name: "snapChat", icon: snapChat, href: "#snapChat" },
    { name: "X (Twitter)", icon: X, href: "#x" },
    { name: "Instagram", icon: instagram, href: "#instagram" },
    { name: "tiktok", icon: tiktok, href: "#tiktok" },
  ];

  return (
    <footer className="relative bg-[#001E24] border-b-3 border-[#FFE000] overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-0" />

      {/* Logo & Download Section */}
      <section className="md:px-4 md:py-12 pt-12 md:pt-0 flex flex-row items-center justify-center gap-1 md:gap-20 z-10 relative">
        {/* Logo */}
        <div className="relative w-32 h-25 flex-shrink-0">
          <Image
            src={AlOrobahLogo}
            alt="Al-Orobah Club Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Download Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center md:text-left pr-5">
          <p className="text-white md:text-lg sm:text-xl font-semibold">
            Download the Al-Orobah App
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <Button variant="outline" className="p-0">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src={AppStoreBadge}
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-10 w-auto transition-opacity hover:opacity-80"
                />
              </Link>
            </Button>
            <Button variant="outline" className="p-0">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src={GooglePlayBadge}
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-10 w-auto transition-opacity hover:opacity-80"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="md:flex flex-col md:flex-row gap-4 md:gap-10 justify-center pb-20 z-10 relative hidden">
        <GetMiddleNavigation />
        <GetRightSideButton />
      </section>

      {/* Social Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-4">
        <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Social Icons */}
          <div className="flex items-center space-x-1">
            {socialLinks.map((link) => (
              <a
                target="_blank"
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="p-1 hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <Image src={link.icon} alt={`${link.name} Icon`} width={22} height={20} />
              </a>
            ))}
          </div>

          {/* Links & copyright */}
          <div className="flex flex-col md:flex-row items-center md:space-x-6 text-sm text-gray-400 text-center md:text-left gap-2 md:gap-0">
            <a href="#contact" className="hover:text-white transition-colors">
              Contact us
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>© All Rights Reserved 2025</span>
          </div>

          {/* Language Toggle */}
          <div className="flex justify-end w-full md:w-auto">
            <GetLanguageToggleButton />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
