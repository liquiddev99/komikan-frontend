import { IMangaDex, IChapterDex } from "../types/mangadex";
import { genericFetcher } from "../utils/manga";
import useSWR from "swr";

export function useDexChapters(
  mangadexId: string | null | undefined,
  lang = "en"
) {
  const { data, isLoading, error } = useSWR(
    mangadexId ? `/api/mangadex/chapters/${mangadexId}?lang=${lang}` : null,
    genericFetcher<IChapterDex[]>
  );

  return {
    chapters: data,
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
