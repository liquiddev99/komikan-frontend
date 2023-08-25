"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FaUser } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { IoLibraryOutline } from "react-icons/io5";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import Fox from "@/public/fox.jpg";
import Image from "next/image";

interface Props {
  accessToken: string | undefined;
}

export default function UserMenu({ accessToken }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  async function handleLogout() {
    await fetch("/gapi/logout", {
      method: "POST",
    });
    if (pathname === "/profile") {
      router.push("/");
      router.refresh();
    } else {
      router.refresh();
    }
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${
            accessToken ? "" : "p-2.5 "
          }rounded-full bg-gray-700 flex items-center`}
        >
          {accessToken ? (
            <Image src={Fox} alt="Fox" width={41.6} className="rounded-full" />
          ) : (
            <FaUser className="h-[1.35rem] w-[1.35rem] cursor-pointer text-slate-300" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-20 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {accessToken && (
            <div className="px-1 py-1 ">
              <Menu.Item>
                <Link
                  href="/profile"
                  className="text-slate-200 hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-2"
                >
                  <RiProfileLine className="mr-2 h-5 w-5" aria-hidden="true" />
                  User Settings
                </Link>
              </Menu.Item>
              {/*
              <Menu.Item>
                <Link
                  href="/follows"
                  className="text-slate-200 hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-2"
                >
                  <IoLibraryOutline
                    className="mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  My Follows
                </Link>
              </Menu.Item>
              */}
            </div>
          )}

          <div className="px-1 py-1">
            {accessToken ? (
              <Menu.Item>
                <button
                  onClick={handleLogout}
                  className="text-red-400 hover:bg-slate-500 group flex w-full items-center rounded-md px-2 py-2"
                >
                  <BiLogOut className="mr-2 h-5 w-5" aria-hidden="true" />
                  Logout
                </button>
              </Menu.Item>
            ) : (
              <Menu.Item>
                <Link
                  href="/login"
                  className="hover:bg-red-500 group flex w-full items-center rounded-md px-2 py-2"
                >
                  <BiLogIn className="mr-2 h-5 w-5" aria-hidden="true" />
                  Login/Signup
                </Link>
              </Menu.Item>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
