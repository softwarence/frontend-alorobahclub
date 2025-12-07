import Image from "next/image";
import logo from "@/public/assets/logo_p.svg";
import stadiumImage from "@/public/assets/about/st.svg";

const ClubHeadquartersSection = () => {
  return (
    <>
      <div className="bg-[#001E24]">
        <section className="px-4 md:px-16 md:pt-15">
          <div className="">
            <div className="flex flex-col lg:flex-row items-center md:gap-10">
              {/* Image Section */}
              <div className="lg:w-2/6 w-full">
                <div className="relative overflow-hidden rounded-md flex justify-center items-center">
                  <Image
                    src={logo}
                    alt="Aerial view of Al-Orobah Club Headquarters Stadium"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="lg:w-3/5 text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight md:mb-7 mb-5 uppercase">
                  The Start
                </h2>
                <p className="text-gray-300 md:leading-[3rem] md:tracking-[3px] leading-[2rem] tracking-[2px] font-thin md:text-2xl text-xl">
                  It all began with a shared dream — a vision to bring people together through the
                  love of football. What started as a small local team driven by passion soon
                  evolved into something greater. With determination, community support, and an
                  unshakable belief in their potential, the journey of Al-Orobah began — marking the
                  first chapter of a story that continues to inspire generations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 px-4 md:px-16">
          <div className="">
            <div className="flex flex-col-reverse pt-10 md:pt-0 lg:flex-row items-center gap-10 justify-between">
              {/* Text Section */}
              <div className="lg:w-3/5 text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 uppercase">
                  Club Headquarters
                </h2>
                <p className="text-gray-300 md:leading-[3rem] md:tracking-[3px] leading-[2rem] tracking-[2px] font-thin md:text-2xl text-xl">
                  Al-Orobah official headquarters is located in the Al-Safa district of Jeddah, a
                  neighborhood that reflects the club’s character: grounded, community-driven, and{" "}
                  <br />
                  deeply local.
                </p>
              </div>
              {/* Image Section */}
              <div className="lg:w-2/7 w-full">
                <div className="relative overflow-hidden rounded-xl shadow-xl border border-gray-700 flex justify-center items-center cut-corner">
                  <Image
                    src={stadiumImage}
                    alt="Al-Orobah Club Headquarters"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClubHeadquartersSection;
