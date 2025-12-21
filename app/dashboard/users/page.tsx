import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import UsersManager from "@/components/dashboard/UsersManager";

export default function UsersPage() {
  return (
    <div className="bg-[#EEF0F4] min-h-screen">
      <h1 className="text-4xl pb-5 md:pb-0">Users</h1>
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
      <UsersManager></UsersManager>
    </div>
  );
}
