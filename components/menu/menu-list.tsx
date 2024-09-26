import { MenuItemProps, MenuItem } from "@/components/menu/menu-item";

export function MenuList({ items }: { items: MenuItemProps[] }) {
  return (
    <ul
      className="w-full flex flex-col justify-center gap-2 p-4"
      role="menubar"
    >
      {items.map(({ label, href, Icon }: MenuItemProps) => (
        <MenuItem key={label} label={label} href={href} Icon={Icon} />
      ))}
    </ul>
  );
}
