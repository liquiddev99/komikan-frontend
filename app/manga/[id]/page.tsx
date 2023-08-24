import Image from "next/image";
import { FaSmile, FaHeart } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { v4 } from "uuid";

import Status from "@/app/components/Status";
import { fetchDetailManga } from "@/app/utils/manga";
import ListChapters from "../components/ListChapters";
import Recommendation from "../components/Recommendation";
import FollowBtn from "../components/FollowBtn";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const manga = await fetchDetailManga(params.id);

  return {
    title: `${manga.title.english || manga.title.romaji}`,
  };
}

export default async function DetailManga({ params }: Props) {
  const manga = await fetchDetailManga(params.id);

  const jsonLd = {
    "@context": `https://komikan.org/manga/${manga.id}`,
    "@type": "Manga",
    name: manga.title.english || manga.title.romaji,
    image: manga.coverImage.extraLarge,
    description: manga.description,
  };

  return (
    <div className="min-h-[90vh]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {manga && (
        <div className="">
          {manga.bannerImage && (
            <div className="w-full hidden xs:block pb-[35%] sm:pb-[24%] relative">
              <Image
                src={manga.bannerImage}
                alt="Banner"
                fill
                className="object-cover"
              />
              <div className="w-full pb-[35%] sm:pb-[24%] bg-black z-10 absolute opacity-30"></div>
            </div>
          )}
          <div className="z-10 flex flex-col items-center md:items-start md:flex-row layout gap-6 lg:gap-8 mt-5 md:mt-0">
            <div
              className={`${
                manga.bannerImage &&
                "md:relative md:top-[-70px] md:lg:top-[-110px] "
              }z-10 md:w-1/5 flex flex-col sm:flex-row md:flex-col gap-7 md:gap-0 w-full`}
            >
              <Image
                src={manga.coverImage.extraLarge}
                alt="Cover"
                width={250}
                height={300}
                className="rounded-xl self-center sm:self-auto"
              />
              <div className="grow">
                <h1 className="text-3xl font-medium mb-2 sm:hidden">
                  {manga.title.english || manga.title.romaji}
                </h1>
                <FollowBtn />

                <div className="text-lg mb-1 font-semibold text-teal-500">
                  Status
                </div>
                <Status status={manga.status} />

                <div className="my-4 flex items-center">
                  <div className="flex items-center mr-3">
                    <FaSmile className="h-5 w-5 text-green-500 mr-2" />
                    <span>{manga.averageScore}%</span>
                  </div>
                  <div className="flex items-center">
                    <FaHeart className="h-5 w-5 text-rose-500 mr-2" />
                    <span>{manga.favourites}</span>
                  </div>
                </div>

                <div className="mt-4 text-lg mb-1 font-semibold text-teal-500">
                  Published At
                </div>
                <div className="mt-1 flex items-end">
                  <FcCalendar className="h-6 w-6 mr-2" />
                  <span className="text-slate-400">
                    {manga.startDate.day}/{manga.startDate.month}/
                    {manga.startDate.year}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-3 md:gap-4 md:hidden">
                  {manga.genres.map((genre) => (
                    <div
                      key={v4()}
                      className="px-6 py-1 bg-rose-600 rounded-full"
                    >
                      {genre}
                    </div>
                  ))}
                </div>

                <div className="mt-3 hidden md:block">
                  <div className="text-lg mb-1 font-semibold text-teal-400">
                    Synonyms
                  </div>
                  {manga.synonyms.map((synonym) => (
                    <p className="truncate" key={v4()}>
                      {synonym}
                    </p>
                  ))}
                </div>

                <div className="mt-3 hidden md:block">
                  <div className="text-lg mb-1 font-semibold text-teal-400">
                    Tags
                  </div>
                  {manga.tags.map((tag) => (
                    <p className="truncate" key={v4()}>
                      {tag.name}
                    </p>
                  ))}
                </div>

                <div className="mt-3 hidden md:block">
                  <div className="text-lg mb-1 font-semibold text-teal-400">
                    External Links
                  </div>
                  {manga.externalLinks.map((item) => (
                    <div key={v4()} className="text-blue-500">
                      <a
                        target="_blank"
                        href={item.url}
                        className="hover:underline"
                      >
                        {item.site} {item.language && item.site && " - "}{" "}
                        {item.language}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-[76%] lg:w-4/5 mt-0 md:mt-6">
              <h1 className="text-3xl font-medium mb-2 hidden sm:block">
                {manga.title.english || manga.title.romaji}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: manga.description }}
              ></div>

              <div className="mt-4 mb-6 md:flex flex-wrap gap-4 hidden">
                {manga.genres.map((genre) => (
                  <div
                    key={v4()}
                    className="px-6 py-1 bg-rose-600 rounded-full"
                  >
                    {genre}
                  </div>
                ))}
              </div>

              <ListChapters malId={manga.idMal} />

              {manga.characters.edges.length ? (
                <div className="mt-8 hidden sm:block">
                  <div className="mb-3 text-2xl font-semibold text-teal-500">
                    Characters
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {manga.characters.edges.slice(0, 9).map((character) => (
                      <div className="flex" key={v4()}>
                        <Image
                          src={character.node.image.large}
                          className="mr-3 object-cover"
                          alt="Character"
                          width={70}
                          height={110}
                        />

                        <div className="mt-2">
                          <p>
                            {character.node.name.userPreferred ||
                              character.node.name.full}
                          </p>
                          <p className="text-slate-400">{character.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {manga.staff.edges.length ? (
                <div className="mt-8 hidden sm:block">
                  <div className="mb-3 text-2xl font-semibold text-teal-500">
                    Staffs
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    {manga.staff.edges.slice(0, 9).map((staff) => (
                      <div className="flex" key={v4()}>
                        <Image
                          src={staff.node.image.large}
                          className="mr-3 object-cover"
                          alt="Character"
                          width={70}
                          height={110}
                        />

                        <div className="mt-2">
                          <p>
                            {staff.node.name.userPreferred ||
                              staff.node.name.full}
                          </p>
                          <p className="text-slate-400">{staff.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {manga?.trailer?.id && (
                <div className="mt-8">
                  <div className="mb-3 text-2xl font-semibold text-teal-500">
                    Trailer
                  </div>
                  <iframe
                    src={`https://www.youtube.com/embed/${manga.trailer.id}`}
                    title="YouTube video player"
                    allowFullScreen
                    className="outline-none w-full h-48 xs:h-60 sm:h-80 md:w-[540px] md:h-[300px]"
                  ></iframe>
                </div>
              )}

              <Recommendation manga={manga} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
