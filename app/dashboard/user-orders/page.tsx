import UserOrderManager from "@/components/dashboard/UserOrderManager";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function userOrderPage() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen">
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
        <UserOrderManager></UserOrderManager>
      </div>
    </div>
  );
}
