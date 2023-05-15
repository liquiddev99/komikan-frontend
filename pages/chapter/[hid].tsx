import ChapterImage from "@/components/chapter/ChapterImage";
import ScrollToTopButton from "@/components/chapter/ScrollToTopButton";
import { useAuth } from "@/hooks/auth";
import { useComickChapter } from "@/hooks/manga";
import {
  useChapterInfo,
  useDexChapters,
  useImagesChapter,
  useMangadexInfo,
} from "@/hooks/mangadex";
import { IChapterInComick } from "@/types/manga";
import { IChapterDex } from "@/types/mangadex";
import { saveHistoryUnAuth } from "@/utils/history";
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
  const [chapters, setChapters] = useState<IChapterDex[]>([]);
  const [nextChapter, setNextChapter] = useState<IChapterDex>();
  const [prevChapter, setPrevChapter] = useState<IChapterDex>();
  const [alId, setAlId] = useState("");
  const router = useRouter();
  const hid = router.query.hid as string;

  const { authenticated } = useAuth();
  const { chapter } = useChapterInfo(hid);
  const mangadexId = chapter?.relationships.find(
    (item) => item["type"] === "manga"
  )?.id;
  const { chapters: dexChapters } = useDexChapters(
    mangadexId,
    chapter?.attributes.translatedLanguage
  );
  const { images, loading: loadingImages } = useImagesChapter(hid);

  useEffect(() => {
    if (!mangadexId || !dexChapters) return;
    setChapters(dexChapters);
  }, [mangadexId, dexChapters]);

  useEffect(() => {
    if (!chapters.length) return;
    const currentIndex = chapters.findIndex((chap) => chap.id === hid);
    if (!chapters[currentIndex - 1]) {
      setNextChapter(undefined);
    } else {
      setNextChapter(chapters[currentIndex - 1]);
    }
    if (!chapters[currentIndex + 1]) {
      setPrevChapter(undefined);
    } else {
      setPrevChapter(chapters[currentIndex + 1]);
    }
  }, [hid, chapters]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" && prevChapter)
        router.push(`/chapter/${prevChapter.id}`);
      if (event.key === "ArrowRight" && nextChapter)
        router.push(`/chapter/${nextChapter.id}`);
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [prevChapter, nextChapter]);

  {
    /*
  useEffect(() => {
    if (!chapter || authenticated) return;
    saveHistoryUnAuth({
      coverImage: `https://meo.comick.pictures/${chapter.chapter?.md_comics?.md_covers[0]?.b2key}`,
      mangaId: chapter.chapter.md_comics.links.al,
      title: chapter.chapter.md_comics.title,
      readingChapter: { chap: chapter.chapter.chap, path: router.asPath },
    });
  }, [chapter]);

  useEffect(() => {
    if (!chapter?.chapter.md_comics.links.al) return;
    setAlId(chapter.chapter.md_comics.links.al);
  }, [chapter?.chapter.md_comics.links.al]);

  useEffect(() => {
    if (!chapter?.next?.hid) return;
    router.prefetch(`/chapter/${chapter.next.hid}`);
  }, [chapter?.next?.hid]);
*/
  }

  return (
    <div className="layout min-h-[80vh]">
      <Head>
        <title>Mangazine</title>
      </Head>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center mb-6">
          {alId && (
            <Link
              href={`/manga/`}
              className="px-3 py-1 rounded-md bg-sky-500 font-medium mr-4"
            >
              Manga Info
            </Link>
          )}
          {chapters.length ? (
            <div className="flex items-center">
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
                className="text-slate-200 px-4 py-2 h-10 bg-slate-800 cursor-pointer"
                onChange={(e) => {
                  if (e.target.value) {
                    router.push(`/chapter/${e.target.value}`);
                  }
                }}
                value={hid}
              >
                {chapters.map((chap) => (
                  <option value={chap.id} key={chap.id}>
                    Chap {chap.attributes.chapter}{" "}
                    {chap.attributes.title && " - "} {chap.attributes.title}
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
        {loadingImages && (
          <div className="min-h-[80vh]">
            <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin mt-10" />
          </div>
        )}
        {images &&
          images.chapter.dataSaver.map((image, index) => (
            <ChapterImage
              key={image}
              src={`https://uploads.mangadex.org/data-saver/${images.chapter.hash}/${image}`}
              alt="Image"
              priority={index === 0 ? true : false}
            />
          ))}
        <div className="w-full flex justify-center items-center my-6">
          {alId && (
            <Link
              href={`/manga/`}
              className="px-3 py-1 rounded-md bg-sky-500 font-medium mr-4"
            >
              Manga Info
            </Link>
          )}
          {chapters.length ? (
            <div className="flex items-center">
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
                className="text-slate-200 px-4 py-2 h-10 bg-slate-800 cursor-pointer"
                onChange={(e) => {
                  if (e.target.value) {
                    router.push(`/chapter/${e.target.value}`);
                  }
                }}
                value={hid}
              >
                {chapters.map((chap) => (
                  <option value={chap.id} key={chap.id}>
                    Chap {chap.attributes.chapter}{" "}
                    {chap.attributes.title && " - "} {chap.attributes.title}
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
      </div>
      <ScrollToTopButton />
    </div>
  );
}
