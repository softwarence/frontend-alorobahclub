// data.ts

import AlShabab from "@/public/assets/match/Al-Shabab Logo.svg";
import MainLogo from "@/public/assets/match/logo.svg";

import AlRiyadh from "@/public/assets/match/Al-Riyadh Logo.svg";
import AlHazm from "@/public/assets/match/Al-Hazm Logo.svg";
import Group13 from "@/public/assets/match/Group 13.svg";
import Vector from "@/public/assets/match/Vector.svg";

// League Logos
import AFC from "@/public/assets/match/AFC-Champions-League-Elite-Logo.svg";
import KingCup from "@/public/assets/match/AFC-Champions-League-Elite-Logo.svg";
import SuperCup from "@/public/assets/match/AFC-Champions-League-Elite-Logo.svg";

// RSL Logo
import SaudiLeague from "@/public/assets/match/Saudi-Pro-League-Logo.svg";

// --- Match Type ---
export interface Match {
  date: string;
  time: string;
  venue: string;
  isHighlighted: boolean;
  logoA: string;
  logoB: string;
  leagueLogo: string;
}

// --- Match Data ---
export const matches: Match[] = [
  {
    date: "21ST NOVEMBER",
    time: "1:45 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: true,
    logoA: MainLogo,
    logoB: AlRiyadh,
    leagueLogo: SaudiLeague,
  },
  {
    date: "20TH DECEMBER",
    time: "5:30 PM AST",
    venue: "Al Hazm Club Stadium",
    isHighlighted: false,
    logoA: MainLogo,
    logoB: AlHazm,
    leagueLogo: SaudiLeague,
  },
  {
    date: "23RD DECEMBER",
    time: "6:15 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: Group13,
    logoB: Vector,
    leagueLogo: AFC,
  },
  {
    date: "27TH DECEMBER",
    time: "5:30 PM AST",
    venue: "King Abdullah Sport City",
    isHighlighted: false,
    logoA: Group13,
    logoB: AlShabab,
    leagueLogo: SaudiLeague,
  },

  // NEW MATCHES
  {
    date: "29TH DECEMBER",
    time: "7:45 PM AST",
    venue: "Al Jawhara Stadium",
    isHighlighted: false,
    logoA: MainLogo,
    logoB: AlRiyadh,
    leagueLogo: KingCup,
  },
  {
    date: "2ND JANUARY",
    time: "8:00 PM AST",
    venue: "Prince Faisal Stadium",
    isHighlighted: false,
    logoA: AlHazm,
    logoB: AlShabab,
    leagueLogo: SuperCup,
  },
  {
    date: "5TH JANUARY",
    time: "4:30 PM AST",
    venue: "King Saudi Stadium",
    isHighlighted: false,
    logoA: MainLogo,
    logoB: Group13,
    leagueLogo: AFC,
  },
  {
    date: "11TH JANUARY",
    time: "6:50 PM AST",
    venue: "Prince Abdullah Stadium",
    isHighlighted: false,
    logoA: Vector,
    logoB: AlRiyadh,
    leagueLogo: KingCup,
  },
];
