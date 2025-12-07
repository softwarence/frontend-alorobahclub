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

const Footer = () => {
  return (
    <footer className="bg-[#001E24] border-t-2 border-blue-900">
      <div className="px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-20">
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
      </div>

      <div className="flex gap-10 justify-center pb-20">
        <GetMiddleNavigation></GetMiddleNavigation>
        <GetRightSideButton></GetRightSideButton>
      </div>
    </footer>
  );
};

export default Footer;
