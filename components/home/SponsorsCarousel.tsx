"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

// --- LOGOS ---
import logoL1 from "@/public/assets/sponsors/l1.svg";
import logoL2 from "@/public/assets/sponsors/l2.svg";
import logoL3 from "@/public/assets/sponsors/l3.svg";
import logoL4 from "@/public/assets/sponsors/l4.svg";
import logoL5 from "@/public/assets/sponsors/l5.svg";
import logoL6 from "@/public/assets/sponsors/l6.svg";
import logoL7 from "@/public/assets/sponsors/l7.svg";
import logoL8 from "@/public/assets/sponsors/l3.svg";
import logoL9 from "@/public/assets/sponsors/l6.svg";
import logoL10 from "@/public/assets/sponsors/l4.svg";
import logoL11 from "@/public/assets/sponsors/l7.svg";
import logoL12 from "@/public/assets/sponsors/l1.svg";
import logoL13 from "@/public/assets/sponsors/l3.svg";
import logoL14 from "@/public/assets/sponsors/l5.svg";

// --- ARROWS ---
import leftArrow from "@/public/assets/Sponsors/leftArrow.svg";
import rightArrow from "@/public/assets/Sponsors/rightArrow.svg";

// --- Sponsor data ---
const sponsors = [
  logoL1,
  logoL2,
  logoL3,
  logoL4,
  logoL5,
  logoL6,
  logoL7,
  logoL8,
  logoL9,
  logoL10,
  logoL11,
  logoL12,
  logoL13,
  logoL14,
];

export default function SponsorsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  const ITEMS_PER_PAGE = 6;

  const BG_COLOR = "#ffda00";
  const BORDER_COLOR = "#005a9c";

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: BG_COLOR,
        borderTop: `2px solid ${BORDER_COLOR}`,
        borderBottom: `2px solid ${BORDER_COLOR}`,
      }}
    >
      <div className="px-4 py-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-black mb-4">
          SPONSORS
        </p>

        <div className="relative px-20">
          {/* CAROUSEL */}
          <Carousel
            opts={{ loop: false, slidesToScroll: ITEMS_PER_PAGE }}
            setApi={setApi}
            className="w-full px-0"
          >
            <CarouselContent className="-ml-2">
              {sponsors.map((src, i) => (
                <CarouselItem
                  key={i}
                  className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/6 lg:basis-1/6"
                >
                  <div className="w-full h-20 flex items-center justify-center relative">
                    <Image src={src} alt={`Sponsor ${i + 1}`} fill className="object-contain" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* ARROWS */}
          <Button
            variant="link"
            onClick={() => api?.scrollPrev()}
            className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 z-30 p-0 bg-transparent hover:opacity-80"
          >
            <Image src={rightArrow} width={44} height={44} alt="Next" />
          </Button>
          <Button
            variant="link"
            onClick={() => api?.scrollNext()}
            className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 z-30 p-0 bg-transparent hover:opacity-80"
          >
            <Image src={leftArrow} width={44} height={44} alt="Prev" />
          </Button>
        </div>
      </div>
    </div>
  );
}
