"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { appMenu, socialsLinks, contactLinks } from "@/lib/config";
import { MenuList } from "@/components/menu/menu-list";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const MobileMenu = ({ className }: { className?: string }) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Icons.alignJustifyIcon className={cn("md:hidden", className)} />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="m-4">
      <DropdownMenuLabel>
        <h3>Menu</h3>
        <DropdownMenuSeparator />
        <MenuList items={appMenu} />
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>
        <h3>Me suivre</h3>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <MenuList items={socialsLinks} />
      <DropdownMenuSeparator />
      <DropdownMenuLabel>
        <h3>Me contacter</h3>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <MenuList items={contactLinks} />
    </DropdownMenuContent>
  </DropdownMenu>
);

export function Navigation() {
  const pathname = usePathname();

  return (
    <div className="relative flex justify-between items-center w-full px-4 py-2 z-50">
      <Link
        href="/"
        className={cn(
          "flex items-center gap-2",
          pathname === "/" && "text-white"
        )}
        aria-label="Retour à la page d'accueil"
      >
        <Icons.logoIcon className="w-10 h-10" aria-hidden="true" />
        <h2 className="capitalize">architecture</h2>
      </Link>
      <MobileMenu className={pathname === "/" ? "text-white" : undefined} />
      <nav
        className="hidden md:block absolute top-0 right-0"
        aria-label="Menu principal"
      >
        <MenuList
          items={appMenu}
          className={pathname === "/" ? "text-white" : undefined}
        />
      </nav>
    </div>
  );
}
