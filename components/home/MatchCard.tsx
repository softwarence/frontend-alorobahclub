import React from "react";
import { Match } from "./data";
import Image from "next/image";
import { Separator } from "../ui/separator";
import V_white_Logo from "@/public/assets/match/V_white.svg";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <div className="cut-corner bg-[#001317] max-w-[356px] p-6 backdrop-blur-sm  min-h-[350px]">
      {/* Logos */}
      <div className="flex flex-col gap-5 pb-5 h-3/5">
        <div className="flex justify-center">
          <Image src={match.leagueLogo} alt="League Logo" />
        </div>

        <div className="flex justify-center items-center gap-5">
          <div className="rounded-full flex items-center justify-center">
            <Image src={match.logoA} alt="team A logo" />
          </div>

          <Image src={V_white_Logo} alt="vs icon" className="mx-3 w-6 h-6" />

          <div className="rounded-full flex items-center justify-center">
            <Image src={match.logoB} alt="team B logo" />
          </div>
        </div>
      </div>

      <Separator />

      {/* Details */}
      <div className="text-center mt-2 space-y-2 pt-3 -mb-2">
        <p className="text-xl font-bold">{match.date}</p>
        <p className="mt-1 text-xl font-bold">{match.time}</p>
        <p className="mt-1 text-sm">{match.venue}</p>
      </div>
    </div>
  );
};

export default MatchCard;
