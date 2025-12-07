"use client";

import Image from "next/image";
import logo from "@/public/assets/logo_blue.svg";

// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";

interface PanelItem {
  id: number;
  text: string;
}

const panels: PanelItem[] = [
  { id: 0, text: "Shop official kits" },
  { id: 1, text: "Shop official kits" },
  { id: 2, text: "Shop official kits" },
  { id: 3, text: "Shop official kits" },
  { id: 4, text: "Shop official kits" },
];

export default function OfferSlider() {
  // Duplicate the panels so the ticker loops seamlessly
  const duplicated = [...panels, ...panels];

  return (
    <div className="relative w-full bg-[#FFE000] overflow-hidden select-none py-2">
      {/* Left & Right Gradient Edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#FFE000] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#FFE000] to-transparent pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex animate-marquee gap-30 whitespace-nowrap">
        {duplicated.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="flex items-center gap-8 px-4 shrink-0 py-3"
            aria-hidden={i >= panels.length} // hide duplicated items from screen readers
          >
            <Image src={logo} alt="logo"></Image>
            <p className="text-black font-extrabold uppercase text-5xl pb-1">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Inline keyframes for the ticker */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
