"use client";

import Image from "next/image";
import jersey from "@/public/assets/store/Jersey.svg";
import { Button } from "../ui/button";

export default function ProductShowcase() {
  return (
    <section className="w-full bg-[#031014] text-white py-20 px-4 md:px-10 lg:px-20">
      {/* TOP HEADING */}
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-14">
        التيشيرت التاريخي
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-[1400px] mx-auto">
        {/* LEFT IMAGE */}
        <div className="w-full flex justify-center">
          <div className="bg-[#d9d9d9] p-4 rounded-xl w-full max-w-[550px]">
            <Image src={jersey} alt="Legacy Jersey" className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-left space-y-6 px-2 md:px-6">
          <h3 className="text-3xl md:text-5xl font-bold leading-snug">
            Legacy Silver Strike Jersey
          </h3>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <span className="text-[#FF3333] text-2xl font-extrabold">299 SAR</span>
            <span className="text-gray-400 line-through text-lg">499 SAR</span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-300 leading-relaxed max-w-[450px]">
            Introducing the Legacy Series by Al-Ittihad — a tribute to the club’s greatest triumphs,
            brought to life through…
          </p>

          {/* CTA BUTTON */}
          <Button className="mt-10 h-11 bg-[#FFE000] hover:bg-transparent hover:text-white hover:border border-[#FFE000] text-black  uppercase tracking-wide transition-colors font-bold">
            Buy It Now
          </Button>
        </div>
      </div>
    </section>
  );
}
