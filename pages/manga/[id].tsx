import Image from "next/image";
import { useRouter } from "next/router";
import { FaSmile, FaHeart } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoLibraryOutline } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { v4 } from "uuid";
import useEmblaCarousel from "embla-carousel-react";

import Status from "@/components/manga/Status";
import { useDetailManga } from "@/hooks/manga";
import Link from "next/link";
import Head from "next/head";
import DetailMangaSkeleton from "@/components/skeleton/DetailMangaSkeleton";
import { useDexId } from "@/hooks/mangadex";
import ListChapters from "@/components/manga/ListChapters";

export default function DetailManga() {
  const router = useRouter();
  const id = router.query.id as string;
  const [emblaRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const { manga, loading } = useDetailManga(id);
  const { mangadexIds } = useDexId(manga?.idMal);

  const mangaTitle = manga?.title.english || manga?.title.romaji;

  return (
    <div className="min-h-[90vh]">
      <Head>
        <title>{mangaTitle ? `${mangaTitle} - Mangazine` : "Mangazine"}</title>
      </Head>
      {loading && <DetailMangaSkeleton />}
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
                <button
                  onClick={() => {}}
                  className="mt-5 mb-4 bg-teal-500 rounded-lg px-6 py-1 flex items-center font-semibold text-slate-100"
                >
                  Follow
                  <IoLibraryOutline className="h-6 w-6 ml-2" />
                </button>

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

              {mangadexIds && mangadexIds.length > 1 && (
                <h3 className="text-2xl font-bold mb-4 text-green-500">
                  {mangadexIds.length} variants of manga found
                </h3>
              )}

              {mangadexIds &&
                mangadexIds.map((mangadexId) => (
                  <ListChapters mangadexId={mangadexId} />
                ))}

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

              {manga.recommendations.edges.length ? (
                <div className="mt-8">
                  <div className="mb-3 text-2xl font-semibold text-teal-500">
                    Recommendations
                  </div>
                  <div className="embla mt-3 relative" ref={emblaRef}>
                    <div className="embla__container cursor-move">
                      {manga.recommendations.edges.map((recommendation) => (
                        <div
                          className="grow-0 shrink-0 basis-1/3 xs:basis-1/4 sm:basis-1/5 md:basis-1/5 lg:basis-1/6 xl:basis-[14%] mx-3 first:ml-0"
                          key={v4()}
                        >
                          {recommendation.node.mediaRecommendation && (
                            <Link
                              href={`/manga/${recommendation.node.mediaRecommendation.id}`}
                              key={v4()}
                            >
                              <div className="rounded-md flex flex-col h-full overflow-hidden">
                                <div className="flex w-full pb-[140%] relative">
                                  <Image
                                    src={
                                      recommendation.node.mediaRecommendation
                                        .coverImage.large
                                    }
                                    alt="Cover"
                                    fill
                                    sizes="20vw"
                                    className="object-cover rounded-md"
                                  />
                                </div>
                                <div className="flex flex-col flex-grow justify-between py-2">
                                  <span className="font-semibold line-clamp-2">
                                    {recommendation.node.mediaRecommendation
                                      .title.userPreferred ||
                                      recommendation.node.mediaRecommendation
                                        .title.english}
                                  </span>

                                  <div className="mt-2">
                                    <Status
                                      status={
                                        recommendation.node.mediaRecommendation
                                          .status
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                    <AiOutlineArrowRight
                      onClick={() => {
                        embla?.scrollTo(embla.selectedScrollSnap() + 5);
                      }}
                      className="w-11 h-11 absolute top-1/3 right-1 z-10 rounded-full bg-black/70 p-2.5 cursor-pointer"
                    />
                    <AiOutlineArrowLeft
                      onClick={() => {
                        embla?.scrollTo(embla.selectedScrollSnap() - 5);
                      }}
                      className="w-11 h-11 absolute top-1/3 left-1 z-10 rounded-full bg-black/70 p-2.5 cursor-pointer"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
