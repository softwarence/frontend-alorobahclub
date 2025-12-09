import MatchCard from "@/components/home/MatchCard";
import { Match } from "../home/data";

interface MatchScheduleProps {
  monthAndDate: string;
  matches: Match[];
}
const MatchScheduleCardContainer = ({ matches, monthAndDate }: MatchScheduleProps) => {
  return (
    <div className="bg-[#001317] pb-3 md:pb-0">
      <div className="max-w-[1800px] mx-auto md:px-5 px-1 py-5 text-white">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold md:pb-6 pb-3 px-3 md:px-0">
          {monthAndDate}
        </h1>
        <div className="grid gap-x-2 gap-y-3 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-items-center px-2">
          {matches.map((match, idx) => (
            <div key={idx} className="w-full">
              <MatchCard bgColor={"bg-[#001E24]"} isYellow={false} match={match} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchScheduleCardContainer;
