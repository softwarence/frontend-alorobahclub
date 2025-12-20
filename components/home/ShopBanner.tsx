"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import Gradient_Overlay from "@/public/assets/home/Gradient_Overlay.svg";
import Official_Kit_Background from "@/public/assets/home/Official_Kit_Background.svg";
import Link from "next/link";

export default function ShopBanner() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[450px] md:h-[600px]">
        {/* Background Images */}
        <Image
          src={Official_Kit_Background}
          alt="Official Kit Background"
          fill
          style={{ objectFit: "cover", zIndex: -2 }}
        />
        <Image
          src={Gradient_Overlay}
          alt="Gradient Overlay"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />

        {/* Hero Content - CENTERED */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-6 md:px-20 space-y-6">
          <h1 className="text-2xl md:text-6xl font-bold text-white">NEW 2025/26 THIRD KIT</h1>
          <Link href={"/store"}>
            <Button variant={"primary"} className="py-5 px-5 cut-corner-btn">
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
