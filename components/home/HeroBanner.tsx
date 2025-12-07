"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import img1 from "@/public/test-image/t1.jpg";
import img2 from "@/public/test-image/t4.jpg";
import img3 from "@/public/test-image/t3.jpg";

const slides = [
  {
    image: img1,
    title: "Discover Al-Orobah's New Era",
    subtitle: "Oral Health Program Launched for Youth Players",
    desc: "In partnership with IMC, Al-Ittihad Club delivers preventive dental care to support player health and performance.",
  },
  {
    image: img2,
    title: "This is a place Hold Your Breath",
    subtitle: "Training intensity rises as the squad prepares.",
    desc: "Experience the spirit behind every matchday.",
  },
  {
    image: img3,
    title: '25/26 third kit "this is a place"',
    subtitle: "Exclusive behind-the-scenes coverage.",
    desc: "A new era of Al-Orobah football begins.",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const duration = 10000; // 10s

  const goTo = (i: number) => {
    setIndex(i);
    setProgress(0);
    progressRef.current = 0;
  };

  useEffect(() => {
    const startTime = Date.now() - (progressRef.current * duration) / 100;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed >= duration) {
        goTo((index + 1) % slides.length);
      } else {
        animationRef.current = requestAnimationFrame(tick);
      }
    };

    animationRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      progressRef.current = progress;
    };
  }, [index]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />

      <div className="relative h-full w-full">
        <Image
          src={slides[index].image}
          alt={slides[index].title}
          fill
          className="object-cover transition-opacity duration-700"
        />

        {/* Text overlay */}
        <div
          className="
            absolute
            bottom-16 left-6
            md:bottom-20 md:left-10
            lg:bottom-23 lg:left-12
            xl:max-w-2xl max-w-md
            space-y-3 drop-shadow-xl z-10
          "
        >
          <Card className="bg-transparent border-0 p-0">
            <CardContent className="p-0">
              <p className="text-white/60 opacity-90 text-sm md:text-base">{slides[index].desc}</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white">
                {slides[index].subtitle}
              </h2>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Progress bars */}
      <div
        className="
          absolute
          bottom-5 left-1/2 -translate-x-1/2
          flex gap-3
          md:bottom-10 md:left-12 md:translate-x-0 md:gap-5
          z-40
        "
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="cursor-pointer flex flex-col items-start max-w-[110px] md:max-w-[145px] xl:max-w-[165px]"
            onClick={() => goTo(i)}
          >
            <Progress
              value={i === index ? progress : i < index ? 100 : 0}
              className="w-full h-[2px] rounded bg-white/30 [&>div]:bg-[#FFE000]"
            />
            <div
              className={`font-bold text-[11px] md:text-[14px] uppercase mt-1 truncate w-full ${
                i === index ? "text-[#FFE000]" : "text-white/50"
              }`}
              title={slide.title}
            >
              {slide.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
