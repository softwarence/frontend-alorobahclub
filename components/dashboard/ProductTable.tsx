// app/components/dashboard/ProductTable.tsx
import Image from "next/image";
import { POSTS } from "./productsData";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductTable() {
  return (
    <Card className="overflow-x-auto">
      <CardContent className="p-0">
        <Table className="min-w-[900px]">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="p-3">
                <Checkbox />
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
            {POSTS.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-gray-50 border-b-8 border-gray-100 rounded-lg"
              >
                <TableCell className="p-3">
                  <Checkbox />
                </TableCell>

                {/* Product */}
                <TableCell className="p-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={50}
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

                <TableCell className="p-3 hidden lg:table-cell text-gray-600">{item.sku}</TableCell>

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

                <TableCell className="p-3 text-xl text-right">⋮</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
