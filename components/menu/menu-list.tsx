import { MenuItemProps, MenuItem } from "@/components/menu/menu-item";
import { cn } from "@/lib/utils";

export function MenuList({
  items,
  className,
}: {
  items: MenuItemProps[];
  className?: string;
}) {
  return (
    <ul
      className={cn("w-full flex flex-col justify-center gap-2 p-4", className)}
      role="menubar"
    >
      {items.map(({ label, href, Icon }: MenuItemProps) => (
        <MenuItem key={label} label={label} href={href} Icon={Icon} />
      ))}
    </ul>
  );
}
