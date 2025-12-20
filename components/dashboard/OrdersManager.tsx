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

const ORDERS = [
  {
    id: "#1127",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/13 at 6:40 pm",
    status: "processing",
    total: "129 SAR",
  },
  {
    id: "#1124",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/12 at 12:40 pm",
    status: "processing",
    total: "35 SAR",
  },
  {
    id: "#1120",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/11 at 6:40 pm",
    status: "completed",
    total: "50 SAR",
  },
  {
    id: "#1166",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/10 at 6:40 pm",
    status: "completed",
    total: "79 SAR",
  },
  {
    id: "#2678",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/09 at 6:40 pm",
    status: "completed",
    total: "12 SAR",
  },
  {
    id: "#3232",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/08 at 6:40 pm",
    status: "cancelled",
    total: "125 SAR",
  },
  {
    id: "#1366",
    title: "اشتراك وجبات اسبوعي",
    date: "2025/01/10 at 6:40 pm",
    status: "completed",
    total: "79 SAR",
  },
];

export default function OrdersManager() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<string>("all");
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);

  const filteredOrders = useMemo(() => {
    let result = [...ORDERS];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (o) => o.id.toLowerCase().includes(q) || o.title.toLowerCase().includes(q)
      );
    }
    if (dateFilter !== "all") result = result.filter((o) => o.date.startsWith(dateFilter));
    if (sort === "newest")
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    if (sort === "oldest")
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return result;
  }, [search, sort, dateFilter]);

  const toggleSelectAll = (checked: boolean) => {
    setSelectedOrders(checked ? filteredOrders.map((o) => o.id) : []);
  };
  const toggleSelectOrder = (id: string) => {
    setSelectedOrders((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const dates = Array.from(new Set(ORDERS.map((o) => o.date.split(" at ")[0])));

  const statusCount = useMemo(
    () => ({
      all: ORDERS.length,
      processing: ORDERS.filter((o) => o.status === "processing").length,
      completed: ORDERS.filter((o) => o.status === "completed").length,
      cancelled: ORDERS.filter((o) => o.status === "cancelled").length,
    }),
    []
  );

  return (
    <div className="min-h-70vh">
      {/* Filters */}
      <Card className="bg-transparent shadow-none border-0 pb-0">
        <CardContent className="px-0">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between w-full">
            <p className="text-gray-800 flex flex-wrap gap-2 md:gap-5 text-md">
              <span className="font-semibold">All ({statusCount.all})</span>
              <span>Processing ({statusCount.processing})</span>
              <span>Completed ({statusCount.completed})</span>
              <span>Cancelled ({statusCount.cancelled})</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 lg:mt-0 items-center">
              <Input
                type="text"
                placeholder="Search orders..."
                className="bg-white w-full sm:min-w-[250px] md:min-w-[350px] py-3 md:py-4.5 text-md md:text-lg font-thin placeholder:text-sm md:placeholder:text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button variant="dashboardOutline" className="w-full sm:w-auto">
                Search
              </Button>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-full md:w-auto py-3 md:py-4.5 text-md bg-white text-black font-semibold">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Default sorting</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-full md:w-auto py-3 md:py-4.5 text-md bg-white text-black font-semibold">
                  <SelectValue placeholder="All dates" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All dates</SelectItem>
                  {dates.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="dashboardOutline" className="w-full sm:w-auto">
                Filter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="overflow-x-auto border-0 shadow-none bg-transparent mt-4">
        <CardContent className="p-0">
          <Table className="w-full border-separate border-spacing-y-4">
            <TableHeader>
              <TableRow className="text-lg">
                <TableHead className="p-3 pl-4 flex gap-2 sm:gap-5 items-center">
                  <Checkbox
                    dashboard={true}
                    checked={
                      selectedOrders.length === filteredOrders.length && filteredOrders.length > 0
                    }
                    onCheckedChange={(c) => toggleSelectAll(!!c)}
                  />
                  <span>Order</span>
                </TableHead>
                <TableHead className="p-3 hidden md:table-cell">Date</TableHead>
                <TableHead className="p-3">Status</TableHead>
                <TableHead className="p-3 hidden lg:table-cell">Total</TableHead>
                <TableHead className="p-3 hidden md:table-cell"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredOrders.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:bg-gray-50 h-25 text-[16px]"
                >
                  <TableCell className="p-3 pl-4 md:pl-10 rounded-l-lg">
                    <div className="flex gap-2 sm:gap-5 items-center">
                      <Checkbox
                        dashboard={true}
                        checked={selectedOrders.includes(item.id)}
                        onCheckedChange={() => toggleSelectOrder(item.id)}
                      />
                      <div className="flex flex-col sm:flex-row sm:gap-2">
                        <span className="font-medium">{item.id}</span>
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-500">
                    {item.date}
                  </TableCell>

                  <TableCell className="p-3">
                    {item.status === "processing" && (
                      <span className="bg-[#0075FF] text-white rounded-md py-1 px-4 md:py-1.5 md:px-6">
                        Processing
                      </span>
                    )}
                    {item.status === "completed" && (
                      <span className="bg-[#52DF60] text-white rounded-md py-1 px-4 md:py-1.5 md:px-6">
                        Completed
                      </span>
                    )}
                    {item.status === "cancelled" && (
                      <span className="bg-[#FE5A53] text-white rounded-md py-1 px-4 md:py-1.5 md:px-6">
                        Cancelled
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="p-3 hidden lg:table-cell">
                    <span className="font-semibold">{item.total}</span>
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
