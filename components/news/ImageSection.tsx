import Image from "next/image";
import Image1 from "@/public/assets/Image1.svg";

function ImageSection() {
  return (
    <div className="relative w-full h-110 py-10 bg-cover -mb-7 bg-center cut-corner shadow-lg -mt-8 ">
      <Image src={Image1} alt="News Hero" fill className="object-cover shadow-lg" />
    </div>
  );
}

export default ImageSection;
