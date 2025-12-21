// app/components/dashboard/Filters.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filters() {
  return (
    <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
        <Input type="text" placeholder="Search products..." className="w-full sm:w-64" />
        <Button className="w-full sm:w-auto">Search</Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <Select>
          <SelectTrigger className="w-48 text-sm">
            <SelectValue placeholder="Default sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-48 text-sm">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cat1">Category 1</SelectItem>
            <SelectItem value="cat2">Category 2</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-48 text-sm">
            <SelectValue placeholder="Default stock status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in">In stock</SelectItem>
            <SelectItem value="out">Out of stock</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full sm:w-auto">Filter</Button>
      </div>
    </div>
  );
}
