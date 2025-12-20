"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import SubscribersManager from "@/components/dashboard/SubscribersManager";

export default function SubscribersPage() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen">
      <h1 className="text-4xl">Orders</h1>
      <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between gap-3">
        <div className="flex justify-between w-full sm:w-auto">
          <Select>
            <SelectTrigger className=" text-sm bg-white text-black font-semibold">
              <SelectValue placeholder="Bulk actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <SubscribersManager></SubscribersManager>
    </div>
  );
}
