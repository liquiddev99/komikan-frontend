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
            id
            mediaRecommendation {
              id
              title {
                romaji
                english
              }
              coverImage {
                large
              }
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

  return chapters as any;
}

export function showStatus(status: string) {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
}

export async function fetchComickPages(hid: string): Promise<IComick> {
  const res = await axios.get(`https://api.comick.app/chapter/${hid}`);
  return res.data;
}
