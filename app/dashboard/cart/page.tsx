"use client";

import CartManager from "@/components/dashboard/CartManager";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen px-4 sm:px-6 xl:px-0">
      <h1 className="text-3xl xl:text-4xl">Cart</h1>

      <div className="mt-4">
        <Link href="/store" className="block sm:inline-block">
          <Button size="dashboardDefault" variant="dashboardPrimary" className="w-full sm:w-auto">
            Browse store
          </Button>
        </Link>
      </div>

      <div className="mt-6">
        <CartManager />
      </div>
    </div>
  );
}
