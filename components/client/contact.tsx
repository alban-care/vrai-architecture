"use client";

import { usePathname } from "next/navigation";
import { socialsLinks, contactLinks } from "@/lib/config";
import { MenuList } from "@/components/menu/menu-list";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Contact(): JSX.Element {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={pathname !== "/" ? "default" : "secondary"}>
          Me contacter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="m-4">
        <DropdownMenuLabel>
          <h3>Me suivre</h3>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <MenuList items={socialsLinks} />
        <DropdownMenuLabel>
          <h3>Me contacter</h3>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <MenuList items={contactLinks} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
