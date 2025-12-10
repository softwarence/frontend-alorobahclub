import Image from "next/image";
import Link from "next/link";

export const productData = [
  { id: 1, title: "THIRD KIT 25/26", image: "/assets/store/a1.svg", link: "#third" },
  { id: 2, title: "AWAY 25/26", image: "/assets/store/a2.svg", link: "#away" },
  { id: 3, title: "HOME KIT 25/26", image: "/assets/store/a3.svg", link: "#home" },
];

const KitDisplay = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {productData.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="w-full relative block overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl group"
          >
            <div className="relative w-full pb-[150%] md:pb-[140%]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* 2. Responsive Title Overlay */}
            <div className="absolute inset-x-0 bottom-0 py-4 sm:py-6 md:py-8 px-4 bg-gradient-to-t from-black/90 to-transparent">
              <h2
                className="
                text-lg sm:text-xl md:text-2xl
                font-bold
                uppercase
                text-white
                text-center
                tracking-wider
                drop-shadow-lg"
              >
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KitDisplay;
