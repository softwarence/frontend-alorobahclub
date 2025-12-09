import SponsorsCarousel from "@/components/home/SponsorsCarousel";
import ImageSection from "@/components/news/ImageSection";
import SecondImageSection from "@/components/news/SecondImageSection";
import CardGrid from "@/components/news/CardGrid";
import SecondCardGrid from "@/components/news/SecondCardGrid";

function News() {
  return (
    <div className=" pt-40 bg-[#001317]">
      <CardGrid></CardGrid>
      <SecondImageSection></SecondImageSection>
      <CardGrid></CardGrid>
      <ImageSection></ImageSection>
      <SecondCardGrid></SecondCardGrid>
      <SponsorsCarousel></SponsorsCarousel>
    </div>
  );
}

export default News;
