import HeroBanner from "@/components/home/HeroBanner";
import LatestNewsSection from "./../components/home/LatestNewsSection";
import SignUpSection from "@/components/home/SignUpSection";
import Link from "next/link";
import MatchSchedule from "@/components/home/MatchSchedule";

export default function Home() {
  return (
    <>
      <HeroBanner></HeroBanner>
      <LatestNewsSection></LatestNewsSection>
      <div className="bg-[#0A0E15]">
        <Link href="#">
          <SignUpSection></SignUpSection>
        </Link>
      </div>
      <MatchSchedule></MatchSchedule>
    </>
  );
}
