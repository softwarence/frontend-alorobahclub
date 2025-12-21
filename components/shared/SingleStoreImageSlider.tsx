import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image, { StaticImageData } from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import h1_image from "@/public/assets/store/l1.svg";
import h2_image from "@/public/assets/store/l2.svg";
import h3_image from "@/public/assets/store/l3.svg";

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

const SingleStoreImageSlider = () => {
  const [mainIndex, setMainIndex] = useState(0);

  // 1. Create a ref for the thumbnail container
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const mainImage = useMemo(() => PRODUCT_DATA.images[mainIndex], [mainIndex]);

  // 2. Auto-scroll logic
  useEffect(() => {
    if (!thumbContainerRef.current) return;

    const container = thumbContainerRef.current;
    const selectedThumb = container.children[mainIndex] as HTMLElement;

    if (selectedThumb) {
      selectedThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest", // keeps it from jumping vertically
        inline: "center", // centers the thumbnail in the horizontal view
      });
    }
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
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
      {/* MAIN IMAGE DISPLAY */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#E5E5E5] rounded-sm group">
        <Image priority src={mainImage} alt={PRODUCT_DATA.name} fill className="object-cover" />

        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 hover:text-white bg-black hover:bg-black/80 rounded-full w-10 h-10 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white bg-black hover:bg-black/80  text-white rounded-full w-10 h-10 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* THUMBNAILS - Added Ref and centered snap */}
      <div
        ref={thumbContainerRef}
        className="flex flex-row gap-3 overflow-x-auto pb-2 hide-scrollbar snap-x snap-mandatory"
      >
        {PRODUCT_DATA.images.map((img, index) => (
          <Button
            key={index}
            onClick={() => setMainIndex(index)}
            className={`
              relative flex-shrink-0 w-20 h-20 overflow-hidden border-2 transition-all snap-center
              ${
                mainIndex === index
                  ? "border-black scale-105"
                  : "border-transparent hover:border-gray-300"
              }
            `}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SingleStoreImageSlider;
