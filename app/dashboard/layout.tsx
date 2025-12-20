"use client";

import Footer from "@/components/shared/Footer";
import StoreHeader from "@/components/store/StoreHeader";
import { SidebarContent } from "@/components/dashboard/SidebarContent";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);
  return (
    <>
      <div className="bg h-40">
        <StoreHeader />
      </div>

      <main className="w-full mx-auto md:px-2">
        <div className="flex lg:hidden px-4 py-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Menu className="w-4 h-4" />
                Menu
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="p-0 w-[350px]">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex flex-col md:flex-row ">
          <aside className="hidden lg:flex w-55 lg:w-95">
            <div className="mr-0 dark:mr-3 sticky top-25 w-full">
              <SidebarContent />
            </div>
          </aside>

          <section
            className="md:flex-1 bg-[#EEF0F4] dark:bg-neutral-950
            md:shadow md:min-h-[70vh] overflow-hidden lg:py-10 xl:px-15 py-5 md:px-5 px-3"
          >
            {children}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
