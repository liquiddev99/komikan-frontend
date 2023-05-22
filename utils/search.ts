import axios from "axios";
import { IManga } from "@/types/manga";

function searchQuery(
  genres: string[],
  tags: string[],
  status: string[],
  sort: string
) {
  return `
    query($page: Int${genres?.length ? ", $genres: [String]" : ""}${
    tags?.length ? ", $tags: [String]" : ""
  }${status?.length ? ", $status: [MediaStatus]" : ""}) {
      Page(page: $page, perPage: 36) {
        media(type: MANGA, sort: ${sort}${
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
  page: number,
  sort: string
): Promise<IManga[]> {
  console.log("sort", sort);
  const res = await axios.post("https://graphql.anilist.co", {
    query: searchQuery(genres, tags, status, sort),
    variables: {
      genres: genres.length ? genres : null,
      tags: tags.length ? tags : null,
      status: status.length ? status : null,
      page,
      sort,
    },
  });

  return res.data?.data?.Page?.media;
}
