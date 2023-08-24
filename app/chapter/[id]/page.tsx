import Navigator from "./components/Navigator";
import {
  fetchChapterInfo,
  fetchMangaDexChapters,
  fetchMangaDexInfo,
} from "@/app/utils/manga";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import ChapterImages from "./components/ChapterImages";
import { Suspense } from "react";
import { Metadata } from "next";
import SaveHistory from "./components/SaveHistory";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapter = await fetchChapterInfo(params.id);
  const mangadexId = chapter?.relationships.find(
    (item) => item["type"] === "manga"
  )?.id;
  const mangadex = await fetchMangaDexInfo(mangadexId);

  const title =
    mangadex?.attributes.title.en || mangadex?.attributes.title["ja-ro"];
  const titleManga = title ? `${title} - ` : "";
  const titleChapter = chapter?.attributes.title
    ? `: ${chapter.attributes.title}`
    : "";
  const titleHeader = `${titleManga}Chap ${chapter?.attributes.chapter}${titleChapter}`;

  return {
    title: titleHeader,
  };
}

export default async function Chapter({ params }: Props) {
  const id = params.id;

  const chapter = await fetchChapterInfo(id);
  const mangadexId = chapter?.relationships.find(
    (item) => item["type"] === "manga"
  )?.id;
  const lang = chapter.attributes.translatedLanguage;

  const chaptersData = fetchMangaDexChapters(mangadexId, lang || "en");
  const mangadexData = fetchMangaDexInfo(mangadexId);

  const [chapters, mangadex] = await Promise.all([chaptersData, mangadexData]);

  const alId = mangadex.attributes.links.al;
  const currentIndex = chapters.findIndex((chap) => chap.id === id);
  const nextChapter = chapters[currentIndex - 1];
  const prevChapter = chapters[currentIndex + 1];
  const title =
    mangadex?.attributes.title.en || mangadex?.attributes.title["ja-ro"];
  const coverImage = `https://uploads.mangadex.org/covers/${mangadex.id}/${
    mangadex.relationships.find((item) => item.type === "cover_art")?.attributes
      ?.fileName
  }`;

  return (
    <div className="xs:layout min-h-[80vh]">
      <SaveHistory
        mangadexId={mangadexId}
        alId={alId}
        title={title}
        coverImage={coverImage}
        readingChapter={chapter.attributes.chapter}
      />
      <div className="flex flex-col justify-center items-center">
        <Navigator
          chapterId={id}
          nextChapter={nextChapter}
          prevChapter={prevChapter}
          chapters={chapters}
          alId={alId}
          lang={lang}
        />

        <Suspense
          fallback={
            <div className="w-3/5 pb-[100%] bg-slate-500 animate-pulse"></div>
          }
        >
          <ChapterImages chapterId={id} />
        </Suspense>

        <Navigator
          chapterId={id}
          nextChapter={nextChapter}
          prevChapter={prevChapter}
          chapters={chapters}
          alId={alId}
          lang={lang}
        />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
