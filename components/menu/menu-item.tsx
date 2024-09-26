import Link from "next/link";

export type MenuItemProps = {
  label: string;
  href: string;
  Icon: (props: any) => JSX.Element;
};

export function MenuItem({ label, href, Icon }: MenuItemProps) {
  return (
    <li>
      <Link href={href} className="flex items-center">
        <span className="sr-only">{label}</span>
        <Icon />
        <p className="text-lg ml-2 align-baseline capitalize">{label}</p>
      </Link>
    </li>
  );
}
