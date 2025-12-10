import HeroBanner from "@/components/home/HeroBanner";
import LatestNewsSection from "../../components/home/LatestNewsSection";

import MatchSchedule from "@/components/home/MatchSchedule";
import OfferSlider from "../../components/home/OfferSlider";
import ShopBanner from "../../components/home/ShopBanner";

import ProductCardSection from "@/components/home/ProductCardSection";
import TeamSection from "../../components/home/TeamSection";
import MemberShipBanner from "@/components/home/MemberShipBanner";
import SignUpFrom from "../../components/home/SignUpFrom";

import SignUpBanner from "../../components/home/SignUpBanner";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroBanner></HeroBanner>
      </div>
      <LatestNewsSection></LatestNewsSection>
      <SignUpBanner></SignUpBanner>
      <MatchSchedule></MatchSchedule>
      <OfferSlider></OfferSlider>
      <ShopBanner></ShopBanner>
      <ProductCardSection></ProductCardSection>
      <TeamSection></TeamSection>
      <MemberShipBanner></MemberShipBanner>
      <SignUpFrom></SignUpFrom>
    </>
  );
}
