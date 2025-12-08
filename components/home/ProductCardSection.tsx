"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button"; // shadCN button

import img1 from "@/public/assets/products/p1.svg";
import img2 from "@/public/assets/products/p2.svg";
import img3 from "@/public/assets/products/p3.svg";

interface ProductProps {
  imageSrc: StaticImageData;
  tag: string;
  description: string;
  price: number;
  currency: string;
}

interface ProductCardProps extends ProductProps {
  firstItem?: boolean;
}

const products: ProductProps[] = [
  {
    imageSrc: img1,
    tag: "NEW IN",
    description: "2025/26 Third Jersey Men Match",
    price: 599,
    currency: "SAR",
  },
  {
    imageSrc: img2,
    tag: "NEW IN",
    description: "2025/26 Third Jersey Men Stadium",
    price: 399,
    currency: "SAR",
  },
  {
    imageSrc: img3,
    tag: "NEW IN",
    description: "2025/26 Goalkeeper Kit",
    price: 359,
    currency: "SAR",
  },
];

const ProductCard: React.FC<ProductCardProps> = ({
  firstItem,
  imageSrc,
  tag,
  description,
  price,
  currency,
}) => {
  return (
    <div
      className={`group relative w-full max-w-xs overflow-hidden rounded-lg bg-[#005E76] shadow-xl cut-corner ${
        firstItem ? "md:scale-y-105 origin-top" : ""
      }`}
    >
      {/* Product Tag */}
      <div className="absolute top-4 left-0 bg-black px-2 py-1 text-xs font-semibold uppercase text-white z-10">
        {tag}
      </div>

      {/* Product Image */}
      <div className="relative mb-4 flex aspect-[356.8/445.98] items-center justify-center bg-gray-100 p-6 overflow-hidden">
        <Image
          src={imageSrc}
          alt={description}
          fill
          className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col items-start p-5 mb-2">
        <p className="text-sm text-white">{description}</p>
        <p className="py-2 text-2xl font-bold text-white">
          {currency} {price.toLocaleString()}
        </p>
        <Button variant="primary" className="mt-2 w-full py-3 uppercase border-2">
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

const ProductCardSection: React.FC = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2">
          {products.map((product, index) => (
            <ProductCard key={index} firstItem={index === 0} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardSection;
