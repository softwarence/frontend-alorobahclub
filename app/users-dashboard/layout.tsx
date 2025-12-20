"use client";
import Footer from "@/components/shared/Footer";
import StoreHeader from "@/components/store/StoreHeader";
import Link from "next/link";
import { ChartNoAxesColumnIncreasing, ShoppingBasket, StickyNote, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      name: "Cart",
      icon: <ChartNoAxesColumnIncreasing className="w-4 h-4" />,
      href: "/users-dashboard/cart",
    },
    {
      name: "Orders",
      icon: <ShoppingBasket className="w-4 h-4" />,
      href: "/users-dashboard/orders",
    },
    {
      name: "Personal Info",
      icon: <StickyNote className="w-4 h-4" />,
      href: "/users-dashboard/personal-info",
    },
  ];

  return (
    <>
      <div className="bg h-40">
        <StoreHeader></StoreHeader>
      </div>
      <main className="max-w-[1440px] mx-auto md:px-2 md:py-6 ">
        <h1 className=" text-2xl md:px-5 md:pb-3">Menu</h1>
        <div className="flex flex-col md:flex-row pt-3">
          {/* === Sidebar === */}
          <aside
            className="w-full md:w-55 lg:w-65  border-gray-200
          dark:border-neutral-800 md:flex flex-col gap-4 hidden"
          >
            <div className="dark:bg-neutral-900 pt-0 dark:pt-5 mr-0 dark:mr-3 rounded-lg pb-10 px-5 flex flex-col justify-between min-h-[70vh] sticky top-25 ">
              <nav className="flex flex-col gap-2 ">
                {navItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 rounded
                  hover:bg-amber-400 bg-gray-100 cut-corner-btn hover:shadow
                  text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors "
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2">
                <div>
                  <Link href="/property/details" passHref>
                    <Button variant="outline" className="w-full gap-2 justify-center">
                      General
                    </Button>
                  </Link>

                  <Button
                    variant="default"
                    className="w-full gap-2 justify-center bg-red-700 mt-2 hover:bg-red-800"
                  >
                    <LogOut className="w-4 h-4" /> Log Out
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* === Main Content Area === */}
          <section
            className="md:flex-1 bg-white dark:bg-neutral-950 md:border md:border-gray-200 md:dark:border-neutral-800
              rounded-lg md:p-6 md:shadow md:min-h-[70vh]"
          >
            {children}
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
