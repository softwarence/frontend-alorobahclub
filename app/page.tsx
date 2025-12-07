import HeroBanner from "@/components/home/HeroBanner";
import LatestNewsSection from "./../components/home/LatestNewsSection";
import Header from "@/components/shared/Header";
import SignUpSection from "@/components/home/SignUpSection";
import Link from "next/link";
import MatchSchedule from "@/components/home/MatchSchedule";
import OfferSlider from "./../components/home/OfferSlider";
import ShopBanner from "./../components/home/ShopBanner";

import ProductCardSection from "@/components/home/ProductCardSection";
import TeamSection from "./../components/home/TeamSection";
import MemberShipBanner from "@/components/home/MemberShipBanner";
import SignUpFrom from "./../components/home/SignUpFrom";
import SponsorsCarousel from "@/components/home/SponsorsCarousel";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header></Header>
        <HeroBanner></HeroBanner>
      </div>
      <LatestNewsSection></LatestNewsSection>
      <div className="bg-[#0A0E15]">
        <Link href="#">
          <SignUpSection></SignUpSection>
        </Link>
      </div>
      <MatchSchedule></MatchSchedule>
      <OfferSlider></OfferSlider>
      <ShopBanner></ShopBanner>
      <ProductCardSection></ProductCardSection>
      <TeamSection></TeamSection>
      <MemberShipBanner></MemberShipBanner>
      <SignUpFrom></SignUpFrom>
      <SponsorsCarousel></SponsorsCarousel>
      <Footer></Footer>
    </>
  );
}
