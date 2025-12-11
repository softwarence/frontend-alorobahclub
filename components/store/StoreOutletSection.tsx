import Image from "next/image";
import yellowIcon from "@/public/assets/yellow-icon.svg";
import redPanel from "@/public/assets/store/red-ber.svg";

import l1 from "@/public/assets/store/l1.svg";
import l2 from "@/public/assets/store/l2.svg";
import l3 from "@/public/assets/store/l3.svg";

const fakeData = [
  {
    id: 1,
    img: l1,
    name: "Collection 24/25",
    title: "6 items",
  },
  {
    id: 2,
    img: l2,
    name: "Collection 24/25",
    title: "4 items",
  },
  {
    id: 3,
    img: l3,
    name: "Collection 24/25",
    title: "5 items",
  },
];

const StoreOutletSection = () => {
  return (
    <div>
      <h2 className="md:text-3xl text-xl font-bold text-center pb-10 pt-5">
        Official Orobah Store
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="flex items-center justify-center gap-3 border px-7 py-4 rounded-full bg-[#111111]">
          <Image src={yellowIcon} className="pt-0.5" alt=""></Image>
          <span>Original Products</span>
        </div>
        <div className="flex items-center justify-center gap-3 border px-7 py-4 rounded-full bg-[#111111]">
          <Image src={yellowIcon} className="pt-0.5" alt=""></Image>
          <span>Fast and free shipping within Saudi Arabia</span>
        </div>
        <div className="flex items-center justify-center gap-3 border px-7 py-4 rounded-full bg-[#111111]">
          <Image src={yellowIcon} className="pt-0.5" alt=""></Image>
          <span>Multiple secure payment options</span>
        </div>
      </div>
      <div className="my-10 w-full">
        <Image src={redPanel} alt="" className="w-full h-[500px] md:h-auto object-cover"></Image>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mb-10">
        {fakeData.map((d) => (
          <div key={d.id} className="rounded overflow-hidden w-full bg-[#001E24] text-center">
            <Image src={d.img} alt="" className="w-full"></Image>
            <h2 className="text-2xl font-bold py-2">{d.name}</h2>
            <p className="pb-4">{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreOutletSection;
