"use client";

import Image from "next/image";
import membershipImage from "@/public/assets/membership-banner/membership_img.svg";
import yellow_bg from "@/public/assets/membership-banner/yellow_bg.svg";
import { Button } from "../ui/button";

const MemberShipBanner = () => {
  return (
    <section className="relative w-full bg-black pb-20">
      <div className="relative w-full min-h-[400px] md:h-[600px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src={yellow_bg}
            alt="Yellow background with wavy edge"
            fill
            className="object-cover object-top"
            quality={100}
          />
        </div>

        {/* Content Wrapper - Full Width, No Container */}
        <div className="relative z-10 h-full w-full px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
            {/* LEFT TEXT (touches left edge) */}
            <div className="flex flex-col justify-center h-full pl-4 md:pl-12">
              <h2 className="text-4xl md:text-6xl font-extrabold uppercase text-black leading-tight">
                TIGER <br /> MEMBERSHIPS
              </h2>

              <p className="mt-3 text-base text-black">
                Learn more about our exclusive Tiger Membership program{" "}
              </p>

              <Button
                variant={"primary"}
                className="mt-8 w-max bg-black px-8  font-bold uppercase text-yellow-400 transition-colors hover:text-black hover:border-gray-800 border py-5"
              >
                SIGN UP
              </Button>
            </div>

            {/* RIGHT IMAGE (touches right edge) */}
            <div className="relative flex items-end justify-end h-full pr-4 md:pr-12">
              <div className="relative h-full w-full max-w-sm md:max-w-none">
                <Image
                  src={membershipImage}
                  alt="Football player"
                  fill
                  className="object-cover object-top-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberShipBanner;
