import axios from "axios";
import { IManga } from "@/types/manga";

function searchQuery(genres: string[], tags: string[], status: string[]) {
  return `
    query($page: Int${genres?.length ? ", $genres: [String]" : ""}${
    tags?.length ? ", $tags: [String]" : ""
  }${status?.length ? ", $status: [MediaStatus]" : ""}) {
      Page(page: $page, perPage: 36) {
        media(type: MANGA, sort: SCORE_DESC${
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
  status: string[],
  page: number
): Promise<IManga[]> {
  const res = await axios.post("https://graphql.anilist.co", {
    query: searchQuery(genres, tags, status),
    variables: {
      genres: genres.length ? genres : null,
      tags: tags.length ? tags : null,
      status: status.length ? status : null,
      page,
    },
  });

  return res.data?.data?.Page?.media;
}
