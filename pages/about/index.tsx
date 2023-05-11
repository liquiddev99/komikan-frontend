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
        <title>About Us</title>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="liquiddev99"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for taking the time to get to know me and for considering supporting Mangazine"
          data-color="#FF5F5F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <div className="layout min-h-screen">
        <div className="max-w-3xl mx-auto text-slate-300 flex flex-col items-center text-[1.1rem]">
          <Image alt="Logo" src={Logo} width={300} />
          <p className="mt-4">
            Dear manga lovers! Are you struggling to discover new manga to
            indulge in? Have you exhausted all the manga within your preferred
            genre and yearn for similar captivating stories? Just like you, I'm
            an avid reader who comprehends the pang of disappointment that
            arises after completing a beloved manga and the subsequent challenge
            of unearthing books within my favored genre.{" "}
          </p>
          <Image src={SadMeme} alt="Sad" width={330} className="mt-4" />
          <p className="mt-4">
            That's why I created Mangazine—an online platform for free manga
            reading that offers a continuous influx of updated titles, a
            recommendation system for finding comparable narratives, and a
            comprehensive search engine encompassing a myriad of genres. It is
            designed to facilitate your quest for enthralling stories with
            utmost convenience.{" "}
          </p>
          <Image src={HappyMeme} alt="Sad" width={330} className="mt-4" />
          <p className="mt-4">
            I sincerely hope you enjoy the experience of reading manga on
            Mangazine and stumble upon tales that ignite your passion.
            <br /> Happy reading!
          </p>
        </div>
      </div>
      <div className="bg-[#171D28] mt-10 py-16">
        <div className="layout text-center max-w-3xl flex flex-col items-center">
          <h2 className="text-[2.5rem] font-bold">Support our Passion</h2>
          <p className="mt-2 text-slate-400">
            By contributing to our platform, you are not only supporting the
            growth and sustainability of Mangazine, but you are also directly
            helping us to bring more amazing manga titles to our readers,
            enhancing the overall manga experience for everyone involved.
          </p>
          <div className="mt-6 flex">
            <div className="relative mr-4">
              <iframe
                id="kofiframe"
                src="https://ko-fi.com/liquiddev99/?hidefeed=true&widget=true&embed=true&preview=true"
                className={`border-0 w-[330px] p-2 bg-[#f9f9f9] rounded-lg absolute bottom-[125%] left-0 transition-all origin-bottom-left duration-[400ms] ${
                  kofi ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                height="650"
                title="liquiddev99"
              ></iframe>
              <button
                className="flex items-center rounded-full bg-[#FF5F5F] px-4 font-semibold"
                onClick={() => setKofi(!kofi)}
              >
                <Image src={Kofi} alt="Kofi" className="mr-1" width={40} />
                Support me
              </button>
            </div>

            <div className="rounded-full">
              <a
                href="https://www.buymeacoffee.com/liquiddev99"
                target="_blank"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                  alt="Buy Me A Coffee"
                  className="h-[40px] w-[170px] rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
