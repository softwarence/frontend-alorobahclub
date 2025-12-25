import StoreProductContainer from "@/components/store/StoreProductContainer";
export const storeProducts = [
  {
    id: 1,
    title: "حقيبة شخصية الاتحاد",
    price: 259,
    image: "/assets/store/p1.svg",
  },
  {
    id: 2,
    title: "الاتحاد شنطة ظهر",
    price: 359,
    image: "/assets/store/p2.svg",
  },
  {
    id: 3,
    title: "الاتحاد حقيبة المدربين",
    price: 649,
    image: "/assets/store/p3.svg",
  },
  {
    id: 4,
    title: "حافظة آيب توبي الارت المستدام",
    price: 299,
    image: "/assets/store/p4.svg",
  },
  {
    id: 5,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p5.svg",
    discount: -15,
  },
  {
    id: 6,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p6.svg",
  },
  {
    id: 7,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p7.svg",
  },
  {
    id: 8,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p8.svg",
    discount: -15,
  },
  {
    id: 9,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p9.svg",
    discount: -25,
  },
  {
    id: 10,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p10.svg",
    discount: -5,
  },
  {
    id: 11,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p11.svg",
  },
  {
    id: 12,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p12.svg",
  },
  {
    id: 13,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p13.svg",
  },
  {
    id: 14,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p14.svg",
  },
  {
    id: 15,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p5.svg",
  },
  {
    id: 16,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p9.svg",
  },
  {
    id: 17,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p13.svg",
  },
  {
    id: 18,
    title: "حقيبة الاتحاد شخصية",
    price: 249,
    image: "/assets/store/p14.svg",
    discount: -30,
  },
];

import StoreFooter from "@/components/store/StoreFooter";
import StoreSingleProductContainer from "@/components/store/StoreSingleProductContainer";

const SingleProductPage = () => {
  return (
    <>
      <div className="bg-[#001317] text-white">
        <div className="max-w-7xl mx-auto px-2">
          <StoreSingleProductContainer></StoreSingleProductContainer>
          <h3
            className="
               text-2xl sm:text-3xl lg:text-3xl font-extrabold text-center uppercase text-white my-10 pt-10"
          >
            You may also like!
          </h3>

          <StoreProductContainer
            gap="gap-2"
            title="Sustainable Legacy"
            storeProducts={storeProducts.slice(0, 5)}
          ></StoreProductContainer>
        </div>
        <StoreFooter></StoreFooter>
      </div>
    </>
  );
};

export default SingleProductPage;
