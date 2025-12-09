import Image from "next/image";

import banner from "@/public/assets/match/Upcoming_Match_Banner.svg";
import UpComingMatchDetails from "./../shared/UpcommingMatchDetails";

const MatchHeroComponent = () => {
  return (
    <div className="relative min-h-[50vh] md:h-auto">
      <Image src={banner} alt="Upcoming Match Banner" fill className="object-cover" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#001317] opacity-100"></div>
      <div className="absolute inset-0 bg-[#001317] opacity-30"></div>

      {/* Content Layer (keep as is) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full text-white flex justify-center z-10">
        <UpComingMatchDetails />
      </div>
    </div>
  );
};

export default MatchHeroComponent;
