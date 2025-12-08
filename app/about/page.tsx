import AboutHeader from "@/components/about/AboutHeader";
import FoundingStorySection from "@/components/about/FoundingStorySection";
import ClubHeadquartersSection from "./../../components/about/ClubHeadquartersSection";
import SponsorsCarousel from "@/components/home/SponsorsCarousel";
import DifferentSportsSection from "@/components/about/DifferentSportsSection";

const AboutPage = () => {
  return (
    <>
      <AboutHeader></AboutHeader>
      <FoundingStorySection></FoundingStorySection>
      <ClubHeadquartersSection></ClubHeadquartersSection>
      <DifferentSportsSection></DifferentSportsSection>
      <SponsorsCarousel></SponsorsCarousel>
    </>
  );
};

export default AboutPage;
