"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";
import logo from "@/public/assets/logo.svg";

import facebookIcon from "@/public/assets/social/facebook-icon.svg";
import XIcon from "@/public/assets/social/X-icon.svg";
import InskIcon from "@/public/assets/social/instra-cion.svg";
import TikIcon from "@/public/assets/social/ticktok-icon.svg";
import SnapIcon from "@/public/assets/social/snap-icon.svg";
import YouIcon from "@/public/assets/social/youtube-icon.svg";

const StoreFooter = () => {
  return (
    <footer className="text-white pt-20 pb-10 px-6 md:px-10 lg:px-20">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Subscribe Section */}

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Subscribe to our emails</h2>

          <Button variant="link" className="text-sm underline text-white opacity-80 mt-1">
            Privacy Policy
          </Button>

          {/* Input Field */}
          <div className="flex justify-center mt-6">
            <div className="w-full max-w-md flex items-center gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white text-black px-4 py-6 h-12 rounded-xl"
              />
            </div>
          </div>

          <p className="text-xs mt-4 leading-relaxed max-w-lg mx-auto">
            By subscribing you consent to receive the latest news, products, and competitions from
            Al-Ittihad Club. You can unsubscribe at any time. For more information, please see our
            Privacy Policy.
          </p>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-3xl font-bold mb-4">About Al-Orobah Club</h3>
          <Image src={logo} alt="club logo" className="w-60 mb-4" />
          <p className="text-sm leading-relaxed">
            Al-Orobah Club is considered the first sports club in Saudi Arabia, founded in 1927 in
            Jeddah. Since then, it has soared toward glory and championships, achieving a widespread
            and passionate fan base.
          </p>
        </div>

        {/* Track Order */}
        <div>
          <h3 className="text-3xl font-bold mb-4">Track Your Order</h3>
          <Button variant="link" className="text-white">
            Track your order
          </Button>
        </div>

        {/* Empty Column For Alignment */}
        <div className="hidden lg:block"></div>

        {/* Request Refund */}
        <div>
          <h3 className="text-lg font-bold mb-4">Request for Replacement or Refund</h3>
          <p className="text-sm leading-relaxed">
            Log in to your account.
            <br />
            <br />
            Go to “My Orders” and click on “Request a Return”.
            <br />
            <br />
            State the reason for your request.
            <br />
            <br />
            Confirm the return request.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick links</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <li>Contact us</li>
            <li>Store Address</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Service</li>
            <li>Privacy policy</li>
            <li>Search</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-7xl mx-auto md:pt-10">
        <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
          {/* Language & Country */}
          <div
            className="flex items-center md:justify-between
          md:flex-row pt-10 md:pt-0
            flex-col
          gap-6 w-full"
          >
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 cursor-pointer">
                <Globe size={16} />
                <span>English</span>
                <ChevronDown size={14} />
              </div>

              <div className="flex items-center gap-1 cursor-pointer">
                <span>Saudi Arabia (SAR ر.س)</span>
                <ChevronDown size={14} />
              </div>
            </div>
            <div className="flex gap-5 items-center justify-center">
              <Image
                className="hover:scale-105 hover:cursor-pointer"
                src={facebookIcon}
                alt=""
              ></Image>
              <Image className="hover:scale-110 hover:cursor-pointer" src={XIcon} alt=""></Image>
              <Image className="hover:scale-110 hover:cursor-pointer" src={InskIcon} alt=""></Image>
              <Image className="hover:scale-110 hover:cursor-pointer" src={TikIcon} alt=""></Image>
              <Image className="hover:scale-110 hover:cursor-pointer" src={SnapIcon} alt=""></Image>
              <Image className="hover:scale-110 hover:cursor-pointer" src={YouIcon} alt=""></Image>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 opacity-80 text-lg">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-tiktok"></i>
            <i className="fab fa-snapchat"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs opacity-60 mt-8">
          © 2025 Al Orobah Club - نادي العروبة . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default StoreFooter;
