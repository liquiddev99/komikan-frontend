"use client";
import Image from "next/image";
import KofiImage from "../../../public/kofi.png";
import { useState } from "react";

export default function Kofi() {
  const [kofi, setKofi] = useState(false);
  return (
    <div className="relative mr-4">
      <iframe
        id="kofiframe"
        className={`border-0 w-[330px] p-2 bg-[#f9f9f9] rounded-lg absolute bottom-[125%] right-[-33%] transition-all origin-bottom duration-[420ms] ${
          kofi ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        src="https://ko-fi.com/komikan/?hidefeed=true&widget=true&embed=true&preview=true"
        height="690"
        title="komikan"
      ></iframe>

      <button
        className="flex items-center rounded-full bg-[#FF5F5F] px-4 font-bold"
        onClick={() => setKofi(!kofi)}
      >
        <Image src={KofiImage} alt="Kofi" className="mr-1" width={40} />
        Support Komikan
      </button>
      <div className="mt-2">
        <a
          href="https://ko-fi.com/komikan"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400"
        >
          Visit us on Ko-fi
        </a>
      </div>
    </div>
  );
}
