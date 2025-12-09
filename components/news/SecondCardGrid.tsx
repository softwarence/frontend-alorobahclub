"use client";
import Image from "next/image";

export default function CardList() {
  // Fake Data ------------------------
  const items = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      image: "/test-image/t1.jpg",
      link: "/details/1",
    },
    {
      id: 2,
      title: "Scandinavian Interior Design",
      image: "/test-image/t2.jpg",
      link: "/details/2",
    },
  ];
  // -----------------------------------

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-10">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl  shadow-lg  overflow-hidden w-full h-96 relative">
          <Image src={item.image} alt={item.title} fill className="object-cover" />

          <div className="p-5 relative z-10 mt-75">
            <h2 className="text-base text-white  font-medium ">{item.title}</h2>
            <a href={item.link} className="inline-block  text-sm text-white border-b-1  transition">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
