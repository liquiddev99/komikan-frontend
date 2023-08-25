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
    console.log("run");
    console.log(process.env.NEXT_PUBLIC_FE_URL);
    async function saveHistory() {
      const userAgent = navigator.userAgent;
      const res = await fetch("http://159.65.129.57:3000/gapi/save-history", {
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
      const data = await res.json();
      console.log("data", data);
      await mutate(`/gapi/get-histories?userAgent=${userAgent}`);
    }

    saveHistory();
  }, [alId, coverImage, mangadexId, readingChapter, title, mutate, pathname]);
  return <></>;
}
