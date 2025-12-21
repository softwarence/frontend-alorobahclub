import React from "react";
import { Match } from "./data";
import Image from "next/image";
import { Separator } from "../ui/separator";
import V_white_Logo from "@/public/assets/match/V_white.svg";
import V_black_Logo from "@/public/assets/match/V_black.svg";

interface MatchCardProps {
  match: Match;
  isYellow: boolean;
  bgColor: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, isYellow, bgColor }) => {
  return (
    <div
      className={`cut-corner ${isYellow ? "bg-[#FFE000]" : bgColor} w-full md:max-w-[356px] p-6 backdrop-blur-sm  min-h-[350px] text-white`}
    >
      {/* Logos */}
      <div className="flex flex-col gap-5 pb-5 h-3/5">
        <div className="flex justify-center">
          <Image src={match.leagueLogo} alt="League Logo" />
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="rounded-full flex items-center justify-center">
            <Image src={match.logoA} alt="team A logo" />
          </div>

          {isYellow ? (
            <>
              <Image src={V_black_Logo} alt="vs icon" className="mx-3 w-6 h-6" />
            </>
          ) : (
            <>
              <Image src={V_white_Logo} alt="vs icon" className="mx-3 w-6 h-6" />
            </>
          )}

          <div className="rounded-full flex items-center justify-center">
            <Image src={match.logoB} alt="team B logo" />
          </div>
        </div>
      </div>

      <Separator className={`${isYellow ? "bg-black" : ""}`} />

      {/* Details */}
      <div className={`text-center mt-2 space-y-2 pt-3 -mb-2 ${isYellow ? "text-black" : ""}`}>
        <p className="text-xl font-bold">{match.date}</p>
        <p className="mt-1 text-xl font-bold">{match.time}</p>
        <p className="mt-1 text-sm">{match.venue}</p>
      </div>
    </div>
  );
};

export default MatchCard;
