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

    // Pattern match search (title only)
    if (search.trim()) {
      const regex = new RegExp(escapeRegExp(search.trim()), "i");
      result = result.filter((p) => regex.test(p.title));
    }

    // Category filter
    if (categoryFilter && categoryFilter !== "All categories") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Date filter
    if (dateFilter && dateFilter !== "All dates") {
      result = result.filter((p) => p.published.startsWith(dateFilter));
    }

    // Sorting
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
    <div className="min-h-70vh">
      {/* Filters */}
      <Card className="bg-transparent shadow-none border-0 pb-0">
        <CardContent className="pl-0">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between items-center w-full">
            <p className="text-gray-500">
              <span className="font-bold">Published ({filteredPosts.length})</span> Draft (12)
            </p>

            <div className="flex gap-4 justify-center items-center">
              <Input
                type="text"
                placeholder="Search products..."
                className="bg-white min-w-[350px] py-4.5 font-thin placeholder:text-lg text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button variant="dashboardOutline" className="-ml-2">
                Search
              </Button>

              <Select onValueChange={setSort}>
                <SelectTrigger className="py-4.5 text-md bg-white text-black font-semibold">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setCategoryFilter}>
                <SelectTrigger className="py-4.5 text-md bg-white text-black font-semibold">
                  <SelectValue placeholder="Select a category" />
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
                <SelectTrigger className="py-4.5 text-md bg-white text-black font-semibold">
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

              <Button variant="dashboardOutline">Filter</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="overflow-x-auto border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <Table className="w-full border-separate border-spacing-y-5">
            <TableHeader>
              <TableRow className="text-lg">
                <TableHead className="p-3 pl-10 w-[55%] flex items-center gap-5">
                  <Checkbox
                    isShowIcon={false}
                    checked={allSelected}
                    onCheckedChange={(v) => toggleSelectAll(!!v)}
                    className="h-6 w-6 border-black data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
                  />
                  <span>Title</span>
                </TableHead>

                <TableHead className="p-3 hidden md:table-cell w-[25%]">Categories</TableHead>

                <TableHead className="p-3 hidden md:table-cell w-[20%]">Published</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredPosts.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:bg-gray-50 h-25"
                >
                  <TableCell className="p-3 pl-10 rounded-l-lg">
                    <div className="flex gap-5 items-center">
                      <Checkbox
                        isShowIcon={false}
                        checked={selectedIds.includes(item.id)}
                        onCheckedChange={() => toggleRow(item.id)}
                        className="h-6 w-6 border-black data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
                      />
                      <p className="font-medium">{item.title}</p>
                    </div>
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-600">
                    {item.category}
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-500 rounded-r-lg">
                    <div className="flex gap-5 items-center">
                      {item.published}
                      <Ellipsis />
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
