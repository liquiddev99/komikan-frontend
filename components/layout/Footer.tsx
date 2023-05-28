import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

import { SiBuymeacoffee } from "react-icons/si";

export default function Footer() {
  return (
    <div className="pt-16 pb-6">
      <div className="flex flex-col md:flex-row justify-between layout">
        <div className="md:w-1/3 px-4 sm:px-8 md:px-0 mb-0 sm:mb-8 md:mb-4 mt-1">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={60} height={60} />
            <span className={`ml-3 mt-3 text-slate-100 text-2xl font-medium`}>
              Komikan
            </span>
          </div>
          <p className="text-[#989CAD] mt-4">
            Immerse yourself in different emotions with various stories after a
            hectic day with Komikan
          </p>
          <div className="flex text-[#989CAD] mt-4 items-center">
            <a
              target="_blank"
              href="https://ko-fi.com/komikan"
              className="mr-3 hover:text-red-400 transition-colors"
            >
              <SiBuymeacoffee className="w-[1.65rem] h-[1.65rem]" />
            </a>
          </div>
        </div>

        <div className="sm:flex hidden sm:flex-row justify-between md:justify-center md:ml-10 w-full md:w-auto sm:px-8 md:px-0">
          <div className="mr-4 sm:mr-16">
            <p className="mb-7 font-medium">INFOMATION</p>
            <div className="flex flex-col">
              <Link
                href="/about"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Media
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="mr-4 sm:mr-16">
            <p className="mb-7 font-medium">LEGAL</p>
            <div className="flex flex-col">
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                Privacy policy
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                Cookies policy
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                Security policy
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                License FAQs
              </Link>
            </div>
          </div>

          <div className="">
            <p className="mb-7 font-medium">PRODUCT</p>
            <div className="flex flex-col">
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Installation
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Features
              </Link>
              <Link
                href="#"
                className="hover:text-red-400 text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Releases
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-300 px-3 sm:px-0">
        © 2023 Komikan. Built with ❤ by liquiddev99
      </div>
    </div>
  );
}
