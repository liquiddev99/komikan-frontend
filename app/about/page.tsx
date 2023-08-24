import Image from "next/image";
import Logo from "../../public/logo.png";
import SadMeme from "../../public/sad-meme.gif";
import HappyMeme from "../../public/happy-meme.png";
import Head from "next/head";
import Kofi from "./components/Kofi";

export default function About() {
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
            similar to the finished one? Just like you, I&apos;m an avid reader
            who comprehends that feeling after finished my favourite manga and
            the challenge of unearthing manga within my favored genre.{" "}
          </p>
          <Image src={SadMeme} alt="Sad" width={330} className="mt-4" />
          <p className="mt-4">
            That&apos;s why I created Komikan—an online platform for free manga
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
            <Kofi />
          </div>
        </div>
      </div>
    </div>
  );
}
