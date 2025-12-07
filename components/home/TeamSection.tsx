"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

// Import SVGs as images
import StevenBergwijn from "@/public/assets/team/Steven_Bergwijn.svg";
import DaniloPereira from "@/public/assets/team/Danilo_Pereira.svg";
import HoussemAouar from "@/public/assets/team/Houssem_Aouar.svg";
import KarimBenzema from "@/public/assets/team/Karim_Benzema.svg";
import { Button } from "../ui/button";

// --- Team Data ---
interface Player {
  name: string;
  imageSrc: StaticImageData;
}

const teamPlayers: Player[] = [
  { name: "KARIM BENZEMA", imageSrc: KarimBenzema },
  { name: "STEVEN BERGWIJN", imageSrc: StevenBergwijn },
  { name: "HOUSSEM AOUAR", imageSrc: HoussemAouar },
  { name: "DANILO PEREIRA", imageSrc: DaniloPereira },
];

// --- Player Card ---
const PlayerCard: React.FC<Player> = ({ name, imageSrc }) => {
  return (
    <div className="w-full group">
      <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
        {/* Player Image */}
        <Image src={imageSrc} alt={name} fill className="object-cover z-10" />

        {/* Name Overlay (covers bottom 80%) */}
        <div className="absolute bottom-0 left-0 w-full h-[90%] bg-[#001317] flex flex-col justify-end p-4 cut-corner"></div>
        <div className="absolute bottom-0 left-4 text-xl font-bold text-white z-20">
          <p>{name.split(" ")[0]}</p>
          <p className="-mt-1.5">{name.split(" ")[1]}</p>
        </div>
      </div>
    </div>
  );
};

// --- Team Section ---
const TeamSection = () => {
  return (
    <section className="bg-black py-12 md:py-20 lg:px-4">
      <div className="px-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-4xl font-extrabold uppercase text-white">TEAM</h2>
          <Button variant={"primary"} className="">
            VIEW FULL TEAM
          </Button>
        </div>

        {/* Player Grid */}
        <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamPlayers.map((player, idx) => (
            <PlayerCard key={idx} {...player} />
          ))}

          {/* Black gradient overlay at the bottom */}
          <div className="absolute bottom-0 left-0 w-full h-4/6 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
        </div>

        {/* Bottom Yellow Separator */}
        <div className="mt-10"></div>
      </div>
    </section>
  );
};

export default TeamSection;
