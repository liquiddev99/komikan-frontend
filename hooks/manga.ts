import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import {
  fetchDetailManga,
  fetchComickId,
  fetchPopularManga,
  fetchTrendingManga,
  searchManga,
  fetchGenres,
  fetchTags,
  chaptersFetcher,
  chapterFetcher,
  comickInfoFetcher,
} from "../utils/manga";
import { advancedSearch } from "@/utils/search";
import { IManga } from "../types/manga";
import { useState } from "react";

export function useTrendingManga() {
  const { data, isLoading, error } = useSWR(
    "/api/manga/trending",
    fetchTrendingManga
  );

  return {
    trendingManga: data,
    loading: isLoading,
    error,
  };
}

export function usePopularManga() {
  const { data, isLoading, error } = useSWR(
    "/api/manga/popular",
    fetchPopularManga
  );

  return {
    popularManga: data,
    loading: isLoading,
    error,
  };
}

export function useDetailManga(id: string) {
  const { data, isLoading, error } = useSWR(
    id ? [`/api/manga/${id}`, id] : null,
    ([_, id]) => fetchDetailManga(id)
  );

  return {
    manga: data,
    loading: isLoading,
    error,
  };
}

export function useComickId(malId: number | null | undefined) {
  const { data, isLoading, error } = useSWR(
    malId ? `/api/mal/${malId}` : null,
    fetchComickId
  );

  return {
    comickId: data?.comickId,
    loading: isLoading,
    error,
  };
}

export function useComickInfo(comickId: string | null | undefined) {
  const { data, isLoading, error } = useSWR(
    comickId ? `/api/comick/info/${comickId}` : null,
    comickInfoFetcher
  );

  return {
    comickInfo: data,
    loading: isLoading,
    error,
  };
}

export function useComickChapters(
  comickId: string | null | undefined,
  lang = "en"
) {
  const { data, isLoading, error } = useSWR(
    comickId ? `/api/comick/chapters/${comickId}?lang=${lang}` : null,
    chaptersFetcher
  );

  return {
    chapters: data,
    loading: isLoading,
    error,
  };
}

export function useComickChapter(hid: string | null | undefined) {
  const { data, isLoading, error } = useSWR(
    hid ? `/api/comick/chapter/${hid}` : null,
    chapterFetcher
  );

  return {
    chapter: data,
    loading: isLoading,
    error,
  };
}

export function useGenres() {
  const { data, error, isLoading } = useSWR("/api/manga/genres", fetchGenres);

  return {
    genres: data,
    loading: isLoading,
    error,
  };
}

export function useTags() {
  const { data, error, isLoading } = useSWR("/api/manga/tags", fetchTags);

  return {
    tags: data,
    loading: isLoading,
    error,
  };
}

export function useSearchManga(q: string) {
  const [isEnd, setIsEnd] = useState(false);
  const { data, error, isLoading, setSize, size, isValidating } =
    useSWRInfinite(
      (pageIndex, previousPageData: IManga[]) => {
        if (previousPageData && !previousPageData.length) {
          setIsEnd(true);
          return null;
        } // reached the end
        return [`/api/manga/search?q=${q}&page=${pageIndex}`, q, pageIndex + 1];
      },
      ([_, q, page]) => searchManga(q, page)
    );

  return {
    outerListManga: data,
    setPage: setSize,
    page: size,
    loading: isLoading,
    validating: isValidating,
    error,
    isEnd,
  };
}

export function useAdvancedSearch(
  genres: string[],
  tags: string[],
  status: string[]
) {
  const [isEnd, setIsEnd] = useState(false);
  const { data, error, isLoading, setSize, size, isValidating } =
    useSWRInfinite(
      (pageIndex, previousPageData: IManga[]) => {
        if (previousPageData && !previousPageData.length) {
          setIsEnd(true);
          return null;
        } // reached the end
        return [
          `/api/manga/advanced-search?page=${pageIndex}`,
          genres,
          tags,
          status,
          pageIndex + 1,
        ];
      },
      ([_, genres, tags, status, page]) =>
        advancedSearch(genres, tags, status, page)
    );

  return {
    outerListManga: data,
    setPage: setSize,
    page: size,
    loading: isLoading,
    validating: isValidating,
    error,
    isEnd,
  };
}
