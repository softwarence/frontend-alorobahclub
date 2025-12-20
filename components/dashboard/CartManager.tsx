"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "../ui/separator";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  sku: string;
  qty: number;
  image: string;
}

export const initialCart: CartItem[] = [
  {
    id: 1,
    title: "تيشيرت بنزيما ابيض",
    price: 129,
    sku: "S2526APPHFZ008-XS",
    qty: 1,
    image: "/assets/products/p1.svg",
  },
  {
    id: 2,
    title: "تيشيرت بنزيما ابيض",
    price: 80,
    sku: "S2526APPHFZ008-XS",
    qty: 1,
    image: "/assets/products/p2.svg",
  },
  {
    id: 3,
    title: "تيشيرت بنزيما ابيض",
    price: 75,
    sku: "S2526APPHFZ008-XS",
    qty: 1,
    image: "/assets/products/p3.svg",
  },
  {
    id: 4,
    title: "تيشيرت بنزيما ابيض",
    price: 55,
    sku: "S2526APPHFZ008-XS",
    qty: 2,
    image: "/assets/products/p1.svg",
  },
];

export default function CartManager() {
  const [cart, setCart] = useState(initialCart);

  const changeQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  return (
    <div className="bg-[#f0f2f5] mt-10">
      <div className="flex flex-col xl:flex-row gap-10">
        {/* TABLE */}
        <div className="flex-1 overflow-x-auto">
          <Table className="min-w-[900px] xl:min-w-0 border-separate border-spacing-0">
            <TableHeader>
              <TableRow className="border-none hover:bg-transparent text-lg">
                <TableHead className="px-6 py-5 font-semibold">Product details</TableHead>
                <TableHead className="px-6 py-5 text-center table-cell md:hidden">
                  Quantity
                </TableHead>
                <TableHead className="px-6 py-5 text-center md:table-cell">Price</TableHead>
                <TableHead className="px-6 py-5 text-center md:table-cell">SKU</TableHead>
                <TableHead className="px-6 py-5 text-center hidden md:block">Quantity</TableHead>
                <TableHead className="px-6 py-5 text-right lg:table-cell">Subtotal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {cart.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === cart.length - 1;

                return (
                  <TableRow key={item.id} className="border-none">
                    {/* PRODUCT */}
                    <TableCell
                      className={`
                        bg-white px-6 py-4
                        ${isFirst ? "rounded-tl-2xl" : ""}
                        ${isLast ? "rounded-bl-2xl" : ""}
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={item.image}
                          width={60}
                          height={50}
                          alt={item.title}
                          className="rounded-lg"
                        />
                        <span className="font-medium text-[#1a2b3b]">{item.title}</span>
                      </div>
                    </TableCell>

                    {/* QTY */}
                    <TableCell className="bg-white md:hidden">
                      <div className="flex justify-center">
                        <div className="flex items-center">
                          <Button
                            variant="dashboardOutline"
                            onClick={() => changeQty(item.id, "dec")}
                            className="px-1 h-1 py-2.5 rounded"
                          >
                            −
                          </Button>

                          <span className="mx-1 px-2 py-1 border border-black rounded text-sm">
                            {item.qty}
                          </span>

                          <Button
                            variant="dashboardOutline"
                            onClick={() => changeQty(item.id, "inc")}
                            className="px-1 h-1 py-2.5 rounded"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </TableCell>

                    {/* PRICE */}
                    <TableCell className="bg-white text-center md:table-cell text-gray-500">
                      {item.price} SAR
                    </TableCell>

                    {/* SKU */}
                    <TableCell className="bg-white text-center md:table-cell text-sm">
                      {item.sku}
                    </TableCell>

                    {/* QTY */}
                    <TableCell className="bg-white hidden md:flex h-28">
                      <div className="flex justify-center items-center w-full">
                        <div className="flex items-center ">
                          <Button
                            variant="dashboardOutline"
                            onClick={() => changeQty(item.id, "dec")}
                            className="px-1 h-1 py-2.5 rounded"
                          >
                            −
                          </Button>

                          <span className="mx-1 px-2 py-1 border border-black rounded text-sm">
                            {item.qty}
                          </span>

                          <Button
                            variant="dashboardOutline"
                            onClick={() => changeQty(item.id, "inc")}
                            className="px-1 h-1 py-2.5 rounded"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </TableCell>

                    {/* SUBTOTAL */}
                    <TableCell
                      className={`
                        bg-white text-right lg:table-cell px-10 font-medium text-gray-500
                        ${isFirst ? "rounded-tr-2xl" : ""}
                        ${isLast ? "rounded-br-2xl" : ""}
                      `}
                    >
                      {item.price * item.qty} SAR
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* TOTALS */}
        <div className="w-full xl:max-w-[470px] md:mt-17">
          <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Cart Totals</h2>

            <Separator className="bg-black mb-6" />

            <div className="flex justify-between text-gray-500 text-lg mb-4">
              <span>Subtotal</span>
              <span>{subtotal} SAR</span>
            </div>

            <div className="flex justify-between font-semibold text-xl xl:text-2xl mb-6">
              <span>Total</span>
              <span>{subtotal} SAR</span>
            </div>

            <Button className="w-full bg-black hover:bg-zinc-800 text-white py-6 rounded-lg text-lg">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
