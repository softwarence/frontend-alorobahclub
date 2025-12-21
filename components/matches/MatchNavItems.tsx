"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { usePathname } from "next/navigation";

const MatchNavItems = () => {
  const pathname = usePathname(); // get current path

  // Helper to check if button is active
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { label: "Fixtures", path: "/matches" },
    { label: "Results", path: "/matches/results" },
    { label: "Tables", path: "#" },
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-between md:px-5 px-1 max-w-[1900px] mx-auto py-4">
        {/* Buttons */}
        <div className="flex md:gap-2 gap-1">
          {navItems.map((item) => (
            <Link key={item.path} href={`${item.path}`}>
              <Button
                variant="default"
                className={`
                font-thin text-sm px-2 py-1 md:text-base md:px-4 md:py-2 cut-corner-btn
                border-2 border-transparent hover:cursor-pointer
                ${isActive(item.path) ? "" : "bg-transparent border-2 border-black text-black   hover:bg-transparent hover:border-2 hover:border-black hover:text-black"}
              `}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Select */}
        <div>
          <Select defaultValue="all">
            <SelectTrigger className="border-black border-[1.9px] font-thin text-sm px-2 py-1 md:text-base md:px-4 md:py-2 cut-corner-btn">
              <SelectValue placeholder="All Competitions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Competitions</SelectItem>
              <SelectItem value="competition1">Competition 1</SelectItem>
              <SelectItem value="competition2">Competition 2</SelectItem>
              <SelectItem value="competition3">Competition 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default MatchNavItems;
