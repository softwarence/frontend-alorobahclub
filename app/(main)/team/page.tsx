"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
// Import images using exact player names
import AbdulRahmanImage from "@/public/assets/players/Abdul Rahman _JPG.jpg";
import AbuBakrImage from "@/public/assets/players/Abu Bakr_JPG.jpg";
import AhmadImage from "@/public/assets/players/Ahmad.jpeg";
import AliImage from "@/public/assets/players/Ali_JPG.jpg";
import AbdulbariImage from "@/public/assets/players/Abdul Bari _JPG.jpg";
import DarunImage from "@/public/assets/players/Darun.jpeg";
import FawazImage from "@/public/assets/players/Fawaz_JPG.jpg";
import AzzamImage from "@/public/assets/players/Azzam_JPG.jpg";
import AymanImage from "@/public/assets/players/Aymn.jpeg";
import AnasImage from "@/public/assets/players/Anas.jpeg";
import FaresImage from "@/public/assets/players/Fares_JPG.jpg";
import FarajImage from "@/public/assets/players/Faraj_JPG.jpg";
import FahadAlMunifImage from "@/public/assets/players/Fahad (1)_JPG.jpg";
import FahadImage from "@/public/assets/players/Fahad_JPG.jpg";
import MohammedImage from "@/public/assets/players/Mohamed_JPG.jpg";
import KhaledImage from "@/public/assets/players/Khaled_JPG.jpg";
import JassemImage from "@/public/assets/players/Jasem_JPG.jpg";
import HamedAlMuqatiImage from "@/public/assets/players/Hamed_JPG.jpg";
import Fawaz2Image from "@/public/assets/players/Fawaz_JPG.jpg";
import RafeImage from "@/public/assets/players/Rafe_JPG.jpg";
import RaedImage from "@/public/assets/players/Raed.jpg";
import OsamaImage from "@/public/assets/players/Osama_JPG.jpg";
import OmarImage from "@/public/assets/players/Omar_JPG.jpg";
import NizImage from "@/public/assets/players/Nizar_JPG.jpg";
import SultanImage from "@/public/assets/players/Sultan_JPG.jpg";
import SimyImage from "@/public/assets/players/Simy.jpg";
import SaudImage from "@/public/assets/players/Saud_JPG.jpg";
import RayanImage from "@/public/assets/players/Ryan_JPG.jpg";

interface Player {
  id: number;
  name: string;
  jersey: number;
  imageSrc: StaticImageData;
}

export const PLAYERS: Player[] = [
  { id: 1, name: "Abdulrahman", jersey: 70, imageSrc: AbdulRahmanImage },
  { id: 2, name: "Abu Bakr", jersey: 7, imageSrc: AbuBakrImage },
  { id: 3, name: "Ahmad", jersey: 80, imageSrc: AhmadImage },
  { id: 4, name: "Ali", jersey: 66, imageSrc: AliImage },
  { id: 5, name: "Abdulbari", jersey: 27, imageSrc: AbdulbariImage },
  { id: 6, name: "Darun", jersey: 27, imageSrc: DarunImage },
  { id: 7, name: "Fawaz", jersey: 14, imageSrc: FawazImage },
  { id: 8, name: "Azzam", jersey: 15, imageSrc: AzzamImage },
  { id: 9, name: "Ayman", jersey: 13, imageSrc: AymanImage },
  { id: 10, name: "Anas", jersey: 66, imageSrc: AnasImage },
  { id: 11, name: "Fares", jersey: 29, imageSrc: FaresImage },
  { id: 12, name: "Faraj", jersey: 18, imageSrc: FarajImage },
  { id: 13, name: "Fahad Al-Munif", jersey: 44, imageSrc: FahadAlMunifImage },
  { id: 14, name: "Fahad", jersey: 7, imageSrc: FahadImage },
  { id: 15, name: "Mohammed", jersey: 9, imageSrc: MohammedImage },
  { id: 16, name: "Khaled", jersey: 5, imageSrc: KhaledImage },
  { id: 17, name: "Jassem", jersey: 3, imageSrc: JassemImage },
  { id: 18, name: "Hamed Al-Muqati", jersey: 18, imageSrc: HamedAlMuqatiImage },
  { id: 19, name: "Fawaz", jersey: 4, imageSrc: Fawaz2Image },
  { id: 20, name: "Rafe", jersey: 0, imageSrc: RafeImage },
  { id: 21, name: "Raed", jersey: 87, imageSrc: RaedImage },
  { id: 22, name: "Osama", jersey: 8, imageSrc: OsamaImage },
  { id: 23, name: "Omar", jersey: 19, imageSrc: OmarImage },
  { id: 24, name: "Niz", jersey: 10, imageSrc: NizImage },
  { id: 25, name: "Sultan", jersey: 87, imageSrc: SultanImage },
  { id: 26, name: "Simy", jersey: 8, imageSrc: SimyImage },
  { id: 27, name: "Saud", jersey: 22, imageSrc: SaudImage },
  { id: 28, name: "Rayan", jersey: 17, imageSrc: RayanImage },
];

// --- Player Card ---
const PlayerCard: React.FC<Player> = ({ name, jersey, imageSrc }) => {
  return (
    <div className="w-full group cursor-pointer perspective">
      <div className="relative overflow-hidden rounded-xl aspect-[3/4] shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:rotate-1">
        {/* Player Image */}
        <Image src={imageSrc} alt={name} fill className="object-cover z-10" />

        {/* Overlay for name & jersey with nice background */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md rounded-xl px-3 py-1 z-20 flex flex-col items-end">
          <p className="text-white font-bold text-lg">{name}</p>
          <p className="text-white text-sm">#{jersey}</p>
        </div>

        {/* Hover effect: name slides up */}
        <div className="absolute bottom-4 right-4 bg-black50 backdrop-blur-md rounded-xl p-5 py-1 z-20">
          <p className="text-white font-bold text-lg">{name}</p>
          <p className="text-white text-2xl">{jersey}</p>
        </div>
      </div>
    </div>
  );
};

// --- Page Component ---
const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#040f0c] py-10">
      <section className="mx-auto px-4 xl:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {PLAYERS.map((player) => (
            <PlayerCard key={player.id} {...player} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
