import axios from "axios";
import { IMangaList } from "@/types/manga";

function searchQuery(genres: string[], tags: string[], status: string[]) {
  return `
    query(${genres?.length ? "$genres: [String]" : ""}${
    tags?.length ? ", $tags: [String]" : ""
  }${status?.length ? ", $status: [MediaStatus]" : ""}) {
      Page(page: 1, perPage: 36) {
        media(type: MANGA, sort: UPDATED_AT_DESC${
          genres?.length ? ", genre_in: $genres" : ""
        }${tags?.length ? ", tag_in: $tags" : ""}${
    status?.length ? ", status_in: $status" : ""
  }) {
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
}
export async function advancedSearch(
  genres: string[],
  tags: string[],
  status: string[]
): Promise<IMangaList> {
  const res = await axios.post("https://graphql.anilist.co", {
    query: searchQuery(genres, tags, status),
    variables: {
      genres: genres.length ? genres : null,
      tags: tags.length ? tags : null,
      status: status.length ? status : null,
    },
  });

  return res.data;
}
