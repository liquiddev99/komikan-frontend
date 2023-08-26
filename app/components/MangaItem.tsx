import { IManga } from "../types/manga";
import Image from "next/image";
import Link from "next/link";
import { FaSmile, FaHeart } from "react-icons/fa";

import Status from "./Status";

interface Props {
  manga: IManga;
}

export default function MangaItem({ manga }: Props) {
  return (
    <Link href={`/manga/${manga.id}`}>
      <div className="rounded-md flex flex-col h-full overflow-hidden">
        <div className="flex w-full pb-[140%] relative">
          <Image
            src={manga.coverImage.extraLarge}
            alt="Cover"
            fill
            sizes="(max-width: 499px) 50vw, (max-width: 767px) 33vw, (max-width: 1023px) 25vw, 20vw"
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col flex-grow justify-between py-2">
          <span className="font-semibold line-clamp-1">
            {manga.title.english || manga.title.romaji}
          </span>

          <div className="mt-1">
            <div className="mb-3 flex items-center">
              {manga.averageScore ? (
                <div className="flex items-center mr-3">
                  <FaSmile className="h-5 w-5 text-green-500 mr-2" />
                  <span>{manga.averageScore}%</span>
                </div>
              ) : null}

              {manga.favourites ? (
                <div className="flex items-center">
                  <FaHeart className="h-5 w-5 text-rose-500 mr-2" />
                  <span>{manga.favourites}</span>
                </div>
              ) : null}
            </div>

            <Status status={manga.status} />
          </div>
        </div>
      </div>
    </Link>
  );
}
