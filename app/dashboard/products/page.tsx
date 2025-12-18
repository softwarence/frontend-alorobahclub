import Filters from "@/components/dashboard/Filters";
import ProductTable from "@/components/dashboard/ProductTable";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className=" sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex justify-between pb-3 ">
          <h1 className="text-3xl pb-4">Products</h1>
          <select className="border px-2  rounded-md text-sm">
            <option>Bulk actions</option>
            <option>Delete</option>
          </select>
        </div>
        <Link
          href="/dashboard/product"
          className="bg-black text-white px-3 py-3  rounded w-full sm:w-auto"
        >
          Add New Product
        </Link>
      </div>

      {/* Status */}
      <p className="text-sm text-gray-500 pb-4 pt-3">
        <span className="font-bold">Published (56) </span> Draft (12)
      </p>

      {/* Filters */}
      <Filters />

      {/* Table */}
      <ProductTable />
    </div>
  );
}
