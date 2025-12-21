"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, ShoppingCart, DollarSign } from "lucide-react";

type StatItem = {
  title: string;
  value: string;
  icon: React.ElementType;
  isSAR?: true;
};

const stats: StatItem[] = [
  { title: "New Subscribers", value: "24", icon: Mail },
  { title: "New Orders", value: "134", icon: ShoppingCart },
  { title: "Total Sales", value: "5678", isSAR: true, icon: DollarSign },
];

export default function Cards() {
  return (
    <div className="bg-gray-100 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title} className="rounded-3xl shadow-sm border-0">
              <CardContent className="px-13 py-5 flex flex-col gap-8">
                <h3 className="text-gray-600 font-semibold px-5">{item.title}</h3>

                <div className="text-6xl px-5">
                  {item.value}
                  {item.isSAR && <span className="text-lg pl-3"> SAR </span>}
                </div>

                <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3">
                  <span className="text-gray-500 pl-4">In last 7 days</span>

                  <div className="w-15 h-15 bg-gray-900 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={18} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
