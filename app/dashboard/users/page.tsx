"use client";

import { useState } from "react";
import { MoreVertical, Search } from "lucide-react";

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
    joined: "2025/01/13 at 6:40 pm",
  },
  {
    id: 1120,
    name: "Al Yasin",
    email: "example@yahoo.com",
    address: "Al Safa District, Jeddah 23454",
    joined: "2025/01/13 at 6:40 pm",
  },
  {
    id: 1166,
    name: "Abu Bakar Zaud",
    email: "example@yahoo.com",
    address: "Al Rawdah District, Riyadh 13212",
    joined: "2025/01/13 at 6:40 pm",
  },
  {
    id: 2678,
    name: "Kawsar Ibn",
    email: "example@yahoo.com",
    address: "Al Safa District, Jeddah 23454",
    joined: "2025/01/13 at 6:40 pm",
  },
  {
    id: 3322,
    name: "Ismail Hossain",
    email: "example@yahoo.com",
    address: "Al Rawdah District, Riyadh 13212",
    joined: "2025/01/13 at 6:40 pm",
  },
  {
    id: 4322,
    name: "Jakir Hossain",
    email: "example@yahoo.com",
    address: "Al Rawdah District, Riyadh 13212",
    joined: "2025/01/13 at 6:40 pm",
  },
];

export default function UsersPage() {
  const [query, setQuery] = useState("");

  const filteredUsers = USERS.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen space-y-4">
      {/* Header */}
      <div>
        <div className="flex justify-between">
          <h1 className="text-3xl pb-4">Users</h1>
          <select className="border px-2 py-1 rounded-md text-sm">
            <option>Bulk actions</option>
            <option>Delete</option>
          </select>
        </div>

        <div className="flex  items-center pt-5 pb-3 justify-between space-y-4 md:space-y-0 flex-col md:flex-row">
          <div className="">
            <p className="text-sm font-bold text-gray-500">Total ({USERS.length})</p>
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
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Address</th>
              <th className="p-4 text-left">Joined</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 border-b-8 border-gray-100 rounded-lg">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4 font-medium">
                  #{user.id} {user.name}
                </td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-600">{user.address}</td>
                <td className="p-4 text-gray-600">{user.joined}</td>
                <td className="p-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-gray-100">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
