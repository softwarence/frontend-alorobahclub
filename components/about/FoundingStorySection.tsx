import Image from "next/image";

// Import the jagged border image/SVG
import club_establishment from "@/public/assets/about/club-establishment.svg";

const EstablishmentHistorySection = () => {
  return (
    <section className="md:block hidden relative bg-black min-h-[650px]">
      {/* Decorative Top Border */}
      <div className="absolute -top-35 left-0 w-full">
        <Image src={club_establishment} alt="Decorative Top Border" className="w-full h-auto" />
      </div>
      {/* Content */}
      <div className="mx-auto px-4 md:px-10 relative pt-40 flex flex-col lg:flex-row items-center lg:items-center gap-10 -top-25">
        <div className="lg:w-3/5 text-black flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 uppercase tracking-wide">
            AL-OROBAH CLUB
            <br />
            ESTABLISHMENT
          </h2>
          <p className=" text-black  tracking-[3px] text-2xl md:max-w-3xl">
            Al-Orobah Club was established in 1975 in Sakakah, Al-Jouf, Saudi Arabia. Since its
            founding, the club has grown to become a symbol of passion and community spirit in the
            region. Dedicated to nurturing athletic talent and promoting sportsmanship, Al-Orobah
            has made its mark in Saudi football, rising through the ranks to compete at the national
            level. The club’s establishment laid the foundation for a legacy built on perseverance,
            teamwork, and pride for the people of Al-Jouf.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstablishmentHistorySection;
