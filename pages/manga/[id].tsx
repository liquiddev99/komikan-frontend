import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaSmile, FaHeart } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoLibraryOutline, IoLanguage } from "react-icons/io5";
import { FcCalendar } from "react-icons/fc";
import { v4 } from "uuid";

import Status from "@/components/manga/Status";
import {
  useDetailManga,
  useComickId,
  useComickChapters,
  useComickInfo,
} from "@/hooks/manga";
import Link from "next/link";

export default function DetaiManga() {
  const [lang, setLang] = useState("en");
  const router = useRouter();
  const id = router.query.id as string;

  const { manga: rawManga } = useDetailManga(id);
  const { comickId } = useComickId(rawManga?.data.Media.idMal);
  const { comickInfo } = useComickInfo(comickId);
  const { chapters, loading: loadingChapters } = useComickChapters(
    comickId,
    lang
  );

  const manga = rawManga?.data.Media;

  function getFlagEmoji(countryCode: string) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  console.log("langList", comickInfo?.langList);

  return (
    <div className="min-h-[70vh]">
      {manga && (
        <div className="">
          {manga.bannerImage && (
            <div className="w-full pb-[24%] relative">
              <Image
                src={manga.bannerImage}
                alt="Banner"
                fill
                className="object-cover"
              />
              <div className="w-full pb-[24%] bg-black z-10 absolute opacity-30"></div>
            </div>
          )}
          <div className="z-10 flex layout">
            <div
              className={`${
                manga.bannerImage && "relative top-[-110px] "
              }z-10 mr-8 w-1/5`}
            >
              <Image
                src={manga.coverImage.extraLarge}
                alt="Cover"
                width={250}
                height={300}
                className="rounded-xl"
              />
              <button
                onClick={() => {}}
                className="mt-5 mb-4 bg-teal-500 rounded-lg px-6 py-1 flex items-center font-semibold text-slate-100"
              >
                Add to Favourite
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

              <div className="mt-3">
                <div className="text-lg mb-1 font-semibold text-teal-400">
                  Synonyms
                </div>
                {manga.synonyms.map((synonym) => (
                  <p className="truncate">{synonym}</p>
                ))}
              </div>
            </div>

            <div className="w-4/5 mt-6">
              <h3 className="text-3xl font-medium mb-2">
                {manga.title.english || manga.title.romaji}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: manga.description }}
              ></div>

              <div className="mt-4 flex">
                {manga.genres.map((genre) => (
                  <div
                    key={v4()}
                    className="mr-3 px-6 py-1 bg-rose-500 rounded-full"
                  >
                    {genre}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-3">
                  <span className="text-2xl font-semibold text-teal-500 mr-3">
                    Chapters
                  </span>
                </div>
                <div className="flex items-end mb-3">
                  <div className="mr-2 flex items-center mb-0.5">
                    <IoLanguage className="h-6 w-6 mr-1" /> Language
                  </div>
                  <select
                    className="text-slate-200 rounded-md px-3 py-1 bg-slate-800"
                    onChange={(e) => {
                      if (e.target.value) {
                        setLang(e.target.value);
                      }
                    }}
                  >
                    <option value="" selected>
                      Select Language
                    </option>
                    {comickInfo &&
                      comickInfo.langList.map((lang) => (
                        <option value={lang}>{lang}</option>
                      ))}
                  </select>
                </div>

                {loadingChapters && (
                  <div className="flex justify-center items-center h-56">
                    <AiOutlineLoading3Quarters className="h-14 w-14 animate-spin" />
                  </div>
                )}
                {!loadingChapters && !chapters?.length && (
                  <div>No chapters found</div>
                )}
                <div className="overflow-y-auto max-h-[30rem]">
                  {chapters?.length ? (
                    <div>
                      <table className="w-full">
                        <thead className="sticky top-0 bg-bg-color">
                          <tr className="text-lg">
                            <th className="text-left pl-3 pb-1">Chap</th>
                            <th className="text-left pl-3 pb-1">Group</th>
                            <th className="text-left pl-3 pb-1 pr-8">
                              Published At
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {chapters
                            .filter((chapter) => chapter.chap)
                            .map((chapter) => (
                              <tr
                                className="hover:bg-slate-700 cursor-pointer"
                                key={chapter.hid}
                                onClick={() =>
                                  router.push(`/chapter/${chapter.hid}`)
                                }
                              >
                                <td className="border-b border-slate-500 hover:bg-slate-700">
                                  <div className="flex justify-between py-2 px-3">
                                    <div>
                                      Chapter {chapter.chap}{" "}
                                      {chapter.title && "-"} {chapter.title}
                                    </div>
                                  </div>
                                </td>
                                <td className="py-2 pl-3 border-b border-slate-500">
                                  {chapter?.group_name?.length > 0 ? (
                                    <div>{chapter.group_name[0]}</div>
                                  ) : null}
                                </td>
                                <td className="py-2 pl-3 border-b border-slate-500">
                                  {chapter.created_at &&
                                    new Intl.DateTimeFormat("en-GB").format(
                                      new Date(chapter.created_at)
                                    )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 text-2xl font-semibold text-teal-500">
                  Characters
                </div>
                <div className="grid grid-cols-3 gap-5">
                  {manga.characters.edges.slice(0, 9).map((character) => (
                    <div className="flex">
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

              <div className="mt-8">
                <div className="mb-3 text-2xl font-semibold text-teal-500">
                  Staffs
                </div>
                <div className="grid grid-cols-3 gap-5">
                  {manga.staff.edges.slice(0, 9).map((staff) => (
                    <div className="flex">
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

              {manga.trailer && (
                <div className="mt-8">
                  <div className="mb-3 text-2xl font-semibold text-teal-500">
                    Trailer
                  </div>
                  <div className="grid grid-cols-3 gap-5 outline-none">
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${manga.trailer.id}`}
                      title="YouTube video player"
                      allowFullScreen
                      className="outline-none"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
