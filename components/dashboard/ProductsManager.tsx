"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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

import { POSTS as initialProducts, POSTS } from "./productsData";

import { Ellipsis } from "lucide-react";

export default function ProductsManager() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [stockFilter, setStockFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Search
    if (search) {
      result = result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }

    // Category filter
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Stock filter
    if (stockFilter) {
      result = result.filter((p) => p.stock === stockFilter);
    }

    // Sorting
    if (sort === "newest") {
      result.sort((a, b) => b.id - a.id);
    } else if (sort === "oldest") {
      result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [search, categoryFilter, stockFilter, sort]);

  const toggleSelectAll = (checked: boolean) => {
    setSelectedProducts(checked ? filteredProducts.map((p) => p.id) : []);
  };

  const toggleSelectProduct = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-70vh">
      {/* Filters */}
      <Card className="bg-transparent shadow-none border-0 pb-0">
        <CardContent className="pl-0">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between items-center w-full">
            <div className="flex flex-col items-center sm:flex-row gap-2">
              {/* Status */}
              <p className="text-gray-500">
                <span className="font-bold">Published ({POSTS.length}) </span> Draft (12)
              </p>
            </div>

            <div className="flex gap-4 justify-center items-center">
              <Input
                type="text"
                placeholder="Search products..."
                className="bg-white min-w-[350px] py-4.5 font-thin placeholder:text-lg text-lg "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant={"dashboardOutline"} className="-ml-2">
                Search
              </Button>

              <Select onValueChange={(v) => setSort(v)}>
                <SelectTrigger className="py-4.5 text-md  bg-white text-black font-semibold">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => setCategoryFilter(v)}>
                <SelectTrigger className="py-4.5 text-md  bg-white text-black font-semibold">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">Category 1</SelectItem>
                  <SelectItem value="cat2">Category 2</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(v) => setStockFilter(v)}>
                <SelectTrigger className="py-4.5 text-md  bg-white text-black font-semibold">
                  <SelectValue placeholder="Stock status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="in">In stock</SelectItem>
                  <SelectItem value="out">Out of stock</SelectItem>
                </SelectContent>
              </Select>

              <Button variant={"dashboardOutline"}>Filter</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="overflow-x-auto border-0 shadow-none bg-transparent">
        <CardContent className="p-0">
          <Table className="w-full border-separate border-spacing-y-4">
            <TableHeader className="">
              <TableRow className="text-lg">
                <TableHead className="p-3 pl-10">
                  <Checkbox
                    isShowIcon={false}
                    className="h-6 w-6 border-black data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
                    checked={
                      selectedProducts.length === filteredProducts.length &&
                      filteredProducts.length > 0
                    }
                    onCheckedChange={(checked) => toggleSelectAll(!!checked)}
                  />
                </TableHead>
                <TableHead className="p-3">Product</TableHead>
                <TableHead className="p-3 hidden md:table-cell">Category</TableHead>
                <TableHead className="p-3">Price</TableHead>
                <TableHead className="p-3 hidden lg:table-cell">SKU</TableHead>
                <TableHead className="p-3">Stock</TableHead>
                <TableHead className="p-3 hidden md:table-cell">Published</TableHead>
                <TableHead className="p-3"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="overflow-hidden">
              {filteredProducts.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:bg-gray-50"
                >
                  <TableCell className="p-3 pl-10 rounded-l-lg">
                    <Checkbox
                      isShowIcon={false}
                      className="h-6 w-6  data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white border-black"
                      checked={selectedProducts.includes(item.id)}
                      onCheckedChange={() => toggleSelectProduct(item.id)}
                    />
                  </TableCell>

                  <TableCell className="p-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={55}
                        height={50}
                        className="rounded shrink-0"
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-xs text-gray-500 md:hidden">{item.category}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-600">
                    {item.category}
                  </TableCell>
                  <TableCell className="p-3 font-medium">{item.price} SAR</TableCell>
                  <TableCell className="p-3 hidden lg:table-cell text-gray-600">
                    {item.sku}
                  </TableCell>
                  <TableCell className="p-3">
                    {item.stock === "in" ? (
                      <span className="text-green-600 font-medium">In stock</span>
                    ) : (
                      <span className="text-red-500 font-medium">Out of stock</span>
                    )}
                  </TableCell>
                  <TableCell className="p-3 hidden md:table-cell text-gray-500">
                    {item.published}
                  </TableCell>
                  <TableCell className="p-3 hidden md:table-cell text-gray-500 rounded-r-lg">
                    <Ellipsis></Ellipsis>
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
