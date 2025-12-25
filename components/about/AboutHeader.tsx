import Image from "next/image";
import bg_img from "@/public/test-image/t4.jpg";

const AboutHeader = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image src={bg_img} alt="Stadium Background" fill priority className="object-cover" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

      {/* Text Wrapper */}
      <div
        className="
          absolute inset-0 z-10
          flex items-center justify-center
          md:items-end md:justify-start
        "
      >
        <div className="w-full max-w-7xl px-6 pb-16 md:pb-20">
          <h1
            className="
              text-white
              text-3xl md:text-7xl lg:text-8xl
              font-extrabold
              uppercase
              tracking-wider
              leading-tight
              text-center md:text-left
            "
          >
            ABOUT THE
            <br />
            CLUB
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
