import Link from "next/link";
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

export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="hidden w-full md:flex flex-row-reverse justify-betwen text-center px-4 py-2"
    >
      <span className="sr-only">Pied de page</span>
      <nav id="contact" className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Me contacter</Button>
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
        <span className="sr-only">Social Menu Navigation</span>
      </nav>
      <p className="flex-1 text-sm py-4">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="hover:underline">
          Vrai Architecture
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
}
