import Link from "next/link";
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

const MobileMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Icons.alignJustifyIcon className="md:hidden" />
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

export function Header(): JSX.Element {
  return (
    <header
      id="header"
      className="w-full"
      aria-label="Header principal du site"
    >
      <span className="sr-only">En-tête</span>
      <div className="Fixed top-0 sm:left-0">
        <div className="relative flex justify-between items-center w-full px-4 py-2 z-50">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Retour à la page d'accueil"
          >
            <Icons.logoIcon className="w-10 h-10" aria-hidden="true" />
            <h2 className="capitalize">architecture</h2>
          </Link>
          <MobileMenu />
          <nav
            className="hidden md:block absolute top-0 right-0"
            aria-label="Menu principal"
          >
            <MenuList items={appMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
}
