import Image from "next/image";
import Logo from "../../public/logo.png";
import SadMeme from "../../public/sad-meme.gif";
import HappyMeme from "../../public/happy-meme.png";
import Kofi from "../../public/kofi.png";
import Head from "next/head";
import { useState } from "react";

export default function About() {
  const [kofi, setKofi] = useState(false);
  return (
    <div>
      <Head>
        <title>Komikan | About Us</title>
        <meta property="og:title" content="Komikan | About Us" />
        <meta property="og:description" content="About us" />
        <meta name="description" content="About us" />
        <meta property="og:URL" content="https://mangazine.site/about" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="layout min-h-screen">
        <div className="max-w-3xl mx-auto text-slate-300 flex flex-col items-center text-[1.1rem]">
          <Image alt="Logo" src={Logo} width={300} />
          <p className="mt-4">
            Are you struggling to discover new manga to read and feel disappoint
            after completing a beloved manga and want to find others that
            similar to the finished one? Just like you, I'm an avid reader who
            comprehends that feeling after finished my favourite manga and the
            challenge of unearthing manga within my favored genre.{" "}
          </p>
          <Image src={SadMeme} alt="Sad" width={330} className="mt-4" />
          <p className="mt-4">
            That's why I created Komikan—an online platform for free manga
            reading that offers a continuous influx of updated titles, a
            recommendation system for finding comparable narratives, and a
            comprehensive search engine encompassing a myriad of genres. It is
            designed to facilitate your quest for enthralling stories with
            utmost convenience.{" "}
          </p>
          <Image src={HappyMeme} alt="Sad" width={330} className="mt-4" />
          <p className="mt-4">
            I hope you enjoy the experience of reading manga on Komikan and can
            find your favorite manga to immerse yourself in it.
            <br /> Happy reading!
          </p>
        </div>
      </div>
      <div className="bg-[#171D28] mt-10 py-16">
        <div className="layout text-center max-w-3xl flex flex-col items-center">
          <h2 className="text-[2.5rem] font-bold">Support our Passion</h2>
          <p className="mt-2 text-slate-400">
            Contribute together to our platform to help us maintain the server
            and develop the app further, your help means a lot to us
          </p>
          <div className="mt-6 flex">
            <div className="relative mr-4">
              <iframe
                id="kofiframe"
                className={`border-0 w-[330px] p-2 bg-[#f9f9f9] rounded-lg absolute bottom-[125%] right-[-33%] transition-all origin-bottom duration-[420ms] ${kofi ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                src="https://ko-fi.com/komikan/?hidefeed=true&widget=true&embed=true&preview=true"
                height="690"
                title="komikan"
              ></iframe>

              <button
                className="flex items-center rounded-full bg-[#FF5F5F] px-4 font-bold"
                onClick={() => setKofi(!kofi)}
              >
                <Image src={Kofi} alt="Kofi" className="mr-1" width={40} />
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
          </div>
        </div>
      </div>
    </div>
  );
}
