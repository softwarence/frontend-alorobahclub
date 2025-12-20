"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

import { Card, CardContent } from "@/components/ui/card";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type FilterKey = "7days" | "1month" | "1year";

const DATA: Record<FilterKey, { name: string; value: number }[]> = {
  "7days": [
    { name: "Mon", value: 600 },
    { name: "Tue", value: 450 },
    { name: "Wed", value: 920 },
    { name: "Thu", value: 630 },
    { name: "Fri", value: 710 },
    { name: "Sat", value: 500 },
    { name: "Sun", value: 660 },
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

export default function ProductSalesChart() {
  const [filter, setFilter] = useState<FilterKey>("7days");

  return (
    <div className="bg-gray-100 pt-20">
      {/* Header */}
      <div className="grid grid-cols-3 mb-8">
        <div className="col-span-1">
          <h2 className="text-3xl text-gray-600">Product Sales</h2>
        </div>

        <div className="flex items-center col-span-2 gap-8 text-lg font-light">
          {(["7days", "1month", "1year"] as FilterKey[]).map((key) => (
            <Label
              key={key}
              htmlFor={key}
              className={cn(
                "flex items-center gap-2 rounded-full cursor-pointer hover:bg-gray-100"
              )}
              onClick={() => setFilter(key)}
            >
              <Checkbox
                isShowIcon={false}
                id={key}
                checked={filter === key}
                className="h-6 w-6  data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
              />
              <span className="text-lg font-light">
                {key === "7days" ? "Last 7 days" : key === "1month" ? "Last month" : "Last year"}
              </span>
            </Label>
          ))}
        </div>
      </div>

      {/* Card */}
      <Card className="rounded-3xl shadow-none">
        <CardContent className="p-6">
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={DATA[filter]}
                /* barCategoryGap sets the distance between the bar groups */
                barCategoryGap={10}
                /* margin provides overall container spacing */
                margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
              >
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  stroke="#DBDBDB"
                  strokeDasharray="0"
                />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  padding={{ left: 100, right: 100 }}
                />

                <YAxis
                  domain={[200, 1000]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />

                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.04)" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />

                <Bar dataKey="value" fill="#FFE000" radius={[10, 10, 10, 10]} barSize={65} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
