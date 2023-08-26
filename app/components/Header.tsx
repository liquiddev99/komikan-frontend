import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import UserMenu from "./UserMenu";
import Links from "./header/Links";
import SearchBar from "./header/SearchBar";
import { cookies } from "next/headers";
import MobileMenu from "./header/MobileMenu";

export default function Header() {
  const accessToken = cookies().get("access_token");

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
        <div className="hidden lg:flex items-center">
          <Links />

          <SearchBar />
          <UserMenu accessToken={accessToken?.value} />
        </div>
        <MobileMenu accessToken={accessToken?.value} />
      </div>
    </div>
  );
}
