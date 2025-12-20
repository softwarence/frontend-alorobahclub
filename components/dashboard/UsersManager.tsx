"use client";

import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";

const USERS = [
  {
    id: 1127,
    name: "Abu Hussain",
    email: "example@yahoo.com",
    address: "Al Safa District, Jeddah 23454",
    joined: "2025/01/13 at 6:40 pm",
  },
  {
    id: 1212,
    name: "Abdul Kaiyum",
    email: "example@yahoo.com",
    address: "Al Rawdah District, Riyadh 13212",
    joined: "2025/01/12 at 5:10 pm",
  },
  {
    id: 1120,
    name: "Al Yasin",
    email: "example@yahoo.com",
    address: "Al Safa District, Jeddah 23454",
    joined: "2025/01/11 at 2:20 pm",
  },
  {
    id: 1166,
    name: "Abu Bakar Zaud",
    email: "example@yahoo.com",
    address: "Al Rawdah District, Riyadh 13212",
    joined: "2025/01/10 at 9:00 am",
  },
  {
    id: 2678,
    name: "Kawsar Ibn",
    email: "example@yahoo.com",
    address: "Al Safa District, Jeddah 23454",
    joined: "2025/01/09 at 6:40 pm",
  },
  {
    id: 3322,
    name: "Ismail Hossain",
    email: "example@yahoo.com",
    address: "Al Rawdah District, Riyadh 13212",
    joined: "2025/01/08 at 4:15 pm",
  },
];

export default function UsersManager() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  /* ---------------- FILTER + SORT ---------------- */
  const filteredUsers = useMemo(() => {
    let result = [...USERS];

    // Search
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.id.toString().includes(q)
      );
    }

    // Sorting
    if (sort === "newest") {
      result.sort((a, b) => new Date(b.joined).getTime() - new Date(a.joined).getTime());
    }

    if (sort === "oldest") {
      result.sort((a, b) => new Date(a.joined).getTime() - new Date(b.joined).getTime());
    }

    return result;
  }, [search, sort]);

  /* ---------------- SELECTION ---------------- */
  const toggleSelectAll = (checked: boolean) => {
    setSelectedUsers(checked ? filteredUsers.map((u) => u.id) : []);
  };

  const toggleSelectUser = (id: number) => {
    setSelectedUsers((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="min-h-70vh">
      {/* Filters */}
      <Card className="bg-transparent shadow-none border-0 pb-0">
        <CardContent className="px-0">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between items-center w-full">
            <p className="text-gray-800 flex gap-5 text-md">
              <span className="font-semibold">Total ({filteredUsers.length})</span>
            </p>

            <div className="flex gap-4 justify-center items-center">
              <Input
                type="text"
                placeholder="Search orders..."
                className="bg-white min-w-[350px] py-4.5 font-thin placeholder:text-lg text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button variant="dashboardOutline" className="-ml-2">
                Search
              </Button>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="py-4.5 text-md bg-white text-black font-semibold">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Default sorting</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="dashboardOutline">Filter</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="overflow-x-auto border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <Table className="w-full border-separate border-spacing-y-4">
            <TableHeader>
              <TableRow className="text-lg">
                <TableHead className="p-3 pl-10 flex gap-5 items-center">
                  <Checkbox
                    isShowIcon={false}
                    className="h-6 w-6 border-black data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
                    checked={
                      selectedUsers.length === filteredUsers.length && filteredUsers.length > 0
                    }
                    onCheckedChange={(c) => toggleSelectAll(!!c)}
                  />
                  <p>Name</p>
                </TableHead>
                <TableHead className="p-3 hidden md:table-cell">Email</TableHead>
                <TableHead className="p-3">Address</TableHead>
                <TableHead className="p-3 hidden lg:table-cell">Joined</TableHead>
                <TableHead className="p-3"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredUsers.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:bg-gray-50 h-25 text-[16px]"
                >
                  <TableCell className="p-3 pl-10 rounded-l-lg">
                    <div className="flex gap-5 items-center">
                      <Checkbox
                        isShowIcon={false}
                        className="h-6 w-6 border-black data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
                        checked={selectedUsers.includes(item.id)}
                        onCheckedChange={() => toggleSelectUser(item.id)}
                      />
                      <div className="flex items-center gap-2">
                        <p className="font-medium">#{item.id}</p>
                        <p className="font-medium">{item.name}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-500">
                    {item.email}
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-500">
                    {item.address}
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-500">
                    {item.joined}
                  </TableCell>

                  <TableCell className="hidden md:table-cell text-gray-500">
                    <Ellipsis />
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
