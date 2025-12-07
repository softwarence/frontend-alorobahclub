"use client";

import Image from "next/image";
import logo from "@/public/assets/logo_blue.svg";

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
      {/* Marquee Track */}
      <div className="flex animate-marquee md:gap-30 whitespace-nowrap">
        {duplicated.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="flex items-center md:gap-8 px-4 shrink-0 py-3 md:h-auto"
            aria-hidden={i >= panels.length} // hide duplicated items from screen readers
          >
            <Image src={logo} alt="logo" className="h-[35px] md:h-auto"></Image>
            <p className="text-black font-extrabold uppercase md:text-5xl text-3xl pb-1">
              {item.text}
            </p>
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
