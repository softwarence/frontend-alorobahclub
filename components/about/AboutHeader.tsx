import Image from "next/image";
import bg_img from "@/public/test-image/t4.jpg";

const AboutHeader = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <Image src={bg_img} alt="Stadium Background" fill className="object-cover" priority />

      <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 md:translate-x-0 md:bottom-0 md:left-0 p-1 md:p-16 z-10">
        <h1
          className="
          text-white
          text-3xl md:text-7xl lg:text-8xl
          font-extrabold
          uppercase
          tracking-wider
          leading-[1.3]
          text-center md:text-left
          "
        >
          ABOUT THE
          <br />
          CLUB
        </h1>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
    </div>
  );
};

export default AboutHeader;
