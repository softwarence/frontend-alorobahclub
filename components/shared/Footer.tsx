"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

// --- ASSETS ---
import AlOrobahLogo from "@/public/assets/logo.svg"; // Main logo
import AppStoreBadge from "@/public/assets/footer/apple.svg"; // App Store badge
import GooglePlayBadge from "@/public/assets/footer/goggle.svg"; // Google Play badge
import GetMiddleNavigation from "./getMiddleNavigation";
import GetRightSideButton from "./getRightSideButton";

// --- SOCIAL ICONS ---
import youtube from "@/public/assets/social/youtube.svg";
import X from "@/public/assets/social/X.svg";
import instagram from "@/public/assets/social/instragram.svg";
import tiktok from "@/public/assets/social/tiktok.svg";
import snapChat from "@/public/assets/social/snapChat.svg";

import GetLanguageToggleButton from "./getLanguageToggleButton";
const Footer = () => {
  const socialLinks = [
    { name: "YouTube", icon: youtube, href: "#youtube" },
    { name: "snapChat", icon: snapChat, href: "#snapChat" },
    { name: "X (Twitter)", icon: X, href: "#x" },
    { name: "Instagram", icon: instagram, href: "#instagram" },
    { name: "tiktok", icon: tiktok, href: "#tiktok" },
  ];

  return (
    <footer className="relative bg-[#001E24]  border-b-3 border-[#FFE000] overflow-hidden">
      {/* dark background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-0" />

      {/* logo section  */}
      <section className="px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-20 z-10 relative">
        {/* Logo Section */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
          <Image
            src={AlOrobahLogo}
            alt="Al-Orobah Club Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Download Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-white text-lg sm:text-xl font-semibold text-center md:text-left">
            Download the Al-Orobah App
          </p>
          <div className="flex gap-3  justify-center md:justify-start">
            {/* App Store Badge */}
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

            {/* Google Play Badge */}
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

      {/* link section */}
      <section className="flex gap-10 justify-center pb-20 z-10 relative">
        <GetMiddleNavigation></GetMiddleNavigation>
        <GetRightSideButton></GetRightSideButton>
      </section>

      {/* social section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-4">
        {/* Inner container with the thin blue border */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            {/* Left Section: Social Icons */}
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

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#contact" className="hover:text-white transition-colors">
                Contact us
              </a>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span>© All Rights Reserved 2025</span>
            </div>

            <div className="flex items-center space-x-4">
              <GetLanguageToggleButton />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
