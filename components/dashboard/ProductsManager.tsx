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
    if (search) {
      result = result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }
    if (stockFilter) {
      result = result.filter((p) => p.stock === stockFilter);
    }
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
    <div className="min-h-70vh px-4 md:px-0">
      {/* Filters Section */}
      <Card className="bg-transparent shadow-none border-0 pb-4 md:pb-0">
        <CardContent className="p-0">
          {/* Container: Stacks on mobile, splits on XL to maintain your design */}
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 w-full">
            {/* Left side: Status counts */}
            <div className="flex items-center gap-2">
              <p className="text-gray-500 text-sm md:text-base">
                <span className="font-bold">Published ({POSTS.length}) </span> Draft (12)
              </p>
            </div>

            {/* Right side: Search and Selects */}
            <div className="flex flex-col lg:flex-row flex-wrap xl:flex-nowrap gap-3 md:gap-4 w-full xl:w-auto items-stretch lg:items-center">
              {/* Search Group */}
              <div className="flex items-center gap-2 w-full xl:w-auto">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="bg-white w-full xl:min-w-[350px] py-4.5 font-thin placeholder:text-lg text-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant={"dashboardOutline"}>Search</Button>
              </div>

              {/* Filters Group: 2x2 grid on mobile, row on tablet+ */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 md:gap-4">
                <Select onValueChange={(v) => setSort(v)}>
                  <SelectTrigger className="w-full md:w-auto py-4.5 text-sm md:text-md bg-white text-black font-semibold">
                    <SelectValue placeholder="Sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(v) => setCategoryFilter(v)}>
                  <SelectTrigger className="w-full md:w-auto py-4.5 text-sm md:text-md bg-white text-black font-semibold">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cat1">Category 1</SelectItem>
                    <SelectItem value="cat2">Category 2</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(v) => setStockFilter(v)}>
                  <SelectTrigger className="w-full md:w-auto py-4.5 text-sm md:text-md bg-white text-black font-semibold">
                    <SelectValue placeholder="Stock" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="in">In stock</SelectItem>
                    <SelectItem value="out">Out of stock</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant={"dashboardOutline"} className="w-full sm:w-auto">
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
          <Table className="w-full border-separate border-spacing-y-4 min-w-[800px] lg:min-w-full">
            <TableHeader>
              <TableRow className="text-lg border-none hover:bg-transparent">
                <TableHead className="p-3 pl-6 md:pl-10">
                  <Checkbox
                    dashboard={true}
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

            <TableBody>
              {filteredProducts.map((item) => (
                <TableRow
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm hover:bg-gray-50 border-none transition-colors"
                >
                  <TableCell className="p-3 pl-6 md:pl-10 rounded-l-lg">
                    <Checkbox
                      dashboard={true}
                      checked={selectedProducts.includes(item.id)}
                      onCheckedChange={() => toggleSelectProduct(item.id)}
                    />
                  </TableCell>

                  <TableCell className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative h-[80px] w-[80px] shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="rounded object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium truncate max-w-[150px] md:max-w-full">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500 md:hidden">{item.category}</p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-600">
                    {item.category}
                  </TableCell>

                  <TableCell className="p-3 font-medium whitespace-nowrap">
                    {item.price} SAR
                  </TableCell>

                  <TableCell className="p-3 hidden lg:table-cell text-gray-600">
                    {item.sku}
                  </TableCell>

                  <TableCell className="p-3">
                    {item.stock === "in" ? (
                      <span className="text-green-600 font-medium whitespace-nowrap">In stock</span>
                    ) : (
                      <span className="text-red-500 font-medium whitespace-nowrap">
                        Out of stock
                      </span>
                    )}
                  </TableCell>

                  <TableCell className="p-3 hidden md:table-cell text-gray-500">
                    {item.published}
                  </TableCell>

                  <TableCell className="p-3 rounded-r-lg text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Ellipsis className="h-5 w-5 text-gray-500" />
                    </Button>
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
