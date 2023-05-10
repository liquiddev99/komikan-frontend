import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [textSearch, setTextSearch] = useState("");
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextSearch(e.target.value);
  }
  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?q=${textSearch}`);
  }

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
            href="/advanced-search"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            Advanced Search
          </Link>
          <Link
            href="/history"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            History
          </Link>
          <Link
            href="#"
            className="mr-7 font-medium hover:text-pink transition-colors duration-100"
          >
            About Us
          </Link>

          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search Manga"
              className="bg-slate-800 px-4 py-1 rounded-md outline-none"
              value={textSearch}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
