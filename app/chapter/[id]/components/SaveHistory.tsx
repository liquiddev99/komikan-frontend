"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSWRConfig } from "swr";

interface Props {
  mangadexId: string | undefined;
  alId: string;
  readingChapter: string;
  coverImage: string;
  title: string;
}

export default function SaveHistory({
  mangadexId,
  readingChapter,
  coverImage,
  title,
  alId,
}: Props) {
  const pathname = usePathname();
  const { mutate } = useSWRConfig();

  useEffect(() => {
    async function saveHistory() {
      const userAgent = navigator.userAgent;
      await fetch("/gapi/save-history", {
        method: "POST",
        body: JSON.stringify({
          user_agent: userAgent,
          mangadex_id: mangadexId,
          reading_chapter: readingChapter,
          title,
          al_id: alId,
          cover_image: coverImage,
          path: pathname,
        }),
      });
      await mutate(`/gapi/get-histories?userAgent=${userAgent}`);
    }

    saveHistory();
  }, [alId, coverImage, mangadexId, readingChapter, title, mutate, pathname]);
  return <></>;
}
