"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import Flicking, { FlickingEvents } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import img1 from "@/public/test-image/test1.jpg";
import img2 from "@/public/test-image/test2.jpg";
import img3 from "@/public/test-image/test3.jpg";
import Link from "next/link";

interface Slide {
  img: StaticImageData;
  title: string;
  desc: string;
}

const ChamferCard = ({ img, title }: Slide) => (
  <div className="cut-corner relative w-full max-w-full md:max-w-[385px] rounded-xl overflow-hidden shadow-xl group">
    <div className="overflow-hidden">
      <Image
        src={img}
        alt={title}
        className="w-full h-[420px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

    <div className="absolute bottom-8 left-8 right-8 text-white z-10">
      <h3 className="text-lg md:text-xl font-bold line-clamp-2">{title}</h3>

      <Button
        variant="link"
        className="mt-4 border-b-2 border-[#FFE000] p-0 text-sm font-medium text-[#FFE000] hover:bg-transparent rounded-none hover:no-underline hover:cursor-pointer"
      >
        READ MORE
      </Button>
    </div>
  </div>
);

export default function LatestNewsSection() {
  const slides: Slide[] = [
    { img: img1, title: "AL-ITTIHAD ANNOUNCES SPONSORSHIP DEAL WITH TCL", desc: "Lorem ipsum" },
    { img: img2, title: "ORAL HEALTH PROGRAM LAUNCHED FOR YOUTH PLAYERS", desc: "Lorem ipsum" },
    { img: img3, title: "TIGER MEMBERS ATTEND FIRST-TEAM OPEN TRAINING", desc: "Lorem ipsum" },
    { img: img1, title: "AL-ITTIHAD LAUNCHES FOOTBALL SCHOOL AT AGS JEDDAH", desc: "Lorem ipsum" },
    { img: img2, title: "Upcoming Friendly Match Announcement", desc: "Lorem ipsum" },
    { img: img3, title: "Friendly Match Details Released", desc: "Lorem ipsum" },
  ];

  const totalSlides = slides.length;
  const flickingRef = useRef<Flicking>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isReady, setIsReady] = useState(false);

  // Calculate slides per view responsive
  const calculateItemsPerView = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  useEffect(() => {
    const update = () => setItemsPerView(calculateItemsPerView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const updateProgress = (index: number) => {
    const visibleSlides = Math.min(itemsPerView, totalSlides - index);
    const percent = ((index + visibleSlides) / totalSlides) * 100;
    setProgress(percent);
  };

  const handleReady = () => {
    setIsReady(true);
    const idx = flickingRef.current?.index ?? 0;
    setCurrentIndex(idx);
    updateProgress(idx);
  };

  const handleChanged = (e: FlickingEvents["changed"]) => {
    setCurrentIndex(e.index);
    updateProgress(e.index);
  };

  const movePrev = () => {
    const f = flickingRef.current;
    if (!f || f.animating || currentIndex <= 0) return;
    f.prev();
  };

  const moveNext = () => {
    const f = flickingRef.current;
    if (!f || f.animating || currentIndex >= totalSlides - itemsPerView) return;
    f.next();
  };

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="flex flex-col lg:flex-row gap-10 px-4 md:px-6">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between pt-4 md:pt-10">
          <div />

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight uppercase">
              al-orobah latest
            </h2>

            <Link href={"/news"}>
              <Button variant="primary" className="py-5 px-5 mt-4 md:mt-3">
                VIEW ALL NEWS
              </Button>
            </Link>
          </div>

          <div className="flex gap-4 mt-10 -mb-3.5">
            <Button
              variant="link"
              size="icon"
              onClick={movePrev}
              disabled={currentIndex <= 0 || !isReady}
              className="text-4xl md:text-5xl text-[#FFE000] disabled:opacity-30 p-0 hover:no-underline"
            >
              ←
            </Button>

            <Button
              variant="link"
              size="icon"
              onClick={moveNext}
              disabled={currentIndex >= totalSlides - itemsPerView || !isReady}
              className="text-4xl md:text-5xl text-[#FFE000] disabled:opacity-30 p-0 hover:no-underline"
            >
              →
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full lg:w-[65%] pr-0 lg:pr-6">
          <Flicking
            ref={flickingRef}
            align="prev"
            circular={false}
            bound={true}
            moveType="snap"
            className="w-full flex"
            preventClickOnDrag
            onReady={handleReady}
            onChanged={handleChanged}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  basis-[90vw]
                  md:basis-[85vw]
                  lg:basis-[calc(33.33%-16px)]
                  mr-3
                "
              >
                <ChamferCard {...slide} />
              </div>
            ))}
          </Flicking>

          <Progress
            value={progress}
            className="h-1 mt-6 rounded-full bg-gray-800 [&>div]:bg-yellow-400"
          />
        </div>
      </div>
    </section>
  );
}
