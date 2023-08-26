import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

import { SiBuymeacoffee } from "react-icons/si";

export default function Footer() {
  return (
    <div className="pt-16 pb-2.5">
      <div className="layout border-t border-slate-700 text-slate-300 pt-4 pb-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center">
            <Image src={Logo} alt="Logo" width={50} className="mr-1" />
            <div className="my-3 sm:my-0 flex flex-col items-center gap-2 xs:gap-0 xs:flex-row">
              <Link
                href="/about"
                className="xs:px-4 sm:border-r border-slate-500 hover:text-red-400 text-[#989CAD] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/feedback"
                className="xs:px-4 sm:border-r border-slate-500 hover:text-red-400 text-[#989CAD] transition-colors"
              >
                Feedback
              </Link>
              <Link
                href="/contact"
                className="xs:px-4 sm:border-r border-slate-500 hover:text-red-400 text-[#989CAD] transition-colors"
              >
                Contact
              </Link>
            </div>
            <a
              target="_blank"
              href="https://ko-fi.com/komikan"
              className="xs:mr-3 hover:text-red-400 transition-colors text-[#989CAD]"
            >
              <SiBuymeacoffee className="h-6 w-6 xs:ml-4" />
            </a>
          </div>
          <div className="text-2xl text-slate-300 mt-2 sm:mt-0">Komikan</div>
        </div>
      </div>
    </div>
  );
}
