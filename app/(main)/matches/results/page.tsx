import MatchNavItems from "@/components/matches/MatchNavItems";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import img1 from "@/public/assets/match/Al-Shabab Logo.svg";
import img2 from "@/public/assets/match/logo.svg";
import img3 from "@/public/assets/match/Al-Riyadh Logo.svg";
import img4 from "@/public/assets/match/Al-Hazm Logo.svg";
import img5 from "@/public/assets/match/Group 13.svg";
import img6 from "@/public/assets/match/Vector.svg";
import img7 from "@/public/assets/match/AFC-Champions-League-Elite-Logo.svg";
import img8 from "@/public/assets/match/AFC-Champions-League-Elite-Logo.svg";
import img9 from "@/public/assets/match/AFC-Champions-League-Elite-Logo.svg";
import img10 from "@/public/assets/match/Saudi-Pro-League-Logo.svg";
import Image from "next/image";

export const leagueStandings = Array.from({ length: 25 }, (_, i) => {
  const logos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const heroImages = [img5, img2, img3, img4, img1, img6, img7, img8, img9, img10];
  const lastFiveOptions = ["W", "D", "L"];

  const getRandomLastFive = () =>
    Array.from({ length: 5 }, () => lastFiveOptions[Math.floor(Math.random() * 3)]);

  return {
    rank: i + 1,
    club: `Team ${i + 1}`,
    logo: logos[i % logos.length],
    p: 34,
    w: Math.floor(Math.random() * 30),
    d: Math.floor(Math.random() * 5),
    l: Math.floor(Math.random() * 10),
    gf: Math.floor(Math.random() * 100),
    ga: Math.floor(Math.random() * 50),
    gd: Math.floor(Math.random() * 50),
    points: Math.floor(Math.random() * 100),
    lastFive: getRandomLastFive(),
    image: heroImages[i % heroImages.length],
  };
});
export default async function ResultsPage() {
  return (
    <>
      <MatchNavItems></MatchNavItems>
      <div className="bg-[#001317]">
        <div>
          <div className="rounded-md border border-slate-800 bg-[#001317] p-4 text-white md:px-10">
            <h2 className="mb-4 text-2xl pt-5 pb-1 font-bold uppercase tracking-wider">
              Roshan Saudi League Standings
            </h2>
            <Table className="">
              <TableHeader className="hover:bg-transparent">
                <TableRow className="hover:bg-transparent border-y border-white">
                  <TableHead className="w-12 text-white/70 text-[15px] font-thin">Rank</TableHead>
                  <TableHead className="text-white/70 text-[15px] font-thin">Club</TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    P
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    W
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    D
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    L
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    GF
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    GA
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    GD
                  </TableHead>
                  <TableHead className="text-center text-white/70 text-[15px] font-thin">
                    Points
                  </TableHead>
                  <TableHead className="text-right pr-10 text-white/70 text-[15px] font-thin">
                    Last 5
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leagueStandings.map((team) => (
                  <TableRow
                    key={team.rank}
                    className="border-slate-800 hover:bg-slate-900/50 h-18 text-lg"
                  >
                    <TableCell className="">
                      <span className="flex items-center gap-2">
                        <span className="font-thin text-white/70">{team.rank}</span>
                        <span className="h-3 w-3 rounded-full bg-white"></span>
                      </span>
                    </TableCell>
                    <TableCell className="font-semibold">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative">
                          <Image className="w-full h-full" src={team.image} fill alt=""></Image>
                        </div>
                        <p className="font-thin text-xl text-white/70">{team.club}</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">{team.p}</TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">{team.w}</TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">{team.d}</TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">{team.l}</TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">
                      {team.gf}
                    </TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">
                      {team.ga}
                    </TableCell>
                    <TableCell className="text-center font-thin text-white/70 ">
                      {team.gd}
                    </TableCell>
                    <TableCell className="text-center text-2xl font-bold">{team.points}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end items-center gap-1">
                        {team.lastFive.map((result, i) => (
                          <div
                            key={i}
                            className={`h-4 w-4 ${
                              result === "W"
                                ? "bg-green-500"
                                : result === "D"
                                  ? "bg-slate-400"
                                  : "bg-red-500"
                            }`}
                          />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
