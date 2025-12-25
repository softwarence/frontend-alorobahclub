"use client";

import Image from "next/image";

// --- LOGOS ---
import logoL1 from "@/public/assets/Sponsors/s1.png";
import logoL2 from "@/public/assets/Sponsors/s2.png";
import logoL3 from "@/public/assets/Sponsors/s3.png";

// --- Sponsor Data ---
const sponsors = [logoL1, logoL2, logoL3];

export default function Sponsors() {
  return (
    <section className="relative w-full bg-[#001E24] overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <p className="text-center md:text-2xl font-bold uppercase tracking-widest text-white mb-10">
          Sponsors
        </p>

        {/* Sponsor Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10">
          {sponsors.map((logo, index) => (
            <div key={index} className="relative w-32 h-20 md:w-40 md:h-24">
              <Image
                src={logo}
                alt={`Sponsor ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
