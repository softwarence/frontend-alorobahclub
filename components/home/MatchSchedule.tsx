"use client";

import { useEffect, useRef, useState } from "react";
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
        <div className="text-center mb-7 pt-10">
          <h1 className="md:text-5xl text-3xl font-extrabold uppercase">UPCOMING MATCH</h1>
        </div>

        {/* Featured Section */}
        {matches[0] && (
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center md:space-x-12 space-x-6  mb-5">
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

            <p className="md:text-md text-sm font-medium mb-3">
              6th November | <span>5:00 PM AST</span> | King Abdullah Sport City
            </p>

            {/* Countdown */}
            <div className="flex space-x-8 text-center mb-3">
              {["02", "23", "20", "56"].map((value, i) => (
                <div key={i} className="flex flex-col items-center p-2 gap-0.5">
                  <span className="text-4xl font-bold text-white">{value}</span>
                  <span className="text-sm text-gray-300">
                    {["days", "hours", "minutes", "secs"][i]}
                  </span>
                </div>
              ))}
            </div>
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
              <SwiperSlide key={idx} className="h-auto ml-2">
                <MatchCard match={match} />
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
