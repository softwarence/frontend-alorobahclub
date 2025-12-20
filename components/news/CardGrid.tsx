"use client";
import Image from "next/image";
import Link from "next/link";

interface item {
  id: number;
  title: string;
  image: string;
  link: string;
}

export default function CardList({ items }: { items: item[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 max-w-[1800px] mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative w-full md:h-96 lg:h-[560px] aspect-square rounded-xl overflow-hidden shadow-lg cut-corner group"
        >
          {/* Image */}
          <Link
            href={`/news/${item.id}`}
            className="inline-block mt-2 text-sm text-white border-b border-white/40 hover:border-white transition !no-underline hover:!no-underline"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(0, 19, 23, 0) 36.41%, #001317 100%)",
            }}
          />

          {/* Content */}
          <div className="absolute bottom-0 p-4 md:p-5 z-10">
            <h2 className="text-base md:text-lg text-white font-semibold drop-shadow-md line-clamp-2">
              {item.title}
            </h2>
            <Link
              href={`/news/${item.id}`}
              className="inline-block mt-2 text-sm text-white border-b border-white/40 hover:border-white transition"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
