"use client";

import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to adjust chart props that don't support CSS classes
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-gray-100 pt-10 md:pt-20 md:px-0">
      {/* Header - Stack on mobile, Grid on desktop */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-1">
          <h2 className="text-2xl md:text-3xl text-gray-600">Product Sales</h2>
        </div>

        {/* Filters - Wrap on mobile, Gap adjusted */}
        <div className="flex flex-wrap items-center col-span-2 gap-4 md:gap-8 text-lg font-light">
          {(["7days", "1month", "1year"] as FilterKey[]).map((key) => (
            <Label
              key={key}
              htmlFor={key}
              className={cn(
                "flex items-center gap-2 rounded-full cursor-pointer hover:bg-gray-200/50 p-1 transition-colors"
              )}
              onClick={() => setFilter(key)}
            >
              <Checkbox
                isShowIcon={false}
                id={key}
                checked={filter === key}
                className="h-5 w-5 md:h-6 md:w-6 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 rounded-[7px] bg-white"
              />
              <span className="text-base md:text-lg font-light whitespace-nowrap">
                {key === "7days" ? "Last 7 days" : key === "1month" ? "Last month" : "Last year"}
              </span>
            </Label>
          ))}
        </div>
      </div>

      {/* Card */}
      <Card className="rounded-2xl md:rounded-3xl shadow-none overflow-hidden">
        <CardContent className="p-2 md:p-6">
          <div className="h-[300px] md:h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={DATA[filter]}
                barCategoryGap={isMobile ? 5 : 10}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
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
                  tick={{ fill: "#9CA3AF", fontSize: isMobile ? 10 : 12 }}
                  // Large padding is removed on mobile to prevent squishing
                  padding={isMobile ? { left: 10, right: 10 } : { left: 100, right: 100 }}
                />

                <YAxis
                  // Domain adjusted to 'auto' to support high values in '1year'
                  domain={[0, "auto"]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9CA3AF", fontSize: isMobile ? 10 : 12 }}
                  tickFormatter={(value) => `$${value}`}
                  width={isMobile ? 40 : 60}
                />

                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.04)" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />

                <Bar
                  dataKey="value"
                  fill="#FFE000"
                  radius={[10, 10, 10, 10]}
                  // barSize is reduced for mobile to fit more bars (especially for '1year')
                  barSize={isMobile ? 20 : 65}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
