import Image from "next/image";
import React from "react";

import AlRiyadh from "@/public/assets/match/Al-Riyadh Logo.svg";

import MainLogo from "@/public/assets/match/logo.svg";
import V_white_Logo from "@/public/assets/match/V_white.svg";

const UpComingMatchDetails = () => {
  return (
    <div>
      <div className="text-center mb-7 pt-10">
        <h1 className="md:text-5xl text-3xl font-extrabold uppercase">UPCOMING MATCH</h1>
      </div>
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center md:space-x-12 space-x-6  mb-5">
          <div className="w-24 h-24 rounded-full">
            <Image src={MainLogo} alt="Team A" className="w-full h-full object-contain" />
          </div>
          <Image src={V_white_Logo} alt="VS" className="w-10 h-10" />
          <div className="w-24 h-24 rounded-full">
            <Image src={AlRiyadh} alt="Team B" className="w-full h-full object-contain" />
          </div>
        </div>

        <p className="md:text-md text-sm font-medium mb-3">
          6th November | <span>5:00 PM AST</span> | King Abdullah Sport City
        </p>

        {/* Countdown */}
        <div className="flex space-x-8 text-center mb-3">
          {["02", "23", "20", "56"].map((value, i) => (
            <div key={i} className="flex flex-col items-center p-2 gap-0.5">
              <span className="text-4xl font-bold text-white">{value}</span>
              <span className="text-sm text-gray-300">
                {["days", "hours", "minutes", "secs"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpComingMatchDetails;
