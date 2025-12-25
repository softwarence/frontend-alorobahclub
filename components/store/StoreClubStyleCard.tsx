"use client";

import Image from "next/image";
// import s1 from "@/public/assets/store/s1.svg";
// import s2 from "@/public/assets/store/s2.svg";
// import s3 from "@/public/assets/store/s3.svg";
// import s4 from "@/public/assets/store/s4.svg";
// import s5 from "@/public/assets/store/s5.svg";
import s1 from "@/public/assets/store/a1.svg";
import s2 from "@/public/assets/store/a2.svg";
import s3 from "@/public/assets/store/a3.svg";
import s4 from "@/public/assets/store/a2.svg";
import s5 from "@/public/assets/store/a1.svg";

export const fakeData = [
  { img: s1, name: "Men", title: "23 items" },
  { img: s2, name: "Women", title: "18 items" },
  { img: s3, name: "Young", title: "12 items" },
  { img: s4, name: "Kid", title: "30 items" },
  { img: s5, name: "Babirs", title: "15 items" },
];

const StoreClubStyleCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
      {fakeData.map((item, index) => (
        <div
          key={index}
          className="relative group cursor-pointer rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* IMAGE */}
          <div className="relative md:w-[250px] min-w-[200px] w-[400px] md:h-[350px] h-[650px]">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-10 w-full text-center px-2">
            <p className="text-white text-xl md:text-3xl font-extrabold uppercase tracking-wide drop-shadow-lg">
              {item.name}
            </p>
            <p className="text-white text-md -mb-3 pt-4 pacity-90 drop-shadow-md">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreClubStyleCard;
