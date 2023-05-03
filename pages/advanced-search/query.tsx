import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaSmile, FaHeart } from "react-icons/fa";

import { useAdvancedSearch } from "@/hooks/manga";
import Link from "next/link";
import Image from "next/image";
import Status from "@/components/manga/Status";
import Head from "next/head";
import { v4 } from "uuid";
import ScrollToTopButton from "@/components/chapter/ScrollToTopButton";

export default function Query() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [genres, setGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.genres)
      setGenres((router.query.genres as string)?.split(","));
    if (router.query.tags) setTags((router.query.tags as string)?.split(","));
    if (router.query.status)
      setStatus((router.query.status as string)?.split(","));
  }, [router.isReady]);

  const { outerListManga, loading, setPage, page, validating, isEnd } =
    useAdvancedSearch(genres, tags, status);

  useEffect(() => {
    if (isEnd) {
      window.removeEventListener("scroll", handleScroll);
      return;
    }
    function handleScroll() {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (
        scrollTop + clientHeight + 500 >= scrollHeight &&
        !validating &&
        !isEnd
      ) {
        setPage(page + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setPage, page, validating, isEnd]);

  return (
    <div className="layout">
      <Head>
        <title>Mangazine | Advanced Search</title>
      </Head>
      <h3 className="text-3xl font-medium border-b border-slate-400 pb-1">
        Result
      </h3>
      {loading && (
        <div className="flex items-center justify-center h-[30rem]">
          <AiOutlineLoading3Quarters className="w-12 h-12 animate-spin" />
        </div>
      )}
      {outerListManga && !outerListManga.length && (
        <div className="text-2xl mt-10">No manga found</div>
      )}
      <div className="mt-8" ref={targetRef}>
        {outerListManga &&
          outerListManga.map((innerListManga) => (
            <div key={v4()} className="container-list-manga">
              {innerListManga.map((manga) => (
                <Link href={`/manga/${manga.id}`} key={manga.id}>
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
                      <span className="font-semibold line-clamp-1">
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
          ))}
      </div>
      {validating && !isEnd && (
        <div className="flex items-center justify-center h-[40rem]">
          <AiOutlineLoading3Quarters className="w-12 h-12 animate-spin" />
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}
