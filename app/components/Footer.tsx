import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";

import { SiBuymeacoffee } from "react-icons/si";

export default function Footer() {
  return (
    <div className="pt-16 pb-2.5">
      <div className="layout border-t border-slate-700 text-slate-300 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={50} className="mr-1" />
            <Link
              href="/about"
              className="px-4 border-r border-slate-500 hover:text-red-400 text-[#989CAD] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/feedback"
              className="px-4 border-r border-slate-500 hover:text-red-400 text-[#989CAD] transition-colors"
            >
              Feedback
            </Link>
            <Link
              href="/contact"
              className="px-4 border-r border-slate-500 hover:text-red-400 text-[#989CAD] transition-colors"
            >
              Contact
            </Link>
            <a
              target="_blank"
              href="https://ko-fi.com/komikan"
              className="mr-3 hover:text-red-400 transition-colors text-[#989CAD]"
            >
              <SiBuymeacoffee className="h-6 w-6 ml-4" />
            </a>
          </div>
          <div className="text-2xl text-slate-300">Komikan</div>
        </div>
      </div>
    </div>
  );
}
