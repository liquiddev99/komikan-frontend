import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { v4 } from "uuid";
import { FaSmile, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Status from "@/components/manga/Status";
import { IMangaList } from "@/types/manga";
import { fetchPopularManga, fetchTrendingManga } from "@/utils/manga";

interface Props {
  trendingManga: IMangaList;
  popularManga: IMangaList;
}

export default function Home({ trendingManga, popularManga }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!embla) return;
    function autoPlay() {
      embla?.scrollNext();
    }

    let id = setInterval(autoPlay, 3500);

    if (pause) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [embla, pause]);

  return (
    <main className="layout">
      {trendingManga && (
        <div
          className="embla rounded-2xl"
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
                  className="embla__slide h-[30rem] bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url("${manga.bannerImage}")` }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/90 to-slate-800/80 absolute"></div>
                  <div className="relative flex justify-between mt-5">
                    <Image
                      src={manga.coverImage.extraLarge}
                      alt="Cover"
                      width={300}
                      height={460}
                      className="object-contain ml-10 mr-11"
                    />
                    <div className="w-4/5 text-slate-100 mt-3 mr-7 shrink">
                      <h3 className="text-4xl font-semibold mb-3">
                        {manga.title.english ?? manga.title.romaji}
                      </h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: manga.description }}
                        className="line-clamp-6"
                      ></div>

                      <div className="mt-4 flex">
                        <Link
                          href={`/manga/${manga.id}`}
                          className="rounded-lg bg-red-500 flex items-center justify-center px-5 py-1.5 font-semibold uppercase mr-3"
                        >
                          Detail
                        </Link>
                        <button className="rounded-lg bg-green-600 flex items-center justify-center px-5 py-1.5 uppercase">
                          Add to favorite
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

                      <div className="mt-4 flex">
                        {manga.genres.map((genre) => (
                          <div
                            key={v4()}
                            className="mr-3 px-6 py-1 bg-rose-500 rounded-full"
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

      <div className="mt-12">
        <h3 className="text-3xl font-medium">Trending Manga</h3>
        <div className="mt-8 container-list-manga">
          {trendingManga &&
            trendingManga.data.Page.media.slice(6).map((manga) => (
              <Link href={`/manga/${manga.id}`} key={v4()}>
                <div className="rounded-md flex flex-col h-full overflow-hidden">
                  <div className="flex w-full pb-[140%] relative">
                    <Image
                      src={manga.coverImage.extraLarge}
                      alt="Cover"
                      fill
                      sizes="20vw"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between py-2">
                    <span className="font-semibold line-clamp-2">
                      {manga.title.english || manga.title.romaji}
                    </span>

                    <div className="mt-1">
                      <div className="mb-3 flex items-center">
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-medium">All Time Popular</h3>
        <div className="mt-8 container-list-manga">
          {popularManga &&
            popularManga.data.Page.media.slice(6).map((manga) => (
              <Link href={`/manga/${manga.id}`} key={v4()}>
                <div className="rounded-md flex flex-col h-full overflow-hidden">
                  <div className="flex w-full pb-[140%] relative">
                    <Image
                      src={manga.coverImage.extraLarge}
                      alt="Cover"
                      fill
                      sizes="20vw"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between py-2">
                    <span className="font-semibold">
                      {manga.title.english || manga.title.romaji}
                    </span>

                    <div className="mt-1">
                      <div className="mb-3 flex items-center">
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
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const trendingManga = await fetchTrendingManga();
  const popularManga = await fetchPopularManga();

  return {
    props: {
      trendingManga,
      popularManga,
    },
    revalidate: 60,
  };
};
