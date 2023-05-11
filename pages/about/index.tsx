import Image from "next/image";
import Logo from "../../public/logo.png";
import SadMeme from "../../public/sad-meme.gif";
import HappyMeme from "../../public/happy-meme.png";
import Head from "next/head";

export default function About() {
  return (
    <div className="layout min-h-screen">
      <Head>
        <title>About Us</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            kofiWidgetOverlay.draw('liquiddev99', {
              'type': 'floating-chat',
              'floating-chat.donateButton.text': 'Support me',
              'floating-chat.donateButton.background-color': '#ff5f5f',
              'floating-chat.donateButton.text-color': '#fff'
            });
          `,
          }}
        />
      </Head>
      <div className="max-w-3xl mx-auto text-slate-300 flex flex-col items-center text-[1.1rem]">
        <Image alt="Logo" src={Logo} width={300} />
        <p className="mt-4">
          Dear manga lovers! Are you struggling to discover new manga to indulge
          in? Have you exhausted all the manga within your preferred genre and
          yearn for similar captivating stories? Just like you, I'm an avid
          reader who comprehends the pang of disappointment that arises after
          completing a beloved manga and the subsequent challenge of unearthing
          books within my favored genre.{" "}
        </p>
        <Image src={SadMeme} alt="Sad" width={330} className="mt-4" />
        <p className="mt-4">
          That's why I created Mangazine—an online platform for free manga
          reading that offers a continuous influx of updated titles, a
          recommendation system for finding comparable narratives, and a
          comprehensive search engine encompassing a myriad of genres. It is
          designed to facilitate your quest for enthralling stories with utmost
          convenience.{" "}
        </p>
        <Image src={HappyMeme} alt="Sad" width={330} className="mt-4" />
        <p className="mt-4">
          I sincerely hope you enjoy the experience of reading manga on
          Mangazine and stumble upon tales that ignite your passion.
          <br /> Happy reading!
        </p>
      </div>
    </div>
  );
}
