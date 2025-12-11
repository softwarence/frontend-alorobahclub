"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type FilterKey = "7days" | "1month" | "1year";

export default function ProductSalesChart() {
  const [filter, setFilter] = useState<FilterKey>("7days");

  const dataSets: Record<FilterKey, { name: string; value: number }[]> = {
    "7days": [
      { name: "Mon", value: 600 },
      { name: "Tue", value: 450 },
      { name: "Wed", value: 950 },
      { name: "Thu", value: 650 },
      { name: "Fri", value: 720 },
      { name: "Sat", value: 500 },
      { name: "Sun", value: 680 },
    ],
    "1month": [
      { name: "Week 1", value: 400 },
      { name: "Week 2", value: 800 },
      { name: "Week 3", value: 500 },
      { name: "Week 4", value: 900 },
    ],
    "1year": [
      { name: "Jan", value: 1000 },
      { name: "Feb", value: 1200 },
      { name: "Mar", value: 900 },
      { name: "Apr", value: 1400 },
      { name: "May", value: 800 },
      { name: "Jun", value: 1100 },
      { name: "Jul", value: 900 },
      { name: "Aug", value: 1500 },
      { name: "Sep", value: 1300 },
      { name: "Oct", value: 900 },
      { name: "Nov", value: 1600 },
      { name: "Dec", value: 1400 },
    ],
  };

  return (
    <div className="bg-gray-100 p-6 ">
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        {/* Filters */}

        <div className=" flex  gap-4 mt-4 p-2">
          <div>
            <h2 className="text-xl  text-gray-800">Product Sales</h2>
          </div>
          <div className="flex  justify-center items-center  m-auto gap-2">
            <button
              onClick={() => setFilter("7days")}
              className={`px-4  rounded-full border-1 text-sm ${
                filter === "7days" ? "bg-blue-600 text-white" : " text-gray-600"
              }`}
            >
              Last 7 days
            </button>

            <button
              onClick={() => setFilter("1month")}
              className={`px-4  rounded-full border-1 text-sm ${
                filter === "1month" ? "bg-blue-600 text-white" : " text-gray-600"
              }`}
            >
              Last month
            </button>

            <button
              onClick={() => setFilter("1year")}
              className={`px-4  rounded-full border-1 text-sm ${
                filter === "1year" ? "bg-blue-600 text-white" : " text-gray-600"
              }`}
            >
              Last year
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-6 w-full h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataSets[filter]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FFD500" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
