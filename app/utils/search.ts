import axios from "axios";
import { IManga } from "@/app/types/manga";
import { cache } from "react";

function searchQuery(
  genres: string[],
  tags: string[],
  status: string[],
  sort: string
) {
  return `
    query($page: Int${genres?.length ? ", $genres: [String]" : ""}${
    tags?.length ? ", $tags: [String]" : ""
  }${status?.length ? ", $status: [MediaStatus]" : ""}${
    sort ? ", $sort: [MediaSort]" : ""
  }) {
      Page(page: $page, perPage: 36) {
        media(type: MANGA${sort ? ", sort: $sort" : ""}${
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

export const advancedSearch = cache(
  async (
    genres: string[],
    tags: string[],
    status: string[],
    page: number,
    sort: string
  ): Promise<IManga[]> => {
    const queryData = {
      query: searchQuery(genres, tags, status, sort),
      variables: {
        genres: genres.length ? genres : null,
        tags: tags.length ? tags : null,
        status: status.length ? status : null,
        page,
        sort: sort ? sort : null,
      },
    };
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    });
    const data = await res.json();
    return data?.data?.Page?.media;
  }
);
