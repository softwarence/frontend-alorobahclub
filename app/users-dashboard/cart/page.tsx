"use client";

import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "تشيرت رجالي أبيض",
      price: 129,
      sku: "825629APHF2008-XS",
      qty: 1,
      image: "/assets/products/p1.svg",
    },
    {
      id: 2,
      title: "تشيرت رجالي أبيض",
      price: 80,
      sku: "825629APHF2008-XS",
      qty: 1,
      image: "/assets/products/p2.svg",
    },
    {
      id: 3,
      title: "تشيرت رجالي أبيض",
      price: 75,
      sku: "825629APHF2008-XS",
      qty: 1,
      image: "/assets/products/p3.svg",
    },
    {
      id: 4,
      title: "تشيرت رجالي أبيض",
      price: 55,
      sku: "825629APHF2008-XS",
      qty: 2,
      image: "/assets/products/p1.svg",
    },
  ]);

  interface CartItem {
    id: number;
    title: string;
    price: number;
    sku: string;
    qty: number;
    image: string;
  }

  type ChangeQtyType = "inc" | "dec";

  const changeQty = (id: number, type: ChangeQtyType) => {
    setCart((prev: CartItem[]) =>
      prev.map((item: CartItem) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <h1 className="text-xl font-semibold mb-2">Cart</h1>

      <button className="bg-black text-white px-4 py-2 rounded mb-6">Browse store</button>

      <div className="grid lg:grid-cols-[1fr_360px] gap-6">
        {/* Cart Items */}
        <div className="bg-white rounded-xl p-4 md:p-6">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-5 text-sm font-semibold text-gray-500 border-b pb-3">
            <span className="col-span-2">Product details</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="
                grid grid-cols-1 md:grid-cols-5
                gap-4 md:gap-0
                py-4 border-b last:border-none
              "
            >
              {/* Product */}
              <div className="md:col-span-2 flex items-center gap-3">
                <Image src={item.image} width={48} height={48} alt="" className="rounded" />
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.sku}</p>
                </div>
              </div>

              {/* Price */}
              <div className="flex md:block justify-between text-sm">
                <span className="md:hidden text-gray-400">Price</span>
                <span>{item.price} SAR</span>
              </div>

              {/* Quantity */}
              <div className="flex md:block justify-between items-center">
                <span className="md:hidden text-gray-400">Quantity</span>
                <div className="flex items-center border rounded w-fit">
                  <button onClick={() => changeQty(item.id, "dec")} className="px-3 py-1 text-lg">
                    −
                  </button>
                  <span className="px-3 text-sm">{item.qty}</span>
                  <button onClick={() => changeQty(item.id, "inc")} className="px-3 py-1 text-lg">
                    +
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex md:block justify-between text-sm font-medium">
                <span className="md:hidden text-gray-400">Subtotal</span>
                <span>{item.price * item.qty} SAR</span>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals */}
        <div className="bg-white rounded-xl p-6 h-fit">
          <h2 className="font-semibold mb-4">Cart Totals</h2>

          <div className="flex justify-between text-sm mb-3">
            <span className="text-gray-500">Subtotal</span>
            <span>{subtotal} SAR</span>
          </div>

          <div className="flex justify-between font-semibold mb-6">
            <span>Total</span>
            <span>{subtotal} SAR</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
