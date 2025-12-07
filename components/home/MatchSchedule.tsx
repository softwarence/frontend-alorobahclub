"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Banner from "@/public/assets/match/Banner.svg";
import V_white_Logo from "@/public/assets/match/V_white.svg";

import { matches } from "./data";
import MatchCard from "./MatchCard";

// ShadCN Components
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function MatchSchedule() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const totalSlides = matches.length;
  const steps = Math.max(totalSlides - slidesPerView + 1, 1);

  const progressPercent = Math.min(((activeIndex + 1) / steps) * 100, 100);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  const isEnd = activeIndex >= steps - 1;

  return (
    <div className="relative -z-10 flex justify-center py-20 bg-black text-white overflow-hidden">
      {/* Background */}
      <Image src={Banner} alt="Match Schedule Background" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/95 via-black/70 to-transparent pointer-events-none" />

      <div className="relative p-4 w-full">
        {/* Header */}
        <div className="text-center mb-7 pt-10">
          <h1 className="text-5xl font-extrabold uppercase">UPCOMING MATCH</h1>
        </div>

        {/* Featured (static example) */}
        {matches[0] && (
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center space-x-12 mb-5">
              <div className="w-24 h-24 rounded-full">
                <Image
                  src={matches[0].logoA}
                  alt="Team A"
                  className="w-full h-full object-contain"
                />
              </div>
              <Image src={V_white_Logo} alt="VS" className="w-10 h-10" />
              <div className="w-24 h-24 rounded-full">
                <Image
                  src={matches[0].logoB}
                  alt="Team B"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-md font-medium mb-5">
              6th November | <span>5:00 PM AST</span> | King Abdullah Sport City
            </p>
          </div>
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
              640: { slidesPerView: 2.2, spaceBetween: 20 }, // partial next card visible
              1024: { slidesPerView: 5.2, spaceBetween: 20 }, // desktop
            }}
            slidesPerView={5.2} // initial for large screens
            spaceBetween={40} // controls the gap between cards
            modules={[Navigation]}
            navigation={false}
            loop={false}
          >
            {matches.map((match, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <MatchCard match={match} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center gap-5 px-10">
            {/* Navigation Buttons */}
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
            {/* ShadCN Progress Bar */}
            <Progress
              bgColor="bg-yellow-400"
              value={progressPercent}
              className="mt-3 h-[2px] rounded-full transition-[width] duration-500 ease-in-out "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
