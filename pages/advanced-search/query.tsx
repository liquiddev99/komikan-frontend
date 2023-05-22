import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useAdvancedSearch } from "@/hooks/manga";
import Head from "next/head";
import { v4 } from "uuid";
import ScrollToTopButton from "@/components/chapter/ScrollToTopButton";
import MangaItem from "@/components/manga/MangaItem";

export default function Query() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [genres, setGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const [sort, setSort] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.genres)
      setGenres((router.query.genres as string)?.split(","));
    if (router.query.tags) setTags((router.query.tags as string)?.split(","));
    if (router.query.status)
      setStatus((router.query.status as string)?.split(","));
    if (router.query.sort) setSort(router.query.sort as string);
  }, [router.isReady]);

  const { outerListManga, loading, setPage, page, validating, isEnd } =
    useAdvancedSearch(genres, tags, status, sort);

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
            <div key={v4()} className="container-list-manga mt-6">
              {innerListManga.map((manga) => (
                <MangaItem manga={manga} key={v4()} />
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
