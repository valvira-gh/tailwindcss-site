"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { links } from "@/app/lib/data";

export const NavLink: React.FC = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.id} className="mr-4">
          <Link href={link.href} className="text-3xl">
            <span
              className={
                pathname === link.href ? "text-cyan-600" : "text-slate-300"
              }
            >
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </>
  );
};
