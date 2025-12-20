import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image, { StaticImageData } from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import h1_image from "@/public/assets/store/h1.svg";
import h2_image from "@/public/assets/store/h2.svg";
import h3_image from "@/public/assets/store/h3.svg";
import Link from "next/link";

interface Color {
  name: string;
  hex: string;
}
interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
  details: string;
  stock: number;
  images: StaticImageData[];
  sizes: string[];
  colors: Color[];
  shippingNote: string;
}

const PRODUCT_DATA: Product = {
  id: 101,
  name: "Al-Orobah FC Club Hoodie",
  price: 399,
  currency: "SAR",
  description: "Everyday comfort. Timeless club pride.",
  details:
    "The Al-Orobah FC Club Hoodie is designed for leisure, comfort, and effortless wear.    Soft fabrics, clean cuts, and subtle premium detailing make it a go-to hoodie for any club supporter.",
  stock: 2,
  images: [h1_image, h2_image, h3_image, h2_image, h1_image, h2_image, h3_image, h2_image],
  sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
  colors: [
    { name: "Turquoise", hex: "#008080" },
    { name: "Navy Blue", hex: "#000080" },
  ],
  shippingNote: "Tax included. Shipping calculated at checkout.",
};

interface SizeButtonProps {
  size: string;
  isSelected: boolean;
  onSelect: () => void;
}
const SizeButton: React.FC<SizeButtonProps> = React.memo(({ size, isSelected, onSelect }) => (
  <Button
    variant="outline"
    onClick={onSelect}
    aria-pressed={isSelected}
    className={`rounded-none min-w-[70px] h-[50px] text-sm font-medium transition-all p-0
      ${
        isSelected
          ? "bg-white text-black border-white hover:bg-gray-100 hover:text-black"
          : "text-gray-300 border-gray-700 hover:border-gray-500 bg-transparent hover:bg-gray-300 hover:text-black"
      }
    `}
  >
    {size}
  </Button>
));
SizeButton.displayName = "SizeButton";
{
  /* TRUST BADGES / SERVICES */
}
const StoreImageSlider = () => {
  const [mainIndex, setMainIndex] = useState(0);

  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const mainImage = useMemo(() => PRODUCT_DATA.images[mainIndex], [mainIndex]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (!thumbContainerRef.current) return;

    const container = thumbContainerRef.current;
    if (mainIndex < 0 || mainIndex >= container.children.length) return;

    const selectedThumb = container.children[mainIndex] as HTMLElement;

    selectedThumb?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }, [mainIndex]);
  const nextImage = useCallback(
    () => setMainIndex((i) => (i + 1) % PRODUCT_DATA.images.length),
    []
  );
  const prevImage = useCallback(
    () => setMainIndex((i) => (i - 1 + PRODUCT_DATA.images.length) % PRODUCT_DATA.images.length),
    []
  );

  return (
    <>
      <div className="lg:sticky lg:top-24 lg:self-start flex flex-col-reverse md:flex-row gap-6 w-full">
        {/* THUMBNAILS */}
        <div
          ref={thumbContainerRef}
          className="
              flex flex-row space-x-3 overflow-x-scroll snap-x snap-mandatory
              lg:flex-col lg:space-x-0 lg:space-y-3 lg:overflow-y-scroll
              lg:w-24 xl:w-30 lg:max-h-[600px] pb-2 lg:pb-0 hide-scrollbar
            "
        >
          {PRODUCT_DATA.images.map((img, index) => (
            <Button
              key={index}
              onClick={() => setMainIndex(index)}
              aria-label={`Select image ${index + 1}`}
              className={`
                  relative flex-shrink-0 w-20 h-20 md:w-full md:h-30 snap-start
                  p-0 overflow-hidden border-2 rounded transition-all duration-200
                  ${
                    mainIndex === index
                      ? "border-teal-400 ring-2 ring-teal-400"
                      : "border-gray-800 hover:border-gray-500"
                  }
                `}
            >
              <Image
                src={img}
                alt={`${PRODUCT_DATA.name} thumbnail ${index + 1}`}
                fill
                sizes="10vw"
                className="object-cover"
              />
            </Button>
          ))}
        </div>

        {/* MAIN IMAGE DISPLAY */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:flex-1 overflow-hidden shadow-2xl rounded group">
          <Link href={"/store/1"}>
            <Image
              priority
              src={mainImage}
              alt={PRODUCT_DATA.name}
              fill
              className="object-cover transition-transform duration-300"
            />
          </Link>
          {/* ARROWS */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black hover:bg-black/70 text-white rounded-full p-2 opacity-100  lg:group-hover:opacity-100 transition duration-300 z-10"
          >
            <ChevronLeft className="text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black hover:bg-black/70 text-white rounded-full p-2 opacity-100  lg:group-hover:opacity-100 transition duration-300 z-10"
          >
            <ChevronRight className="text-white" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default StoreImageSlider;
