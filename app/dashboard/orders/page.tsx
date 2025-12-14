"use client";

import { useState } from "react";

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

const statusStyles: Record<string, string> = {
  processing: "bg-blue-500",
  completed: "bg-green-500",
  cancelled: "bg-red-500",
};

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filteredOrders = ORDERS.filter(
    (order) =>
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen space-y-4">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-3xl pb-4">Orders</h1>
        <select className="border px-2 py-1 rounded-md text-sm">
          <option>Bulk actions</option>
          <option>Delete</option>
        </select>
      </div>

      {/* Status Tabs */}
      <div className="flex flex-wrap gap-3 text-sm">
        <button className="font-medium">All (90)</button>
        <button className="text-gray-500">Pending (26)</button>
        <button className="text-gray-500">Completed (56)</button>
        <button className="text-gray-500">Cancelled (8)</button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4">
        <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search order..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-2 rounded-md text-sm w-full md:w-64"
            />

            <button className="border px-3 py-2  rounded-md text-sm">Search</button>
          </div>

          <select className="border px-3 py-2 rounded-md text-sm">
            <option>Default sorting</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>

          <select className="border px-3 py-2 rounded-md text-sm">
            <option>All dates</option>
            <option>January 2025</option>
          </select>

          <button className="border px-3 py-2 rounded-md text-sm">Filter</button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 w-10">
                <input type="checkbox" />
              </th>
              <th className="p-3">Order</th>
              <th className="p-3 hidden md:table-cell">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50 border-b-8  border-gray-100 rounded-lg"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td className="p-3">
                  <div className="font-medium">{order.id}</div>
                  <div className="text-gray-500 text-xs">{order.title}</div>
                </td>

                <td className="p-3 hidden md:table-cell text-gray-500">{order.date}</td>

                <td className="p-3">
                  <span
                    className={`text-white text-xs px-2 py-1 rounded  ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-3 font-medium">{order.total}</td>

                <td className="p-3 text-gray-400 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
