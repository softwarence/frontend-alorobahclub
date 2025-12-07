"use client";

import React from "react";

// --- Colors ---
const COLORS = {
  DEEP_BLACK: "#121212",
  HIGHLIGHT_YELLOW: "#FFD700",
  ACCENT_GREEN: "#00A651",
  ACCENT_BLUE: "#005A9C",
  CARD_DARK_BG: "#1E1E1E",
  TEXT_GRAY: "#AAAAAA",
  LOGO_BG: "#2A2A2A",
};

// --- Match Type ---
interface Match {
  date: string;
  time: string;
  venue: string;
  isHighlighted: boolean;
  logoA: string;
  logoB: string;
}

// --- Sample Data ---
const matches: Match[] = [
  {
    date: "21ST NOVEMBER",
    time: "1:45 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: true,
    logoA: "url(/logo-ur-blue.png)",
    logoB: "url(/logo-red.png)",
  },
  {
    date: "20TH DECEMBER",
    time: "5:30 PM AST",
    venue: "Al Hazm Club Stadium",
    isHighlighted: false,
    logoA: "url(/logo-ur-blue.png)",
    logoB: "url(/logo-yellow.png)",
  },
  {
    date: "23RD DECEMBER",
    time: "6:15 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: "url(/logo-ur-yellow.png)",
    logoB: "url(/logo-black.png)",
  },
  {
    date: "27TH DECEMBER",
    time: "5:30 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: "url(/logo-ur-yellow.png)",
    logoB: "url(/logo-white.png)",
  },
];

// --- Match Card Component ---
interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const cardBg = match.isHighlighted ? COLORS.HIGHLIGHT_YELLOW : COLORS.CARD_DARK_BG;
  const cardText = match.isHighlighted ? "text-black" : "text-white";

  return (
    <div
      className={`rounded-xl overflow-hidden cursor-pointer w-[240px] h-[200px] flex-shrink-0 bg-[${cardBg}] ${cardText} border ${match.isHighlighted ? "" : "border-gray-800"} hover:bg-gray-800 transition-all duration-300 flex flex-col justify-between p-4 pt-6`}
    >
      {/* Logos */}
      <div className="flex justify-center items-center h-1/2">
        <div
          className="w-12 h-12 rounded-full border-2 border-gray-700"
          style={{
            backgroundImage: match.logoA,
            backgroundColor: match.isHighlighted ? "rgba(0,0,0,0.1)" : COLORS.LOGO_BG,
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <span className="text-xl font-extrabold mx-3">{match.isHighlighted ? "V" : "V"}</span>
        <div
          className="w-12 h-12 rounded-full border-2 border-gray-700"
          style={{
            backgroundImage: match.logoB,
            backgroundColor: match.isHighlighted ? "rgba(0,0,0,0.1)" : COLORS.LOGO_BG,
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Match Details */}
      <div className="text-center h-1/2 flex flex-col justify-end pb-2">
        <p
          className={`text-sm font-extrabold tracking-wider uppercase ${match.isHighlighted ? "text-black" : "text-white"}`}
        >
          {match.date}
        </p>
        <p
          className={`text-xs font-semibold mt-1 ${match.isHighlighted ? "text-gray-900" : "text-gray-400"}`}
        >
          {match.time}
        </p>
        <p
          className={`text-[10px] font-light mt-1 ${match.isHighlighted ? "text-gray-700" : `text-[${COLORS.TEXT_GRAY}]`}`}
        >
          {match.venue}
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---
const MatchSchedule: React.FC = () => {
  return (
    <div className="hero flex justify-center">
      <div className="relative z-20 max-w-7xl mx-auto p-4 sm:p-8 pt-10 text-white">
        {/* Header */}
        <div className="text-center mb-10 pt-10">
          <h1 className="text-3xl font-extrabold tracking-[5px] uppercase">UPCOMING MATCH</h1>
        </div>

        {/* Featured Match */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center space-x-10 mb-4">
            <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-600 shadow-lg" />
            <span className="text-4xl font-bold text-gray-300">V</span>
            <div className="w-20 h-20 bg-gray-700 rounded-full border-4 border-gray-600 shadow-lg" />
          </div>
          <p className="text-lg font-medium">
            6th November | <span className="text-yellow-400 font-bold">5:00 PM AST</span> | King
            Abdullah Sport City
          </p>
          <div className="flex space-x-6 text-center mt-6">
            {["02", "23", "20", "56"].map((value, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-xs uppercase mt-1">
                  {["DAYS", "HRS", "MIN", "SEC"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Match Cards */}
        <div className="flex overflow-x-auto space-x-5 pb-4 px-4 -mx-4">
          {matches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MatchSchedule;
