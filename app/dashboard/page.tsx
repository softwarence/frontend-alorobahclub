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
    <div className="bg-[#EEF0F4]">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Overview</h1>

        <Select>
          <SelectTrigger className="text-sm border-0 bg-white">
            <SelectValue placeholder="Bulk actions"></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="delete">Delete</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Cards />
      <ProductSalesChart />
    </div>
  );
}
