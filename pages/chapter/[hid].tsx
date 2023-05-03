import ScrollToTopButton from "@/components/chapter/ScrollToTopButton";
import { useComickChapter } from "@/hooks/manga";
import { IChapterInComick } from "@/types/manga";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

export default function Chapter() {
  const [chapters, setChapters] = useState<IChapterInComick[]>([]);
  const [alId, setAlId] = useState("");
  const router = useRouter();
  const hid = router.query.hid as string;

  const { chapter, loading: loadingChapter } = useComickChapter(hid);

  useEffect(() => {
    if (!chapter) return;
    setChapters(chapter.chapters);
  }, [chapter?.chapter.md_comics.id]);

  useEffect(() => {
    if (!chapter?.chapter.md_comics.links.al) return;
    setAlId(chapter.chapter.md_comics.links.al);
  }, [chapter?.chapter.md_comics.links.al]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" && chapter?.prev)
        router.push(`/chapter/${chapter.prev.hid}`);
      if (event.key === "ArrowRight" && chapter?.next)
        router.push(`/chapter/${chapter.next.hid}`);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [chapter]);

  useEffect(() => {
    if (!chapter?.next.hid) return;
    router.prefetch(`/chapter/${chapter.next.hid}`);
  }, [chapter?.next.hid]);

  console.log(chapter);
  return (
    <div className="layout min-h-[80vh]">
      <Head>
        <title>
          {chapter?.chapter.chap && "Chap"} {chapter?.chapter.chap}{" "}
          {chapter?.chapter.title && " - "} {chapter?.chapter.title}
        </title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center mb-6">
          {alId && (
            <Link
              href={`/manga/${chapter?.chapter.md_comics.links.al}`}
              className="px-3 py-1 rounded-md bg-sky-500 font-medium mr-4"
            >
              Manga Info
            </Link>
          )}
          {chapters.length ? (
            <div className="flex items-center">
              <AiOutlineArrowLeft
                className={`w-10 h-10 p-2.5 border-r border-slate-700 bg-slate-800 cursor-pointer ${
                  !chapter?.prev
                    ? "cursor-not-allowed text-slate-600"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (chapter?.prev)
                    router.push(`/chapter/${chapter?.prev.hid}`);
                }}
              />
              <select
                className="text-slate-200 px-4 py-2 h-10 bg-slate-800 cursor-pointer"
                onChange={(e) => {
                  if (e.target.value) {
                    router.push(`/chapter/${e.target.value}`);
                  }
                }}
                value={hid}
              >
                {chapters.map((chap) => (
                  <option value={chap.hid} key={chap.hid}>
                    Chap {chap.chap} {chap.title && " - "} {chap.title}
                  </option>
                ))}
              </select>
              <AiOutlineArrowRight
                className={`w-10 h-10 p-2.5 border-l border-slate-700 bg-slate-800 cursor-pointer ${
                  !chapter?.next
                    ? "cursor-not-allowed text-slate-600"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (chapter?.next)
                    router.push(`/chapter/${chapter?.next.hid}`);
                }}
              />
            </div>
          ) : null}
        </div>
        {loadingChapter && (
          <div className="min-h-[80vh]">
            <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin mt-10" />
          </div>
        )}
        {chapter &&
          chapter.chapter.md_images.map((page, index) => (
            <Image
              src={`https://meo.comick.pictures/${page.b2key}`}
              alt="Page"
              key={index}
              width={page.w > 1000 ? page.w * 0.8 : page.w}
              height={page.w > 1000 ? page.h * 0.8 : page.h}
              unoptimized
            />
          ))}
        <div className="w-full flex justify-center items-center my-6">
          {alId && (
            <Link
              href={`/manga/${chapter?.chapter.md_comics.links.al}`}
              className="px-3 py-1 rounded-md bg-sky-500 font-medium mr-4"
            >
              Manga Info
            </Link>
          )}
          {chapters.length ? (
            <div className="flex items-center">
              <AiOutlineArrowLeft
                className={`w-10 h-10 p-2.5 border-r border-slate-700 bg-slate-800 cursor-pointer ${
                  !chapter?.prev
                    ? "cursor-not-allowed text-slate-600"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (chapter?.prev)
                    router.push(`/chapter/${chapter?.prev.hid}`);
                }}
              />
              <select
                className="text-slate-200 px-4 py-2 h-10 bg-slate-800 cursor-pointer"
                onChange={(e) => {
                  if (e.target.value) {
                    router.push(`/chapter/${e.target.value}`);
                  }
                }}
                value={hid}
              >
                {chapters.map((chap) => (
                  <option value={chap.hid} key={chap.hid}>
                    Chap {chap.chap} {chap.title && " - "} {chap.title}
                  </option>
                ))}
              </select>
              <AiOutlineArrowRight
                className={`w-10 h-10 p-2.5 border-l border-slate-700 bg-slate-800 ${
                  !chapter?.next
                    ? "text-slate-600 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (chapter?.next)
                    router.push(`/chapter/${chapter?.next.hid}`);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
