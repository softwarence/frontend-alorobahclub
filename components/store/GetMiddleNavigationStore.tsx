import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import downArrow from "@/public/assets/downArrow_white.svg";

const GetMiddleNavigationStore = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "New 25/26", href: "/" },
    { name: "Apparel", href: "/about" },
    { name: "Training", href: "/news" },
    { name: "Accessories", href: "/team" },
    { name: "Outlet", href: "/matches" },
  ];
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="flex md:gap-5 xl:gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <NavigationMenuItem key={item.href} className="">
                <NavigationMenuLink
                  asChild
                  className={`
                        bg-transparent
                        hover:bg-transparent
                        focus:bg-transparent
                        rounded-none
                        transition-colors
                        ${active ? "text-[#FFE000] !important" : "text-white !important"}
                        `}
                >
                  <Link
                    href={item.href}
                    className={`
                            uppercase
                            font-bold
                            p-0
                            no-underline
                            ${active ? "text-[#FFE000]" : "text-white"}
                            hover:!text-[#FFE000]
                            focus:!text-[#FFE000]
                        `}
                  >
                    <div className="flex gap-6">
                      {item.name === "Outlet" ? (
                        <span className="text-[#FE5A53]">{item.name}</span>
                      ) : (
                        <>{item.name}</>
                      )}
                      {(item.name === "New 25/26" || item.name === "Apparel") && (
                        <Image src={downArrow} className="pt-1" alt=""></Image>
                      )}
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default GetMiddleNavigationStore;
