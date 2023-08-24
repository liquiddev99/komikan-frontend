"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { v4 } from "uuid";
import { FaSmile, FaHeart } from "react-icons/fa";
import Link from "next/link";

import { IMangaList } from "../types/manga";
import Status from "./Status";

interface Props {
  trendingManga: IMangaList;
}

async function createUser() {
  const res = await fetch("/gapi/create-user", {
    method: "POST",
    body: JSON.stringify({
      full_name: "Ngoc Thang",
      username: "liquiddev99",
      email: "tnthangg@gmail.com",
      password: "123456",
      user_agent: navigator.userAgent,
    }),
  });
  const data = await res.json();
  console.log(data);
}

export default function Carousel({ trendingManga }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!embla) return;
    function autoPlay() {
      embla?.scrollNext();
    }

    let id = setInterval(autoPlay, 4000);

    if (pause) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [embla, pause]);

  return (
    <div>
      {trendingManga && (
        <div
          className="embla rounded-2xl hidden sm:block"
          ref={emblaRef}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="embla__container cursor-move">
            {trendingManga.data.Page.media
              .filter((manga) => manga.bannerImage)
              .slice(0, 5)
              .map((manga) => (
                <div
                  key={manga.id}
                  className="embla__slide__main h-[25rem] sm:h-[27rem] lg:h-[30rem] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url("${manga.bannerImage}")` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/90 to-slate-800/80 absolute"></div>
                  <div className="relative flex justify-between mt-5">
                    <Image
                      src={manga.coverImage.extraLarge}
                      alt="Cover"
                      width={300}
                      height={460}
                      className="object-contain ml-7 lg:ml-10 mr-7 lg:mr-11"
                    />
                    <div className="w-4/5 text-slate-100 mt-3 mr-7 shrink">
                      <h3 className="text-4xl font-semibold mb-12 md:mb-3 line-clamp-2 md:line-clamp-none">
                        {manga.title.english ?? manga.title.romaji}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: manga.description }}
                        className="hidden md:line-clamp-4 lg:line-clamp-6"
                      ></div>

                      <div className="mt-4 flex">
                        <Link
                          href={`/manga/${manga.id}`}
                          className="rounded-lg bg-red-500 flex items-center justify-center px-5 py-1.5 font-semibold uppercase mr-3"
                        >
                          Detail
                        </Link>
                        <button
                          className="rounded-lg bg-green-600 flex items-center justify-center px-5 py-1.5 uppercase"
                          onClick={createUser}
                        >
                          Follow
                        </button>
                      </div>

                      <div className="my-4 flex items-center">
                        <div className="flex items-center mr-3">
                          <FaSmile className="h-5 w-5 text-green-500 mr-2" />
                          <span>{manga.averageScore}%</span>
                        </div>
                        <div className="flex items-center">
                          <FaHeart className="h-5 w-5 text-rose-500 mr-2" />
                          <span>{manga.favourites}</span>
                        </div>
                      </div>

                      <Status status={manga.status} />

                      <div className="mt-4 hidden lg:flex">
                        {manga.genres.map((genre) => (
                          <div
                            key={v4()}
                            className="mr-3 px-6 py-1 bg-rose-600 rounded-full"
                          >
                            {genre}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
