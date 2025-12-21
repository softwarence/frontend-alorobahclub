import ImageSection from "@/components/news/ImageSection";

import CardGrid from "@/components/news/CardGrid";

import Image1 from "@/public/assets/Image1.svg";
import Image2 from "@/public/assets/Image2.svg";

function News() {
  const items = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      image: "/assets/news/img1.svg",
      link: "/asses/news/1",
    },
    {
      id: 2,
      title: "Scandinavian Interior Design",
      image: "/assets/news/img2.svg",
      link: "/asses/news/2",
    },
    {
      id: 3,
      title: "Nature-Friendly Architecture",
      image: "/assets/news/img3.svg",
      link: "/asses/news/3",
    },
    {
      id: 4,
      title: "Minimalist Living Room Setup",
      image: "/assets/news/img4.svg",
      link: "/asses/news/4",
    },
    {
      id: 5,
      title: "Elegant Bedroom Inspiration",
      image: "/assets/news/img5.svg",
      link: "/asses/news/5",
    },
    {
      id: 6,
      title: "Creative Workspace Ideas",
      image: "/assets/news/img6.svg",
      link: "/asses/news/6",
    },
    {
      id: 7,
      title: "Creative Workspace Ideas",
      image: "/assets/news/img7.svg",
      link: "/asses/news/6",
    },
    {
      id: 8,
      title: "Creative Workspace Ideas",
      image: "/assets/news/img8.svg",
      link: "/asses/news/6",
    },
  ];
  return (
    <div className="pt-10 md:pt-15 bg-[#001317]">
      <CardGrid items={items}></CardGrid>
      <ImageSection image={Image2}></ImageSection>
      <CardGrid items={items}></CardGrid>
      <ImageSection image={Image1}></ImageSection>
      <div className="pb-5">
        <CardGrid items={items.slice(6, 8)}></CardGrid>
      </div>
    </div>
  );
}

export default News;
