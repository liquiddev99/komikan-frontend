import {
  IMangaList,
  IReturnDetailManga,
  IComick,
  IChapter,
} from "@/types/manga";
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
  query ($q: String) {
    Page(page: 1, perPage: 10) {
      media(search: $q, type: MANGA) {
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

const trending = "TRENDING_DESC";
const popularity = "POPULARITY_DESC";

const trendingQuery = queryFactory(trending, 30);
const popularityQuery = queryFactory(popularity, 30);

export async function fetchTrendingManga(): Promise<IMangaList> {
  const res = await axios.post("https://graphql.anilist.co", {
    query: trendingQuery,
  });
  return res.data;
}

export async function fetchPopularManga(): Promise<IMangaList> {
  const res = await axios.post("https://graphql.anilist.co", {
    query: popularityQuery,
  });
  return res.data;
}

export async function fetchDetailManga(
  id: string
): Promise<IReturnDetailManga> {
  const res = await axios.post("https://graphql.anilist.co", {
    query: mangaQuery,
    variables: { id },
  });
  return res.data;
}

export async function searchManga(q: string): Promise<IMangaList> {
  const res = await axios.post("https://graphql.anilist.co", {
    query: searchQuery,
    variables: { q },
  });
  return res.data;
}

export async function fetchComickId(malId: number) {
  const res = await axios.get(`/api/comick?malId=${malId}`);
  return res.data;
}

export async function fetchComickInfo(comickId: string): Promise<IComick> {
  const res = await axios.get(`https://api.comick.app/comic/${comickId}`);
  return res.data;
}

export async function fetchComickChapters(
  comickId: string,
  lang: string
): Promise<IChapter[]> {
  const res = await axios.get(
    `https://api.comick.app/comic/${comickId}/chapters?lang=${lang}`
  );

  let chapters = [...res.data?.chapters];

  if (res.data?.total > 300) {
    const count = Math.ceil(res.data.total / 300);
    const promises = [];
    for (let i = 2; i <= count; i++) {
      promises.push(
        axios
          .get(
            `https://api.comick.app/comic/${comickId}/chapters?lang=${lang}&page=${i}`
          )
          .then((res) => {
            chapters.push(...res.data.chapters);
          })
      );
    }

    await Promise.all(promises);
  }

  chapters.sort((a, b) => Number(b?.chap) - Number(a?.chap));

  return chapters as any;
}

export function showStatus(status: string) {
  if (!status) return "";
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
}

export async function fetchComickPages(hid: string): Promise<IComick> {
  const res = await axios.get(`https://api.comick.app/chapter/${hid}`);
  return res.data;
}
