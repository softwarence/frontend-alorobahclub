import { Button } from "../ui/button";
import StoreProductCard, { Product } from "./StoreProductCard";

interface StoreProductContainerProps {
  title: string;
  gap: string;
  storeProducts: Product[];
}

const StoreProductContainer = ({ gap, title, storeProducts }: StoreProductContainerProps) => {
  return (
    <>
      <div className="flex justify-between mb-5 px-5">
        <p className="border-b-2 px-6 mb-2">{title}</p>
        <Button className="uppercase border border-[#FFE000] bg-transparent text-[#FFE000] px-14 py-5 font-bold hover:bg-[#FFE000] hover:text-[#001E24] ">
          Shop all
        </Button>
      </div>
      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${gap} place-items-center mb-10`}
      >
        {storeProducts.map((item) => (
          <StoreProductCard key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default StoreProductContainer;
