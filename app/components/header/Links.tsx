"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/"
        className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
          pathname === "/" ? "active-link" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="/advanced-search"
        className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
          pathname === "/advanced-search" ? "active-link" : ""
        }`}
      >
        Advanced Search
      </Link>
      <Link
        href="/history"
        className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
          pathname === "/history" ? "active-link" : ""
        }`}
      >
        History
      </Link>
      <Link
        href="/about"
        className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
          pathname === "/about" ? "active-link" : ""
        }`}
      >
        About Us
      </Link>
    </>
  );
}
