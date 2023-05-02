import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="pt-20 pb-6">
      <div className="flex justify-between layout">
        <div className="w-1/3">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" width={60} height={60} />
            <span className={`ml-3 mt-3 text-slate-100 text-2xl font-medium`}>
              Mangazine
            </span>
          </div>
          <p className="text-[#989CAD] mt-4">
            Mangazine is the perfect destination for anyone who loves manga. So
            check us out today and start reading your favorite manga series!
          </p>
          <div className="flex text-[#989CAD] mt-4 items-center">
            <Link href="#" className="mr-3 hover:text-pink transition-colors">
              <FaGithub className="w-7 h-7" />
            </Link>
            <a
              target="_blank"
              href="https://www.facebook.com/liquiddev99"
              className="mr-3 hover:text-pink transition-colors"
            >
              <FaFacebook className="w-7 h-7" />
            </a>
            <Link href="#" className="mr-3 hover:text-pink transition-colors">
              <FaTwitter className="w-7 h-7" />
            </Link>

            <Link href="#" className="mr-3 hover:text-pink transition-colors">
              <FaDiscord className="w-8 h-8" />
            </Link>
            <Link href="#" className="mr-3 hover:text-pink transition-colors">
              <FaLinkedin className="w-7 h-7" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center ml-10">
          <div className="mr-16">
            <p className="mb-7 font-medium">INFOMATION</p>
            <div className="flex flex-col">
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Media
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="mr-16">
            <p className="mb-7 font-medium">LEGAL</p>
            <div className="flex flex-col">
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                Privacy policy
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                Cookies policy
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                Security policy
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit whitespace-nowrap"
              >
                License FAQs
              </Link>
            </div>
          </div>

          <div className="mr-16">
            <p className="mb-7 font-medium">PRODUCT</p>
            <div className="flex flex-col">
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Installation
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Features
              </Link>
              <Link
                href="#"
                className="hover:text-pink text-[#989CAD] transition-colors mb-3 max-w-fit"
              >
                Releases
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-slate-300">
        © 2023 Mangazine. Built with ❤ by liquiddev99
      </div>
    </div>
  );
}
