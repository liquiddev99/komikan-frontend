import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="pt-6 pb-7 layout">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <span className={`ml-3 mt-3 text-slate-100 text-2xl font-medium`}>
              Mangazine
            </span>
          </div>
        </Link>

        <div className="flex items-center">
          <Link
            href="/"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            Home
          </Link>
          <Link
            href="#"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            Install CLI
          </Link>
          <Link
            href="#"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            Community
          </Link>
        </div>
      </div>
    </div>
  );
}
