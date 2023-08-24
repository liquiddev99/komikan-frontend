"use client";
import { IHistoryManga } from "@/app/types/manga";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  history: IHistoryManga;
}

export default function HistoryItem({ history }: Props) {
  const router = useRouter();

  const ImgComponent = (
    <div
      className={`flex w-full pb-[140%] relative ${
        history.alId ? "cursor-pointer" : ""
      }`}
    >
      <Image
        src={history.coverImage}
        alt="Cover"
        fill
        sizes="20vw"
        className="object-cover rounded-md"
      />
    </div>
  );

  return (
    <div
      className="rounded-md flex flex-col h-full overflow-hidden"
      key={history.mangadexId}
    >
      {history.alId ? (
        <Link href={`/manga/${history.alId}`}>{ImgComponent}</Link>
      ) : (
        ImgComponent
      )}

      <div className="flex flex-col flex-grow justify-between py-2">
        <span className="font-semibold line-clamp-1">{history.title}</span>
      </div>
      <Link
        href={history.path}
        className="mt-1 max-w-fit py-1 px-3 rounded-lg bg-red-500 font-medium"
      >
        Continue
        {history.readingChapter
          ? ` Chap ${history.readingChapter}`
          : " Reading"}
      </Link>
    </div>
  );
}
