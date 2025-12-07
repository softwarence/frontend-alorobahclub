"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import Flicking, { FlickingEvents } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import img1 from "@/public/test-image/test1.jpg";
import img2 from "@/public/test-image/test2.jpg";
import img3 from "@/public/test-image/test3.jpg";

interface Slide {
  img: StaticImageData;
  title: string;
  desc: string;
}

const ChamferCard = ({ img, title, desc }: Slide) => (
  <div className="cut-corner relative w-[385px] rounded-xl overflow-hidden shadow-xl group">
    <div className="overflow-hidden">
      <Image
        src={img}
        alt={title}
        className="w-full h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
    <div className="absolute bottom-8 left-8 right-8 text-white z-10">
      <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
      <Button
        variant="link"
        className="mt-4 border-b-2 border-[#FFE000] p-0 text-sm font-medium text-[#FFE000] hover:bg-transparent rounded-none hover:no-underline"
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

  const ITEMS_PER_VIEW = 3; // number of slides visible at once
  const totalSlides = slides.length;

  const flickingRef = useRef<Flicking>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFlickingReady, setIsFlickingReady] = useState(false);

  // update yellow bar based on visible slides
  const updateProgress = (index: number) => {
    const visibleSlides = Math.min(ITEMS_PER_VIEW, totalSlides - index);
    const progressPercent = ((index + visibleSlides) / totalSlides) * 100;
    setProgress(progressPercent);
  };

  const handleReady = (e: FlickingEvents["ready"]) => {
    setIsFlickingReady(true);
    requestAnimationFrame(() => {
      const index = flickingRef.current?.index ?? 0;
      setCurrentIndex(index);
      updateProgress(index);
    });
  };

  const handleChanged = (e: FlickingEvents["changed"]) => {
    const index = e.index ?? 0;
    setCurrentIndex(index);
    updateProgress(index);
  };

  const movePrev = () => {
    const flicking = flickingRef.current;
    if (!flicking || flicking.animating || currentIndex <= 0) return;
    flicking.prev();
  };

  const moveNext = () => {
    const flicking = flickingRef.current;
    if (!flicking || flicking.animating || currentIndex >= totalSlides - ITEMS_PER_VIEW) return;
    flicking.next();
  };

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between pt-10 pl-6">
          <div></div>
          <div>
            <h2 className="text-5xl font-extrabold leading-tight">AL-ITTIHAD LATEST</h2>
            <Button variant="primary" className="py-6 px-6 mt-3">
              VIEW ALL NEWS
            </Button>
          </div>

          <div className="flex gap-4 mt-10 -mb-3.5">
            <Button
              variant="link"
              size="icon"
              onClick={movePrev}
              disabled={currentIndex <= 0 || !isFlickingReady}
              className="text-5xl text-[#FFE000] disabled:opacity-30 p-0 hover:no-underline"
            >
              ←
            </Button>

            <Button
              variant="link"
              size="icon"
              onClick={moveNext}
              disabled={currentIndex >= totalSlides - ITEMS_PER_VIEW || !isFlickingReady}
              className="text-5xl text-[#FFE000] disabled:opacity-30 p-0 hover:no-underline"
            >
              →
            </Button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full lg:w-[65%] pr-6">
          <Flicking
            ref={flickingRef}
            align="prev"
            circular={false}
            bound={true}
            moveType="snap"
            panelsPerView={ITEMS_PER_VIEW}
            gap={24}
            className="w-full flex"
            preventClickOnDrag
            onReady={handleReady}
            onChanged={handleChanged}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[calc((100% - ${(ITEMS_PER_VIEW - 1) * 24}px)/${ITEMS_PER_VIEW})] hover:cursor-pointer`}
              >
                <ChamferCard {...slide} />
              </div>
            ))}
          </Flicking>

          <Progress
            bgColor="bg-yellow-400"
            value={progress}
            className="h-1 mt-6 rounded-full bg-gray-800 transition-all"
          />
        </div>
      </div>
    </section>
  );
}
