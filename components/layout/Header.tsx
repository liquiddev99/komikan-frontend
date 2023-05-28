import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenu, IoClose } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const [textSearch, setTextSearch] = useState("");
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextSearch(e.target.value);
  }
  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!textSearch) return;
    router.push(`/search?q=${textSearch}`);
  }

  return (
    <div className="pt-6 pb-7 layout">
      <div className="flex relative justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={50} height={50} />
            <span className={`ml-3 mt-3 text-slate-100 text-2xl font-medium`}>
              Komikan
            </span>
          </div>
        </Link>

        <div
          className="block lg:hidden cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <IoClose className="w-8 h-8" />
          ) : (
            <IoMenu className="w-8 h-8" />
          )}
        </div>

        <div
          className={`absolute flex lg:hidden top-full rounded-lg bg-slate-800 w-full flex-col z-50 p-4 transition-transform origin-top duration-500 ${
            menu ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <Link href="/" className="mr-7 font-medium mb-2">
            Home
          </Link>
          <Link href="/advanced-search" className="mr-7 font-medium mb-2">
            Advanced Search
          </Link>
          <Link href="/history" className="mr-7 font-medium mb-2">
            History
          </Link>
          <Link href="/about" className="mr-7 font-medium mb-2">
            About Us
          </Link>

          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search Manga"
              className="bg-slate-900 px-4 py-1 rounded-md outline-none"
              value={textSearch}
              onChange={handleChange}
            />
          </form>
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            href="/"
            className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
              router.asPath === "/" ? "active-link" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/advanced-search"
            className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
              router.asPath === "/advanced-search" ? "active-link" : ""
            }`}
          >
            Advanced Search
          </Link>
          <Link
            href="/history"
            className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
              router.asPath === "/history" ? "active-link" : ""
            }`}
          >
            History
          </Link>
          <Link
            href="/about"
            className={`mr-7 font-semibold hover:active-link hover:text-red-400 ${
              router.asPath === "/about" ? "active-link" : ""
            }`}
          >
            About Us
          </Link>

          <form
            onSubmit={onSearch}
            className="bg-slate-800 flex items-center rounded-md w-64"
          >
            <input
              type="text"
              placeholder="Search Manga"
              className="bg-slate-800 px-4 py-1 pr-0 rounded-md outline-none w-[90%]"
              value={textSearch}
              onChange={handleChange}
            />
            <button type="submit">
              <AiOutlineSearch className="h-6 w-6 text-slate-400 mr-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
