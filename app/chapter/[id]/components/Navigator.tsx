"use client";
import { IChapterDex } from "@/app/types/mangadex";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  alId: string;
  chapters: IChapterDex[];
  prevChapter: IChapterDex | undefined;
  nextChapter: IChapterDex | undefined;
  chapterId: string;
  lang: string;
}

export default function Navigator({
  alId,
  chapters,
  prevChapter,
  nextChapter,
  chapterId,
  lang,
}: Props) {
  const router = useRouter();

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && nextChapter) {
        router.push(`/chapter/${nextChapter.id}`);
        return;
      }
      if (e.key === "ArrowLeft" && prevChapter) {
        router.push(`/chapter/${prevChapter.id}`);
        return;
      }
    },
    [nextChapter, prevChapter, router]
  );

  useEffect(() => {
    if (!nextChapter) return;
    router.prefetch(`/chapter/${nextChapter.id}`);

    if (!prevChapter) return;
    router.prefetch(`/chapter/${prevChapter.id}`);
  }, [nextChapter, router, prevChapter]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="mt-8 xs:w-full flex flex-col xs:flex-row justify-between md:justify-center items-center mb-6 layout">
      {alId && (
        <Link
          href={`/manga/${alId}${lang === "en" ? "" : `?lang=${lang}`}`}
          className="px-4 xs:flex items-center rounded-md bg-sky-500 font-medium mr-3 md:mr-4 min-w-max h-10 hidden"
        >
          Manga Info
        </Link>
      )}
      {chapters.length ? (
        <div className="flex items-center shrink max-w-min">
          <AiOutlineArrowLeft
            className={`w-10 h-10 p-2.5 border-r border-slate-700 bg-slate-800 cursor-pointer ${
              !prevChapter
                ? "cursor-not-allowed text-slate-600"
                : "cursor-pointer"
            }`}
            onClick={() => {
              if (prevChapter) router.push(`/chapter/${prevChapter?.id}`);
            }}
          />
          <select
            className="text-slate-200 px-4 py-2 h-10 bg-slate-800 cursor-pointer w-64 xs:w-64 sm:w-auto"
            onChange={(e) => {
              if (e.target.value) {
                router.push(`/chapter/${e.target.value}`);
              }
            }}
            value={chapterId}
          >
            {chapters.map((chap) => (
              <option value={chap.id} key={chap.id}>
                Chap {chap.attributes.chapter} {chap.attributes.title && " - "}{" "}
                {chap.attributes.title}
              </option>
            ))}
          </select>
          <AiOutlineArrowRight
            className={`w-10 h-10 p-2.5 border-l border-slate-700 bg-slate-800 cursor-pointer ${
              !nextChapter
                ? "cursor-not-allowed text-slate-600"
                : "cursor-pointer"
            }`}
            onClick={() => {
              if (nextChapter) router.push(`/chapter/${nextChapter.id}`);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
