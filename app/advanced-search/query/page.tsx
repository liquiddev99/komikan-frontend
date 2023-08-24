"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Head from "next/head";
import { v4 } from "uuid";
import { useAdvancedSearch } from "@/app/hooks/manga";
import MangaItem from "@/app/components/MangaItem";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

export default function Query() {
  const searchParams = useSearchParams();
  const targetRef = useRef<HTMLDivElement>(null);
  const [genres, setGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const genres = searchParams.get("genres");
    const status = searchParams.get("status");
    const tags = searchParams.get("tags");
    const sort = searchParams.get("sort");
    if (genres) setGenres((genres as string)?.split(","));
    if (tags) setTags((tags as string)?.split(","));
    if (status) setStatus((status as string)?.split(","));
    if (sort) setSort(sort as string);
  }, [searchParams]);

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
