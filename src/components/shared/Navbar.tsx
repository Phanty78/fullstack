"use client";

import LINKS from "@/components/constants/links";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row gap-3">
      {LINKS.MENU.map((route) => (
        <li key={route.label}>
          <Link
            href={route.href}
            className={clsx("hover:font-bold", {
              "text-blue-500 font-bold": pathname === route.href,
            })}
            aria-label={`link to ${route.label}`}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
