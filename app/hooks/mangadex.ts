import { IChapterImages, IMangaDex, IChapterDex } from "../types/mangadex";
import { chaptersDexFetcher, genericFetcher } from "../utils/manga";
import useSWR from "swr";

export function useDexId(malId: number | null | undefined) {
  const {
    data: mangadexIds,
    isLoading,
    error,
  } = useSWR(
    malId ? `/api/mal/mangadex/${malId}` : null,
    genericFetcher<string[]>
  );

  return {
    mangadexIds,
    loading: isLoading,
    error,
  };
}

export function useDexChapters(
  mangadexId: string | null | undefined,
  lang = "en"
) {
  const { data, isLoading, error } = useSWR(
    mangadexId ? `/api/mangadex/chapters/${mangadexId}?lang=${lang}` : null,
    chaptersDexFetcher
  );

  return {
    chapters: data,
    loading: isLoading,
    error,
  };
}

export function useImagesChapter(chapterId: string) {
  const { data, isLoading, error } = useSWR(
    chapterId ? `/api/mangadex/chapter/images/${chapterId}` : null,
    genericFetcher<IChapterImages>
  );

  return {
    images: data,
    loading: isLoading,
    error,
  };
}

export function useMangadexInfo(mangaId: string | undefined) {
  const {
    data: mangadex,
    isLoading,
    error,
  } = useSWR(
    mangaId ? `/api/mangadex/manga/info/${mangaId}` : null,
    genericFetcher<IMangaDex>
  );

  return {
    mangadex,
    loading: isLoading,
    error,
  };
}

export function useChapterInfo(chapterId: string) {
  const {
    data: chapter,
    isLoading,
    error,
  } = useSWR(
    chapterId ? `/api/mangadex/chapter/info/${chapterId}` : null,
    genericFetcher<IChapterDex>
  );

  return {
    chapter,
    loading: isLoading,
    error,
  };
}
