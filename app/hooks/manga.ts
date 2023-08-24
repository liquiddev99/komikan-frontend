import useSWRInfinite from "swr/infinite";
import { searchManga } from "../utils/manga";
import { advancedSearch } from "../utils/search";
import { IManga } from "../types/manga";
import { useState } from "react";

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
  status: string[],
  sort: string
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
          `/api/manga/advanced-search?page=${pageIndex}&sort=${sort}`,
          genres,
          tags,
          status,
          sort,
          pageIndex + 1,
        ];
      },
      ([_, genres, tags, status, sort, page]) =>
        advancedSearch(genres, tags, status, page, sort)
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
