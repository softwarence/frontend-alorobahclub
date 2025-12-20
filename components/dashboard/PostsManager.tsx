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

const POSTS = [
  {
    id: 1,
    title: "Oral and dental health program for youth",
    category: "Health & fitness",
    published: "2025/01/18 at 6:40 pm",
  },
  {
    id: 2,
    title: "Tigers members attend first team training",
    category: "Health & fitness",
    published: "2025/01/18 at 11:40 pm",
  },
  {
    id: 3,
    title: "program for youth Health & fitness",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 4,
    title: "Tigers members attend first team training",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 5,
    title: "program for youth first team training",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 6,
    title: "Oral and dental health program for youth",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
  {
    id: 7,
    title: "Tigers members attend first team training",
    category: "Health & fitness",
    published: "2025/01/08 at 6:40 pm",
  },
];

export default function PostsManager() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const categories = ["All categories", ...Array.from(new Set(POSTS.map((p) => p.category)))];
  const dates = [
    "All dates",
    ...Array.from(new Set(POSTS.map((p) => p.published.split(" at ")[0]))),
  ];

  const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const filteredPosts = useMemo(() => {
    let result = [...POSTS];
    if (search.trim()) {
      const regex = new RegExp(escapeRegExp(search.trim()), "i");
      result = result.filter((p) => regex.test(p.title));
    }
    if (categoryFilter && categoryFilter !== "All categories") {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (dateFilter && dateFilter !== "All dates") {
      result = result.filter((p) => p.published.startsWith(dateFilter));
    }
    if (sort === "newest") result.sort((a, b) => b.id - a.id);
    if (sort === "oldest") result.sort((a, b) => a.id - b.id);
    return result;
  }, [search, categoryFilter, dateFilter, sort]);

  const allSelected =
    filteredPosts.length > 0 && filteredPosts.every((p) => selectedIds.includes(p.id));

  const toggleSelectAll = (checked: boolean) => {
    setSelectedIds(checked ? filteredPosts.map((p) => p.id) : []);
  };

  const toggleRow = (id: number) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <div className="min-h-70vh px-4 xl:px-0">
      <Card className="bg-transparent shadow-none border-0 pb-4 xl:pb-0">
        <CardContent className="p-0">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4 w-full">
            <p className="text-gray-500 text-sm md:text-base">
              <span className="font-bold">Published ({filteredPosts.length})</span> Draft (12)
            </p>

            <div className="flex flex-col lg:flex-row gap-3 xl:gap-4 items-stretch lg:items-center w-full xl:w-auto">
              <div className="flex items-center gap-2 w-full xl:w-auto">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="bg-white w-full xl:min-w-[350px] py-4.5 font-thin placeholder:text-lg text-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="dashboardOutline">Search</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:flex lg:flex-row gap-2 xl:gap-4">
                <Select onValueChange={setSort}>
                  <SelectTrigger className="w-full md:w-auto py-4.5 text-sm md:text-md bg-white text-black font-semibold">
                    <SelectValue placeholder="Sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-auto py-4.5 text-sm md:text-md bg-white text-black font-semibold">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={setDateFilter}>
                  <SelectTrigger className="w-full md:w-auto py-4.5 text-sm md:text-md bg-white text-black font-semibold">
                    <SelectValue placeholder="All dates" />
                  </SelectTrigger>
                  <SelectContent>
                    {dates.map((date) => (
                      <SelectItem key={date} value={date}>
                        {date}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="dashboardOutline" className="sm:col-span-3 lg:col-span-1">
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table Section */}
      <Card className="overflow-x-auto border-0 shadow-none bg-transparent mt-4">
        <CardContent className="p-0">
          <Table className="w-full border-separate border-spacing-y-4 border-spacing-x-0 min-w-[800px] xl:min-w-full">
            <TableHeader>
              <TableRow className="text-lg hover:bg-transparent border-none">
                <TableHead className="p-3 pl-6 xl:pl-10 w-[55%] border-none">
                  <div className="flex items-center gap-5">
                    <Checkbox
                      dashboard={true}
                      checked={allSelected}
                      onCheckedChange={(v) => toggleSelectAll(!!v)}
                    />
                    <span>Title</span>
                  </div>
                </TableHead>
                <TableHead className="p-3 border-none w-[25%]">Categories</TableHead>
                <TableHead className="p-3 border-none">Published</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredPosts.map((item) => (
                <TableRow
                  key={item.id}
                  // drop-shadow applies to the whole group of cells as one shape
                  className="group h-20 xl:h-25 border-none bg-transparent hover:bg-transparent transition-all drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                >
                  {/* Left Cell */}
                  <TableCell className="p-3 pl-6 xl:pl-10 rounded-l-2xl border-none bg-white group-hover:bg-gray-50 transition-colors">
                    <div className="flex gap-5 items-center">
                      <Checkbox
                        checked={selectedIds.includes(item.id)}
                        onCheckedChange={() => toggleRow(item.id)}
                        dashboard={true}
                      />
                      <p className="font-medium truncate max-w-[350px] text-gray-900">
                        {item.title}
                      </p>
                    </div>
                  </TableCell>

                  {/* Middle Cell */}
                  <TableCell className="p-3 border-none bg-white group-hover:bg-gray-50 transition-colors text-gray-600">
                    {item.category}
                  </TableCell>

                  {/* Right Cell */}
                  <TableCell className="p-3 rounded-r-2xl border-none bg-white group-hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center pr-4">
                      <span className="text-gray-500 whitespace-nowrap">{item.published}</span>

                      <Ellipsis className="" />
                    </div>
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
