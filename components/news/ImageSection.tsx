"use client";
import Image from "next/image";

function ImageSection({ image }: { image: string }) {
  return (
    <div className="relative w-full mx-auto max-w-[1800px]  px-2 md:py-5 py-10">
      <div className="relative w-full h-[260px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[750px] rounded-xl overflow-hidden cut-corner shadow-lg">
        <Image src={image} alt="News Hero" fill priority className="object-cover w-full h-full" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 pointer-events-none" />
      </div>
    </div>
  );
}

export default ImageSection;
