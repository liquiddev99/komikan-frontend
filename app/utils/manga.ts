import { cache } from "react";
import { IMangaList, ITag, IManga, IDetailManga } from "../types/manga";
import { IChapterDex, IChapterImages, IMangaDex } from "../types/mangadex";
import axios from "axios";

function queryFactory(sortType: string, perPage: number) {
  return `
  query {
    Page(page: 1, perPage: ${perPage}) {
      media(sort: ${sortType}, type: MANGA) {
        id
        idMal
        title {
          romaji
          english
        }
        description
        status
        genres
        trailer {
          site
          id
        }
        coverImage {
          extraLarge
        }
        bannerImage
        trending
        averageScore
        favourites
      }
    }
  }
`;
}

const mangaQuery = `
  query($id: Int) {
    Media(id: $id, type: MANGA) {
      id
      idMal
      title {
        romaji
        english
      }
      description
      status
      genres
      tags {
      name
      }
      synonyms
      trailer {
        id
      }
      startDate {
        year
        month
        day
      }
      staff {
        edges {
          id
          node {
            id
            name {
              full
              userPreferred
            }
            image {
              large
              medium
            }
          }
          role
        }
      }
      characters {
        edges {
          id
          role
          node {
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            image {
              large
            }
          }
        }
      }
      recommendations {
        edges {
          node {
            mediaRecommendation {
              id
              title {
                english
                userPreferred
              }
              coverImage {
                large
              }
              status
            }
          }
        }
      }
      externalLinks {
        url
        site
        language
      }
      trailer {
        site
        id
      }
      coverImage {
        extraLarge
      }
      bannerImage
      trending
      averageScore
      favourites
    }
  }
`;

const searchQuery = `
  query ($q: String, $page: Int) {
    Page(page: $page, perPage: 36) {
      media(search: $q, type: MANGA, genre_not_in: ["Hentai"]) {
        id
        idMal
        title {
          romaji
          english
        }
        status
        coverImage {
          extraLarge
        }
        trending
        averageScore
        favourites
      }
    }
  }
`;

const genreQuery = `
  query {
    GenreCollection
  }
`;

const tagsQuery = `
  query {
    MediaTagCollection {
      id
      name
    }
  }
`;

const trending = "TRENDING_DESC";
const popularity = "POPULARITY_DESC";

const trendingQuery = queryFactory(trending, 30);
const popularityQuery = queryFactory(popularity, 30);

export async function genericFetcher<Type>(url: string): Promise<Type> {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const fetchTrendingManga = cache(async (): Promise<IMangaList> => {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: trendingQuery }),
  });
  const data = await res.json();
  return data;
});

export const fetchPopularManga = cache(async (): Promise<IMangaList> => {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: popularityQuery }),
  });
  const data = await res.json();
  return data;
});

export const fetchDetailManga = cache(
  async (id: string): Promise<IDetailManga> => {
    const data = {
      query: mangaQuery,
      variables: { id },
    };
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to fetch detail manga from AniList");
    const json = await res.json();
    return json?.data?.Media;
  }
);

export const searchManga = cache(
  async (q: string, page: number): Promise<IManga[]> => {
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: searchQuery, variables: { q, page } }),
    });
    const data = await res.json();
    return data?.data?.Page?.media;
  }
);

export async function fetchDexChapters(
  mangadexId: string,
  lang: string
): Promise<IChapterDex[]> {
  const res = await axios.get(
    `https://api.mangadex.org/manga/${mangadexId}/feed?translatedLanguage[]=${lang}&limit=300&order[chapter]=desc&includes[]=scanlation_group`
  );

  let chapters = [...res.data?.data];

  if (res.data?.total > 300) {
    const count = Math.ceil(res.data.total / 300);
    const promises = [];
    for (let i = 2; i <= count; i++) {
      const offset = (i - 1) * 300;
      promises.push(
        axios
          .get(
            `https://api.mangadex.org/manga/${mangadexId}/feed?translatedLanguage[]=${lang}&limit=300&order[chapter]=desc&offset=${offset}`
          )
          .then((res) => {
            chapters.push(...res.data?.data);
          })
      );
    }

    await Promise.all(promises);
  }

  chapters = chapters.filter((chapter) => chapter.attributes.pages > 0);

  chapters.sort(
    (a, b) => Number(b?.attributes.chapter) - Number(a?.attributes.chapter)
  );

  chapters = chapters.filter((chapter, index, array) => {
    if (!array[index - 1]) return true;
    return array[index - 1].attributes.chapter !== chapter.attributes.chapter;
  });

  return chapters;
}

export function showStatus(status: string) {
  if (!status) return "";
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
}

export const fetchGenres = cache(async (): Promise<string[]> => {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: genreQuery }),
  });
  const data = await res.json();
  return data?.data?.GenreCollection;
});

export const fetchTags = cache(async (): Promise<ITag[]> => {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: tagsQuery }),
  });
  const data = await res.json();
  return data?.data?.MediaTagCollection;
});

export async function fetchMangaDexIds(
  malId: number | null | undefined
): Promise<string[]> {
  if (!malId) throw new Error("Mal Id not provided");
  const res = await fetch(`https://api.malsync.moe/mal/manga/${malId}`);
  const data: any = await res.json();

  const malDex = data?.Sites?.Mangadex;
  const mangadexIds = Object.keys(malDex);
  return mangadexIds;
}

export async function fetchChapterInfo(
  chapterId: string
): Promise<IChapterDex> {
  if (!chapterId) throw new Error("Chapter id not provided");
  const res = await fetch(`https://api.mangadex.org/chapter/${chapterId}`);
  const data: any = await res.json();
  const chapter = data.data;
  return chapter;
}

export async function fetchMangaDexChapters(
  mangadexId: string | undefined,
  lang = "en"
): Promise<IChapterDex[]> {
  if (!mangadexId) throw new Error("Mangadex id not provided");
  const chapters = await fetchDexChapters(mangadexId, lang);
  return chapters;
}

export async function fetchMangaDexInfo(
  mangadexId: string | undefined
): Promise<IMangaDex> {
  if (!mangadexId) throw new Error("Mangadex id not provided");
  const res = await fetch(
    `https://api.mangadex.org/manga/${mangadexId}?includes[]=cover_art`
  );
  const data = await res.json();
  const manga = data.data;
  return manga;
}

export async function fetchImagesChapter(
  chapterId: string
): Promise<IChapterImages> {
  const res = await fetch(
    `https://api.mangadex.org/at-home/server/${chapterId}`
  );
  const data = await res.json();
  return data;
}
