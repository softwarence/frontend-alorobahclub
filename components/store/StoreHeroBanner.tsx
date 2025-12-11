import Image from "next/image";

import heroImg from "@/public/assets/store/heroImg.svg";
import { Button } from "../ui/button";
const StoreHeroBanner = () => {
  return (
    <div className="h-screen w-full relative">
      <Image src={heroImg} alt="" className="object-cover w-full h-full"></Image>
      <div>
        <Button className="bg-[#111111] border-[#FFE000] border rounded py-5 px-8 absolute bottom-6 left-1/2 -translate-1/2 hover:bg-[#FFE000] hover:text-black">
          تسوق الان
        </Button>
      </div>
    </div>
  );
};

export default StoreHeroBanner;
