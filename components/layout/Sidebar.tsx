import Link from "next/link";
import Image from "next/image";

import Logo from "../../public/logo.png";

export default function Sidebar() {
  return (
    <div className="pt-6 pl-8">
      <Link href="/">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <span className={`ml-3 mt-3 text-slate-100 text-2xl font-medium`}>
            Mangazine
          </span>
        </div>
      </Link>
      <div className="flex flex-col mt-7">
        <Link href="/" className="mr-7 font-medium">
          Home
        </Link>
        <Link href="/advanced-search" className="mr-7 font-medium">
          Advanced Search
        </Link>
        <Link href="/history" className="mr-7 font-medium">
          History
        </Link>
        <Link href="/about" className="mr-7 font-medium">
          About Us
        </Link>
      </div>
    </div>
  );
}
