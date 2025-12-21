import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ProductsManager from "@/components/dashboard/ProductsManager";

export default function ProductsPage() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen">
      <h1 className="text-4xl pb-4">Products</h1>
      <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex justify-between pb-3 w-full sm:w-auto">
          <Select>
            <SelectTrigger className=" text-sm bg-white text-black font-semibold">
              <SelectValue placeholder="Bulk actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Link href="/dashboard/products/add-product" className="w-full sm:w-auto">
          <Button className="" size={"dashboardDefault"} variant={"dashboardPrimary"}>
            Add New Product
          </Button>
        </Link>
      </div>

      <ProductsManager></ProductsManager>
    </div>
  );
}
