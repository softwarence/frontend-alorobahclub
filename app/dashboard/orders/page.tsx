import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import OrdersManager from "@/components/dashboard/OrdersManager";
export default function OrderPage() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen p-4 sm:p-6 xl:p-0">
      <div className="flex flex-col gap-4 xl:gap-6">
        <h1 className="text-2xl sm:text-3xl xl:text-4xl">Orders</h1>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px] text-sm bg-white text-black font-semibold">
              <SelectValue placeholder="Bulk actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <OrdersManager />
      </div>
    </div>
  );
}
