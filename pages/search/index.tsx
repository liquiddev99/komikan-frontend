import { useSearchManga } from "@/hooks/manga";
import { useRouter } from "next/router";
import { v4 } from "uuid";
import Image from "next/image";
import { FaSmile, FaHeart } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Status from "@/components/manga/Status";

export default function Search() {
  const router = useRouter();
  const q = router.query.q as string;

  const { searchedManga, loading } = useSearchManga(q);

  return (
    <div className="layout">
      <h3 className="text-3xl font-medium border-b border-slate-400 pb-1">
        Result for "{q}"
      </h3>
      {loading && (
        <div className="flex items-center justify-center h-[30rem]">
          <AiOutlineLoading3Quarters className="w-12 h-12 animate-spin" />
        </div>
      )}
      {searchedManga && !searchedManga.data.Page.media.length && (
        <div className="text-2xl mt-10">No manga found</div>
      )}
      <div className="mt-8 container-list-manga">
        {searchedManga &&
          searchedManga.data.Page.media.map((manga) => (
            <Link href={`/manga/${manga.id}`} key={v4()}>
              <div className="rounded-md flex flex-col h-full overflow-hidden">
                <div className="flex w-full pb-[140%] relative">
                  <Image
                    src={manga.coverImage.extraLarge}
                    alt="Cover"
                    fill
                    sizes="20vw"
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col flex-grow justify-between py-2">
                  <span className="font-semibold line-clamp-1">
                    {manga.title.english || manga.title.romaji}
                  </span>

                  <div className="mt-1">
                    <div className="mb-3 flex items-center">
                      <div className="flex items-center mr-3">
                        <FaSmile className="h-5 w-5 text-green-500 mr-2" />
                        <span>{manga.averageScore}%</span>
                      </div>
                      <div className="flex items-center">
                        <FaHeart className="h-5 w-5 text-rose-500 mr-2" />
                        <span>{manga.favourites}</span>
                      </div>
                    </div>

                    <Status status={manga.status} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
