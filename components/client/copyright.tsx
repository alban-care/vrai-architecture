"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Copyright(): JSX.Element {
  const pathname = usePathname();

  return (
    <p className={cn("flex-1 text-sm py-4", pathname === "/" && "text-white")}>
      Copyright &copy; {new Date().getFullYear()}{" "}
      <Link href="/" className="hover:underline">
        Vrai Architecture
      </Link>
      . All rights reserved.
    </p>
  );
}
