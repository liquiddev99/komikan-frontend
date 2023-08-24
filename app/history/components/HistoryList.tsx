"use client";
import { IHistoryManga } from "@/app/types/manga";
import useSWR from "swr";
import HistoryItem from "./HistoryItem";
import { FaBoxOpen } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";

interface Props {
  userAgent: string;
}

export default function HistoryList({ userAgent }: Props) {
  async function fetcher(url: string): Promise<IHistoryManga[]> {
    const res = await fetch(url);
    const data = await res.json();
    return data.histories;
  }

  const { data, isLoading } = useSWR(
    userAgent ? `/gapi/get-histories?userAgent=${userAgent}` : null,
    fetcher
  );

  return (
    <div>
      <div className="container-list-manga">
        {data?.length
          ? data.map((history) => (
              <HistoryItem history={history} key={history.mangadexId} />
            ))
          : null}
      </div>
      {!isLoading && !data?.length && (
        <div className="flex items-center justify-center flex-col">
          <HiMiniArchiveBoxXMark className="h-56 w-56 text-slate-600" />
          <p className="text-slate-400 text-lg">
            Looks like you don&apos;t have history yet, let&apos;s dive into all
            the manga out there!
          </p>
        </div>
      )}
    </div>
  );
}
