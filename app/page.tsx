import HeroBanner from "@/components/home/HeroBanner";
import LatestNewsSection from "./../components/home/LatestNewsSection";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header></Header>
        <HeroBanner></HeroBanner>
      </div>
      <LatestNewsSection></LatestNewsSection>
    </>
  );
}
