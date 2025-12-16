"use client";

import { useState } from "react";

const SUBSCRIBERS = [
  {
    id: "#1127",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "subscribed",
    date: "2025/01/13 at 6:40 pm",
  },
  {
    id: "#1124",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "subscribed",
    date: "2025/01/13 at 6:40 pm",
  },
  {
    id: "#1120",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "unsubscribed",
    date: "2025/01/13 at 6:40 pm",
  },
  {
    id: "#1166",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "subscribed",
    date: "2025/01/13 at 6:40 pm",
  },
  {
    id: "#2678",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "unsubscribed",
    date: "2025/01/13 at 6:40 pm",
  },
  {
    id: "#3232",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "subscribed",
    date: "2025/01/13 at 6:40 pm",
  },
  {
    id: "#4232",
    name: "اشتراك وجبات اسبوعي",
    email: "example@yahoo.com",
    status: "subscribed",
    date: "2025/01/13 at 6:40 pm",
  },
];

const statusStyle: Record<string, string> = {
  subscribed: "text-green-500",
  unsubscribed: "text-red-500",
};

export default function SubscribersPage() {
  const [search] = useState("");

  const filteredSubscribers = SUBSCRIBERS.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen space-y-4">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-3xl pb-4">Subscribers</h1>
        <select className="border px-2 py-1 rounded-md text-sm">
          <option>Bulk actions</option>
          <option>Delete</option>
        </select>
      </div>

      <div className="flex  items-center pt-5 pb-3 justify-between space-y-4 md:space-y-0 flex-col md:flex-row">
        <div className="">
          <p className="text-sm font-bold text-gray-500">Total ({SUBSCRIBERS.length})</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search products..."
              className="border px-3 py-2 rounded text-sm w-full sm:w-64"
            />
            <button className="border px-4 py-2 rounded text-sm w-full sm:w-auto">Search</button>
          </div>

          <select className="border px-2 py-1 rounded-md text-sm">
            <option>Default sorting</option>
            <option>Delete</option>
          </select>
          <button className="border px-3 py-2 rounded-md text-sm">Filter</button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="p-3 w-10">
                <input type="checkbox" />
              </th>
              <th className="p-3">Name</th>
              <th className="p-3 hidden md:table-cell">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3 hidden md:table-cell">Date</th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>

          <tbody>
            {filteredSubscribers.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50 border-b-8 border-gray-100 rounded-lg">
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td className="p-3">
                  <div className="font-medium">{sub.id}</div>
                  <div className="text-gray-500 text-xs">{sub.name}</div>
                </td>

                <td className="p-3 hidden md:table-cell text-gray-500">{sub.email}</td>

                <td className="p-3 font-medium">
                  <span className={statusStyle[sub.status]}>{sub.status}</span>
                </td>

                <td className="p-3 hidden md:table-cell text-gray-500">{sub.date}</td>

                <td className="p-3 text-gray-400 cursor-pointer">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
