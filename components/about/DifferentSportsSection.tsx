import Image from "next/image";
import sportsBackground from "@/public/assets/about/Description.svg";

const DifferentSportsSection = () => {
  return (
    <section className="relative w-full h-full pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={sportsBackground}
          alt="Al-Orobah Multi-Sport Team and Fans"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h2 className="text-3xl md:text-6xl font-extrabold uppercase mb-8 tracking-[4px]">
          DIFFERENT SPORTS
        </h2>

        <p className="leading-relaxed text-gray-100  tracking-[3px] text-3xl font-thin text-center">
          Al-Orobah is more than a football club — it’s a multi-sport institution built on
          resilience, ambition, <br /> and a proud legacy. From the training halls to competitive
          arenas, we strive for excellence across every discipline, united by the same spirit that
          defines our football. Every sport represents the same badge, the same dedication, and the
          same pursuit of greatness. Our mission to develop champions goes far beyond the pitch — it
          reaches every athlete, every team, and every competition we step into. Different sports.
          One identity. This is Al-Orobah. With a growing lineup of multi-sport programs, Al-Orobah
          continues to expand its presence across the Kingdom. From the intensity of the football
          field to the precision of athletics, from the strength of combat sports to the discipline
          of indoor games — we don’t just participate. We compete with purpose. A history of
          achievements. A future of champions. This is the spirit of Al-Orobah Club.
        </p>
      </div>
    </section>
  );
};

export default DifferentSportsSection;
