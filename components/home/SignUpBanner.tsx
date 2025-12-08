import Image from "next/image";
import Sign_up_section from "@/public/assets/Sign-up-section.svg";
import { Button } from "../ui/button";

const SignUpBanner = () => {
  return (
    <section className="relative bg-black pt-20">
      {/* Background Image */}
      <Image
        src={Sign_up_section}
        alt="Sign Up Background"
        className="absolute w-full h-full object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute"></div>

      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center py-24 md:py-32 px-6 top-5">
        <h2 className="text-4xl md:text-6xl font-extrabold text-black uppercase leading-tight italic tracking-tight mb-6">
          SIGN UP TO STAY <br /> UP TO DATE
        </h2>

        <p className="text-base md:text-lg text-gray-900 mb-10 max-w-3xl">
          Join Al-Orobah today and unlock exclusive member-only offers, rewards, and promotions!
        </p>

        <Button
          className="bg-[#24597F] hover:bg-[#1A4B6B] text-white font-semibold py-5 px-8
             rounded-md shadow-lg transition-all duration-300 "
        >
          Sign Up
        </Button>
      </div>
    </section>
  );
};

export default SignUpBanner;
