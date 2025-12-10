"use client";
import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  discount?: number;
}

export interface ProductProps {
  product: Product;
}

const StoreProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-[#001E24] md:h-[440px] h-[600px]  rounded-3xl overflow-hidden shadow-lg w-full md:max-w-[355px]  max-w-[455px] relative">
      {/* Image Section */}
      <div className="relative w-full md:h-[310px]  h-[500px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover w-full h-full hover:scale-105 duration-500"
        />
      </div>
      {product.discount && (
        <div className="absolute top-3 left-3 bg-[#D63A2F]  px-2 py-1 text-sm rounded-md">
          {product.discount}%
        </div>
      )}
      {/* Text Section */}
      <div className="py-5 px-4 text-center space-y-2">
        <h3 className="text-white text-lg font-medium leading-relaxed">{product.title}</h3>
        {product.discount ? (
          <>
            <div className="flex gap-4 justify-center">
              <p className="text-[#D63A2F] font-extrabold text-md tracking-wide">
                {(product.price * (1 - product.discount / 100)).toFixed(2)} SAR
              </p>
              <p className="text-white font-extrabold text-md tracking-wide line-through opacity-60">
                {product.price} SAR
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="text-white font-extrabold text-xl tracking-wide">{product.price} SAR</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StoreProductCard;
