"use client";

import Cards from "@/components/dashboard/Cards";
import ProductSalesChart from "@/components/dashboard/ProductSalesChart";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Overview() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h1 className="text-3xl font-semibold">Overview</h1>

        <Select>
          <SelectTrigger className="text-sm border-0 bg-white w-full sm:w-[200px]">
            <SelectValue placeholder="Bulk actions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="delete">Delete</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Cards />

      {/* Chart */}
      <div className="w-full">
        <ProductSalesChart />
      </div>
    </div>
  );
}
