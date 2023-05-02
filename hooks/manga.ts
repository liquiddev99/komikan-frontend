import useSWR from "swr";
import {
  fetchDetailManga,
  fetchComickId,
  fetchPopularManga,
  fetchTrendingManga,
  fetchComickInfo,
  fetchComickChapters,
  fetchComickPages,
  searchManga,
} from "../utils/manga";

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

export function useSearchManga(q: string) {
  const { data, isLoading, error } = useSWR(
    q ? [`/api/manga/search/${q}`, q] : null,
    ([_, q]) => searchManga(q)
  );

  return {
    searchedManga: data,
    loading: isLoading,
    error,
  };
}

export function useComickId(malId: number | null | undefined) {
  const { data, isLoading, error } = useSWR(
    malId ? [`/api/comick/${malId}`, malId] : null,
    ([_, malId]) => fetchComickId(malId)
  );

  return {
    comickId: data?.comickId,
    loading: isLoading,
    error,
  };
}

export function useComickInfo(comickId: string | null | undefined) {
  const { data, isLoading, error } = useSWR(
    comickId ? [`/api/comick/info/${comickId}`, comickId] : null,
    ([_, comickId]) => fetchComickInfo(comickId)
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
    comickId ? [`/api/comick/chapters/${comickId}`, comickId, lang] : null,
    ([_, comickId, lang]) => fetchComickChapters(comickId, lang)
  );

  return {
    chapters: data,
    loading: isLoading,
    error,
  };
}

export function useComickPages(hid: string | null | undefined) {
  const { data, isLoading, error } = useSWR(
    hid ? [`/api/comick/pages/${hid}`, hid] : null,
    ([_, hid]) => fetchComickPages(hid)
  );

  return {
    pages: data?.chapter?.md_images,
    loading: isLoading,
    error,
  };
}
