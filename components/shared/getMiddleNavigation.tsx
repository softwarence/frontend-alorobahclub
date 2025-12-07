import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GetMiddleNavigation = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News & Media", href: "/news" },
    { name: "Team", href: "/team" },
    { name: "Matches", href: "/matches" },
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
                    {item.name}
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

export default GetMiddleNavigation;
