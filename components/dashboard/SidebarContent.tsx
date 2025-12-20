"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import {
  ChartNoAxesColumnIncreasing,
  ShoppingBasket,
  StickyNote,
  Mail,
  LogOut,
  ShoppingCart,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
};
// ChartNoAxesColumnIncreasing, ShoppingBasket, StickyNote,
export function SidebarContent() {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleSelectAll = (checked: boolean) => {
    setIsAdmin(checked);
  };

  const adminItem = [
    { name: "Overview", href: "/dashboard", icon: ChartNoAxesColumnIncreasing },
    { name: "Products", href: "/dashboard/products", icon: ShoppingBasket },
    { name: "Posts", href: "/dashboard/posts", icon: StickyNote },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Subscribers", href: "/dashboard/subscribers", icon: Mail },
  ];

  const userItem = [
    { name: "Cart", href: "/dashboard/cart", icon: ChartNoAxesColumnIncreasing },
    { name: "Order", href: "/dashboard/user-orders", icon: ShoppingBasket },
    { name: "Personal Info", href: "/dashboard/personal-info", icon: StickyNote },
  ];

  const navItems: NavItem[] = isAdmin ? [...adminItem] : [...userItem];

  return (
    <div className="dark:bg-neutral-900 rounded-lg p-10  flex flex-col justify-between min-h-[70vh]">
      <nav className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h1 className="font-semibold">Menu</h1>
          <Checkbox
            isShowIcon={false}
            className="h-6 w-6 border-black rounded-[7px] bg-white data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
            checked={isAdmin}
            onCheckedChange={toggleSelectAll}
          />
        </div>

        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "relative flex items-center gap-3 px-3 py-3 rounded font-medium transition-all",
                "hover:bg-[#FFE000] hover:shadow cut-corner-md pl-12",
                isActive
                  ? "bg-[#FFE000] text-black shadow"
                  : "bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-gray-300"
              )}
            >
              <Icon className={clsx("w-4 h-4", isActive ? "text-black" : "text-current")} />
              {item.name}
            </Link>
          );
        })}

        <div className="flex flex-col gap-4 pt-10">
          <h2 className="text-md font-semibold">General</h2>
          <Button
            variant="destructive"
            className="w-full gap-2 justify-center cut-corner-md"
            size={"dashboardDefault"}
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>
      </nav>
    </div>
  );
}
