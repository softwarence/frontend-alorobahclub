"use client";

// FIX: Explicitly import React for React.memo and React.FC
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assuming these paths are correct
import h1_image from "@/public/assets/store/h1.svg";
import h2_image from "@/public/assets/store/h2.svg";
import h3_image from "@/public/assets/store/h3.svg";
import { Progress } from "../ui/progress";

import orderIcon from "@/public/assets/order-box-icon.svg";
import dolorIcon from "@/public/assets/dollar-icon.svg";
import headingIcon from "@/public/assets/heading-icon.svg";
import share from "@/public/assets/share-icon.svg";
import questionIcon from "@/public/assets/frame-icon.svg";
import { SubscriptionPopup } from "../shared/SubscribePopup";

// --- INTERFACE DEFINITIONS ---
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

// --- PRODUCT DATA  ---
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

// --- SUB-COMPONENT: Size Button ---
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
const trustItems = [
  { icon: orderIcon, label: "Orders over $50 ship free" },
  { icon: dolorIcon, label: "30-day return" },
  { icon: headingIcon, label: "Heading" },
];

const actionItems = [
  { icon: share, label: "Share item" },
  { icon: questionIcon, label: "Ask a question" },
];

// --- MAIN COMPONENT ---
export default function ProductDetailsContainer() {
  const [mainIndex, setMainIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(PRODUCT_DATA.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(PRODUCT_DATA.colors[0].name);
  const [quantity, setQuantity] = useState(1);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Ref for the thumbnail container to allow programmatic scrolling
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  // --- Handlers ---
  const nextImage = useCallback(
    () => setMainIndex((i) => (i + 1) % PRODUCT_DATA.images.length),
    []
  );
  const prevImage = useCallback(
    () => setMainIndex((i) => (i - 1 + PRODUCT_DATA.images.length) % PRODUCT_DATA.images.length),
    []
  );
  const increaseQty = useCallback(() => setQuantity((q) => q + 1), []);
  const decreaseQty = useCallback(() => setQuantity((q) => Math.max(1, q - 1)), []);

  // UseMemo for computed values
  const mainImage = useMemo(() => PRODUCT_DATA.images[mainIndex], [mainIndex]);
  const isOutOfStock = useMemo(() => PRODUCT_DATA.stock <= 0, []);
  const isLowStock = useMemo(() => PRODUCT_DATA.stock > 0 && PRODUCT_DATA.stock <= 5, []);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // ⛔ skip auto scroll on page load
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

  return (
    <div className="w-full text-white py-8 sm:py-12 md:py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* LEFT SIDE — FIXED IMAGES */}
        <div className="lg:sticky lg:top-24 lg:self-start flex flex-col-reverse md:flex-row gap-6 w-full">
          {/* THUMBNAILS */}
          <div
            ref={thumbContainerRef}
            className="
              flex flex-row space-x-3 overflow-x-scroll snap-x snap-mandatory
              lg:flex-col lg:space-x-0 lg:space-y-3 lg:overflow-y-scroll
              lg:w-24 xl:w-30 lg:max-h-[550px] pb-2 lg:pb-0 hide-scrollbar
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
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:flex-1 overflow-hidden shadow-2xl rounded group">
            <Image
              priority
              src={mainImage}
              alt={PRODUCT_DATA.name}
              fill
              className="object-cover transition-transform duration-300"
            />

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

        {/* RIGHT SIDE — PRODUCT DETAILS */}
        <div className="space-y-4 md:space-y-3">
          {/* TITLE + PRICE */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{PRODUCT_DATA.name}</h1>
            <p className="text-2xl font-bold mt-5">
              {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
            </p>
            <p className="text-xs sm:text-sm mt-1">{PRODUCT_DATA.shippingNote}</p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <p className="leading-relaxed text-sm md:text-md">{PRODUCT_DATA.description}</p>
            <p className="leading-relaxed text-sm md:text-md font-light">{PRODUCT_DATA.details}</p>
          </div>
          {/* STOCK WARNINGS */}
          {isOutOfStock ? (
            <p className="font-bold text-base">Sold out!</p>
          ) : (
            isLowStock && (
              <p className="text-sm">
                Hurry up! Only <span className="text-md font-bold">{PRODUCT_DATA.stock}</span> items
                left in stock.
              </p>
            )
          )}

          <Progress value={PRODUCT_DATA.stock * 10} bgColor="bg-white" className="bg-white/10" />

          {/* SIZE SELECTOR */}
          <div className="md:mt-7">
            <p className="mb-2 text-sm sm:text-base">
              Size: <span className="font-medium">{selectedSize}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_DATA.sizes.map((size) => (
                <SizeButton
                  key={size}
                  size={size}
                  isSelected={selectedSize === size}
                  onSelect={() => setSelectedSize(size)}
                />
              ))}
            </div>
          </div>

          {/* COLOR SELECTOR */}
          <div className="md:mt-5">
            <p className="mb-2 text-sm sm:text-base">
              Color: <span className="font-bold">{selectedColor}</span>
            </p>
            <div className="flex gap-3">
              {PRODUCT_DATA.colors.map((color) => (
                <Button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  aria-label={` Select color ${color.name}`}
                  className={`rounded-none w-8 h-8 md:w-13 md:h-13 p-1 border-2 transition-all duration-200
                ${
                  selectedColor === color.name
                    ? "border-white "
                    : "border-gray-600 hover:border-gray-400"
                }`}
                >
                  <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                </Button>
              ))}
            </div>
          </div>

          {/* QUANTITY + ADD TO CART */}
          <div className="flex gap-4 items-center pt-4">
            {/* QUANTITY INPUT */}
            <div className="flex border border-gray-600 overflow-hidden h-11">
              <Button
                variant="ghost"
                onClick={decreaseQty}
                disabled={quantity <= 1 || isOutOfStock}
                className="w-10 h-full p-0 text-lg hover:bg-transparent disabled:opacity-30 disabled:cursor-not-allowed hover:text-white text-white"
                aria-label="Decrease quantity"
              >
                -
              </Button>
              <div className="w-12 text-center flex items-center justify-center text-base font-medium border-gray-600">
                {quantity}
              </div>
              <Button
                variant="ghost"
                onClick={increaseQty}
                disabled={isOutOfStock}
                className="w-10 h-full p-0 text-lg hover:bg-transparent disabled:opacity-30 disabled:cursor-not-allowed text-white hover:text-white"
                aria-label="Increase quantity"
              >
                +
              </Button>
            </div>

            {/* ADD TO CART */}
            <Button
              onClick={() => setIsPopupOpen(true)}
              className="rounded flex-1 h-11 bg-[#004351] hover:bg-transparent text-base font-semibold uppercase tracking-wide transition-colors border-[#00B8DF] border"
              disabled={isOutOfStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          </div>

          {/* BUY NOW */}
          <Button
            onClick={() => setIsPopupOpen(true)}
            className="w-full h-11 bg-[#FFE000] hover:bg-transparent hover:text-white hover:border border-[#FFE000] text-black  uppercase tracking-wide transition-colors font-bold"
            disabled={isOutOfStock}
          >
            Buy It Now
          </Button>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-white text-xs sm:text-sm pt-4 border-b border-white pb-10">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Image src={item.icon} alt="" />
                {item.label}
              </div>
            ))}

            {/* Empty placeholder if needed to align layout */}
            {trustItems.length % 2 !== 0 && <div />}

            <div className="flex items-center gap-20 w-full mt-5 col-span-2">
              {actionItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Image src={item.icon} alt="" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          {/* VIEW FULL DETAILS LINK */}
          <div>
            <Link
              href="#details"
              className="text-white hover:cursor-pointer text-sm sm:text-base flex items-center justify-between pt-2  transition-colors font-medium"
            >
              VIEW FULL DETAILS
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
      {/* THE MODAL */}
      <SubscriptionPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </div>
  );
}
