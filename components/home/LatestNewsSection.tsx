"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import img1 from "@/public/test-image/test1.jpg";
import img2 from "@/public/test-image/test2.jpg";
import img3 from "@/public/test-image/test3.jpg";

// -----------------------------
// Types
// -----------------------------
interface Slide {
  img: StaticImageData;
  title: string;
  desc: string;
}

// -----------------------------
// Card Component
// -----------------------------
const ChamferCard = ({ img, title, desc }: Slide) => (
  <div className="relative w-full rounded-xl overflow-hidden shadow-xl group cut-corner">
    {/* Image with scale on hover */}
    <div className="overflow-hidden">
      <Image
        src={img}
        alt={title}
        className="w-full h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

    {/* Text content at bottom center */}
    <div className="absolute bottom-8 pl-2 left-1/2 -translate-x-1/2 w-[90%] text- text-white z-10">
      <h3 className="text-lg md:text-xl font-bold line-clamp-2">{title}</h3>
      <p className="mt-2 inline-block text-[#FFE000] font-medium text-sm md:text-base border-b-2 pb-1 border-[#FFE000] cursor-pointer">
        READ MORE
      </p>
    </div>
  </div>
);

// -----------------------------
// Latest News Carousel
// -----------------------------
export default function LatestNewsSection() {
  const slides: Slide[] = [
    {
      img: img1,
      title: "Placeholder title for carousel banner",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      img: img2,
      title: "Late goal seals victory in tense encounter",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      img: img3,
      title: "25/26 Third Kit: The strength of AL-Ittihad",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      img: img1,
      title: "Upcoming Friendly Match Announcement",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      img: img2,
      title: "Player of the Month: Highlights & Awards",
      desc: "Lorem ipsum dolor sit amet",
    },
  ];

  const ITEMS_PER_VIEW = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll to specific slide
  const scrollToIndex = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.children[0] as HTMLElement;
    container.scrollTo({
      left: index * (card.offsetWidth + 16),
      behavior: "smooth",
    });
  };

  useEffect(() => scrollToIndex(currentIndex), [currentIndex]);

  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - ITEMS_PER_VIEW));

  const progressWidth = ((currentIndex + ITEMS_PER_VIEW) / slides.length) * 100;

  return (
    <section className="w-full py-12 px-6 bg-[#0A0E15] text-white">
      <div className="flex flex-col md:flex-row gap-10 mx-auto items-start md:items-stretch">
        {/* Left Panel */}
        <div className="md:w-5/12 flex flex-col justify-between">
          <div></div>
          <div>
            <h2 className="text-4xl font-bold mb-4">AL-OROBAH LATEST</h2>
            <Button className="bg-[#FFE000] text-black hover:bg-yellow-500 mb-6 w-fit">
              VIEW ALL NEWS
            </Button>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 border border-gray-600 ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed border-gray-800"
                  : "hover:border-[#FFE000]"
              }`}
            >
              &#8592;
            </Button>
            <Button
              onClick={nextSlide}
              disabled={currentIndex >= slides.length - ITEMS_PER_VIEW}
              className={`w-10 h-10 border border-gray-600 ${
                currentIndex >= slides.length - ITEMS_PER_VIEW
                  ? "opacity-50 cursor-not-allowed border-gray-800"
                  : "hover:border-[#FFE000]"
              }`}
            >
              &#8594;
            </Button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="md:w-9/12 space-y-5">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden -ms-overflow-style-none scrollbar-none"
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="flex-shrink-0 md:basis-1/3">
                <ChamferCard {...slide} />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full px-2">
            <div className="h-1 w-full bg-gray-800 rounded-full">
              <div
                className="h-1 bg-[#FFE000] rounded-full transition-all duration-300"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
