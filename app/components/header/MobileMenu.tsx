"use client";
import { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { AiOutlineHome, AiOutlineHistory } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { RiProfileLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import MobileSearchBar from "./MobileSearchBar";

interface Props {
  accessToken: string | undefined;
}

export default function MobileMenu({ accessToken }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  function closeMenu() {
    setMenu(false);
  }

  async function handleLogout() {
    await fetch("/gapi/logout", {
      method: "POST",
    });
    closeMenu();
    if (pathname === "/profile") {
      router.push("/");
      router.refresh();
    } else {
      router.refresh();
    }
  }

  return (
    <div className="lg:hidden">
      <div onClick={() => setMenu(!menu)}>
        <IoMenuSharp className="w-7 h-7 cursor-pointer" />
      </div>
      <div
        className={`bg-bg-color p-4 md:p-8 fixed left-0 top-0 transition-all z-10 duration-[400ms] w-screen h-screen${
          menu ? " translate-x-0" : " translate-x-[100vw]"
        }`}
      >
        <div onClick={() => setMenu(false)} className="cursor-pointer mb-2">
          <HiOutlineXMark className="w-7 h-7" />
        </div>
        <div className="flex flex-col">
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-1.5 mb-2"
          >
            <AiOutlineHome className="mr-2 h-5 w-5" aria-hidden="true" />
            Home
          </Link>
          <Link
            href="/advanced-search"
            onClick={closeMenu}
            className="hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-1.5 mb-2"
          >
            <FaSearchengin className="mr-2 h-5 w-5" aria-hidden="true" />
            Advanced Search
          </Link>
          <Link
            href="/history"
            onClick={closeMenu}
            className="hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-1.5 mb-1"
          >
            <AiOutlineHistory className="mr-2 h-5 w-5" aria-hidden="true" />
            History
          </Link>
        </div>
        <div className="mb-3">
          {accessToken ? (
            <>
              <Link
                href="/profile"
                onClick={closeMenu}
                className="hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-1.5 mb-2"
              >
                <RiProfileLine className="mr-2 h-5 w-5" aria-hidden="true" />
                User Settings
              </Link>
              <button
                onClick={handleLogout}
                className="hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-1.5"
              >
                <BiLogOut className="mr-2 h-5 w-5" aria-hidden="true" />
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={closeMenu}
              className="hover:bg-red-500 group flex w-full items-center rounded-md px-2 py-2"
            >
              <BiLogIn className="mr-2 h-5 w-5" aria-hidden="true" />
              Login/Signup
            </Link>
          )}
        </div>
        <MobileSearchBar closeMenu={closeMenu} />
      </div>
    </div>
  );
}
