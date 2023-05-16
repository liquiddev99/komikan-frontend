import { useAuth } from "@/hooks/auth";
import { IHistoryManga } from "@/types/manga";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function History() {
  const router = useRouter();
  const { authenticated, loading } = useAuth();
  const [history, setHistory] = useState<IHistoryManga[]>([]);

  useEffect(() => {
    if (authenticated || loading) return;
    const rawHistory = localStorage.getItem("mangazine-history");
    if (!rawHistory) return;
    const history = JSON.parse(rawHistory);
    setHistory(history);
  }, [authenticated, loading]);

  return (
    <div className="layout min-h-screen">
      <h3 className="text-3xl font-medium border-b border-slate-400 pb-1">
        History
      </h3>
      {!history.length && !loading && (
        <div className="mt-5 text-lg">You don't have manga history yet</div>
      )}
      <div className="mt-10">
        <div className="container-list-manga">
          {history.length
            ? history.map((manga) => (
                <div className="rounded-md flex flex-col h-full overflow-hidden">
                  <div
                    className={`flex w-full pb-[140%] relative ${
                      manga.alMangaId ? "cursor-pointer" : ""
                    }`}
                    onClick={() => {
                      if (manga.alMangaId) {
                        router.push(`/manga/${manga.alMangaId}`);
                      }
                    }}
                  >
                    <Image
                      src={manga.coverImage}
                      alt="Cover"
                      fill
                      sizes="20vw"
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col flex-grow justify-between py-2">
                    <span className="font-semibold line-clamp-1">
                      {manga.mangaTitle}
                    </span>
                  </div>
                  <button
                    className="mt-1 max-w-fit py-1 px-3 rounded-lg bg-red-500 font-medium"
                    onClick={() => router.push(manga.readingChapter.path)}
                  >
                    Continue
                    {manga.readingChapter.chap
                      ? ` Chap ${manga.readingChapter.chap}`
                      : " Reading"}
                  </button>
                </div>
              ))
            : null}
        </div>
      </div>
      <div></div>
    </div>
  );
}
