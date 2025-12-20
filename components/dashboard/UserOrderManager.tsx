"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";

// --- Fake Order Data ---
export const ORDERS = [
  {
    id: 1,
    productName: "تيشيرت تصميم عربي",
    imageSrc: "/assets/products/p1.svg",
    location: "Riyadh, Saudi Arabia",
    price: 129,
    sku: "S25ZPAPHPZ008-XS",
    status: "Pending",
    orderedAt: "2025/01/30 at 6:40 pm",
  },
  {
    id: 2,
    productName: "تيشيرت شبابي",
    imageSrc: "/assets/products/p2.svg",
    location: "Jeddah, Saudi Arabia",
    price: 139,
    sku: "S25ZPAPHPZ008-S",
    status: "Processing",
    orderedAt: "2025/01/28 at 2:40 pm",
  },
  {
    id: 3,
    productName: "تيشيرت كلاسيكي",
    imageSrc: "/assets/products/p3.svg",
    location: "Dammam, Saudi Arabia",
    price: 159,
    sku: "S25ZPAPHPZ008-M",
    status: "In transit",
    orderedAt: "2025/01/27 at 10:15 am",
  },
  {
    id: 4,
    productName: "تيشيرت تصميم عصري",
    imageSrc: "/assets/products/p2.svg",
    location: "Mecca, Saudi Arabia",
    price: 169,
    sku: "S25ZPAPHPZ008-L",
    status: "Out for delivery",
    orderedAt: "2025/01/26 at 5:00 pm",
  },
  {
    id: 5,
    productName: "تيشيرت رياضي",
    imageSrc: "/assets/products/p3.svg",
    location: "Medina, Saudi Arabia",
    price: 189,
    sku: "S25ZPAPHPZ008-XL",
    status: "Completed",
    orderedAt: "2025/01/25 at 3:20 pm",
  },
  {
    id: 6,
    productName: "تيشيرت كلاسيكي",
    imageSrc: "/assets/products/p1.svg",
    location: "Riyadh, Saudi Arabia",
    price: 199,
    sku: "S25ZPAPHPZ008-XXL",
    status: "Pending",
    orderedAt: "2025/01/24 at 12:30 pm",
  },
];

// --- UserOrderManager Component ---
export default function UserOrderManager() {
  return (
    <div className="min-h-70vh -mt-8">
      <Card className="overflow-x-auto border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <Table className="w-full border-separate border-spacing-y-4 min-w-[800px] lg:min-w-full">
            <TableHeader>
              <TableRow className="text-lg border-none hover:bg-transparent">
                <TableHead className="p-3 pl-8">Product details</TableHead>
                <TableHead className="p-3">Delivery location</TableHead>
                <TableHead className="p-3">Total</TableHead>
                <TableHead className="p-3">Delivery status</TableHead>
                <TableHead className="p-3">Ordered At</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {ORDERS.map((order) => (
                <TableRow
                  key={order.id}
                  className="bg-white rounded-lg shadow-sm hover:bg-gray-50 border-none transition-colors"
                >
                  <TableCell className="p-6 pl-8 rounded-l-lg">
                    <div className="flex items-center gap-3">
                      <div className="relative h-[80px] w-[80px] shrink-0">
                        <Image
                          src={order.imageSrc}
                          alt={order.productName}
                          fill
                          className="rounded object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium truncate max-w-[150px] md:max-w-full">
                          {order.productName}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="p-3 text-gray-600">{order.location}</TableCell>

                  <TableCell className="p-3 font-medium whitespace-nowrap">
                    {order.price} SAR
                  </TableCell>

                  <TableCell className="p-3">
                    <span
                      className={`font-medium whitespace-nowrap ${
                        order.status === "Completed"
                          ? "bg-green-600 text-white px-6 py-2 rounded-lg"
                          : order.status === "Pending"
                            ? "bg-[#FFE000] text-black px-6 py-2 rounded-lg"
                            : order.status === "Processing"
                              ? "bg-[#0075FF] text-white px-6 py-2 rounded-lg"
                              : order.status === "In transit"
                                ? "bg-[#00B8DF] text-white px-6 py-2 rounded-lg"
                                : order.status === "Out for delivery"
                                  ? "bg-[#6962B5] text-white px-6 py-2 rounded-lg"
                                  : "bg-[#52DF60] text-white px-6 py-2 rounded-lg"
                      }`}
                    >
                      {order.status}
                    </span>
                  </TableCell>

                  <TableCell className="p-3 text-gray-500 w-20 pr-10 rounded-r-lg">
                    <div className="flex gap-10 items-center">
                      {order.orderedAt}
                      <Ellipsis />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
