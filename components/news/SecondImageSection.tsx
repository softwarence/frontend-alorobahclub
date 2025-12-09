import Image from "next/image";
import Image2 from "@/public/assets/Image2.svg";

function ImageSection() {
  return (
    <div className="relative w-full h-110  bg-cover bg-center -mt-8 cut-corner shadow-lg -mb-7">
      <Image src={Image2} alt="News Hero" fill className="object-cover shadow-lg" />
    </div>
  );
}

export default ImageSection;
