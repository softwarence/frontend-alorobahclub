"use client";

import { Mail, ShoppingCart, DollarSign } from "lucide-react";

export default function Cards() {
  const items = [
    {
      title: "New Subscribers",
      value: "24",
      icon: <Mail className="text-white" size={18} />,
    },
    {
      title: "New Orders",
      value: "134",
      icon: <ShoppingCart className="text-white" size={18} />,
    },
    {
      title: "Total Sales",
      value: "5678 SAR",
      icon: <DollarSign className="text-white" size={18} />,
    },
  ];

  return (
    <div className="bg-gray-100 p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-sm">
            <h3 className="text-gray-600 text-sm">{item.title}</h3>

            <div className="text-4xl font-semibold mt-2">{item.value}</div>

            {/* Bottom section */}
            <div className="mt-6 flex items-center justify-between bg-gray-100 rounded-full px-4 py-3">
              <span className="text-gray-500 text-sm">In last 7 days</span>

              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
