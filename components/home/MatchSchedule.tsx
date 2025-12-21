"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Banner from "@/public/assets/match/Banner.svg";

import { matches } from "./data";
import MatchCard from "./MatchCard";

// ShadCN Components
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import UpComingMatchDetails from "../shared/UpcommingMatchDetails";

export default function MatchSchedule() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5.2);

  const totalSlides = matches.length;
  const steps = Math.max(totalSlides - slidesPerView + 1, 1);
  const progressPercent = Math.min(((activeIndex + 1) / steps) * 100, 100);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  const isEnd = activeIndex >= steps - 1;

  // Detect responsive slidesPerView (NO STYLE CHANGE)
  const detectSlides = () => {
    if (typeof window === "undefined") return 5.2;
    if (window.innerWidth < 640) return 1.2; // mobile
    if (window.innerWidth < 1024) return 2.2; // tablet
    return 5.2; // desktop
  };

  useEffect(() => {
    const update = () => setSlidesPerView(detectSlides());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="relative -z-10 flex justify-center py-20 bg-black text-white overflow-hidden">
      {/* Background */}
      <Image src={Banner} alt="Match Schedule Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-tl from-black/95 via-black/70 to-transparent pointer-events-none" />

      <div className="relative p-4 w-full">
        {/* Header */}

        {/* Featured Section */}
        {matches[0] && (
          <>
            <UpComingMatchDetails></UpComingMatchDetails>
          </>
        )}

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setSlidesPerView(swiper.params.slidesPerView as number);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 10 }, // mobile
              640: { slidesPerView: 2.2, spaceBetween: 20 }, // tablet
              1024: { slidesPerView: 5.2, spaceBetween: 40 }, // desktop
            }}
            slidesPerView={5.2}
            spaceBetween={40} // default for desktop
            modules={[Navigation]}
            navigation={false}
            loop={false}
          >
            {matches.map((match, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <MatchCard bgColor="bg-[#001317]" isYellow={idx === 0} match={match} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex items-center gap-5 px-10">
            <div className="flex justify-center gap-6 pr-10">
              <Button
                onClick={goPrev}
                disabled={activeIndex === 0}
                variant="link"
                size="icon"
                className="text-5xl text-[#FFE000] disabled:opacity-30 p-0 hover:no-underline"
              >
                ←
              </Button>

              <Button
                onClick={goNext}
                disabled={isEnd}
                variant="link"
                size="icon"
                className="text-5xl text-[#FFE000] disabled:opacity-30 p-0 hover:no-underline"
              >
                →
              </Button>
            </div>

            {/* Progress Bar */}
            <Progress
              bgColor="bg-yellow-400"
              value={progressPercent}
              className="mt-3 h-0.5 rounded-full transition-[width] duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
