"use client";
import { useDexChapters, useMangadexInfo } from "@/app/hooks/mangadex";
import { IoLanguage } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { v4 } from "uuid";

interface IProps {
  mangadexId: string;
}
export default function ChapterTable({ mangadexId }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const lang = searchParams.get("lang");

  const { mangadex } = useMangadexInfo(mangadexId);
  const { chapters: dexChapters, loading: loadingChapters } = useDexChapters(
    mangadexId,
    lang || "en"
  );

  function getFlagEmoji(countryCode: string) {
    let code = countryCode.slice(0, 2);
    if (code === "en") code = "gb";
    if (code === "vi") code = "vn";
    const codePoints = code
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  return (
    <div className="mb-5">
      <div className="mb-3">
        <span className="text-2xl font-semibold text-teal-500 mr-3">
          {mangadex?.attributes.title.en}{" "}
          {mangadex?.attributes.title?.en && "-"} Chapters
        </span>
      </div>
      <div className="flex items-end mb-3">
        <div className="mr-2 flex items-center mb-0.5">
          <IoLanguage className="h-6 w-6 mr-1" /> Language
        </div>
        <select
          className="text-slate-200 rounded-md px-3 py-1 bg-slate-600"
          onChange={(e) => {
            if (e.target.value) {
              router.replace(`${pathname}?lang=${e.target.value}`, {
                scroll: false,
              });
            }
          }}
          value={lang || "en"}
        >
          <option value="">Select Language</option>
          {mangadex &&
            mangadex.attributes.availableTranslatedLanguages
              .filter((code) => code)
              .map((lang) => (
                <option value={lang} key={v4()}>
                  {getFlagEmoji(lang)} {lang}
                </option>
              ))}
        </select>
      </div>

      {loadingChapters && (
        <div className="flex justify-center items-center h-56">
          <AiOutlineLoading3Quarters className="h-14 w-14 animate-spin" />
        </div>
      )}
      {!loadingChapters && !dexChapters?.length && <div>No chapters found</div>}
      <div className="overflow-y-auto max-h-[30rem]">
        {dexChapters?.length ? (
          <div>
            <table className="w-full">
              <thead className="sticky top-0 bg-bg-color">
                <tr className="text-lg">
                  <th className="text-left pl-1 md:pl-3 pb-1">Chap</th>
                  <th className="text-left pl-1 md:pl-3 pb-1 min-w-fit">
                    Group
                  </th>
                  <th className="text-left pl-1 md:pl-3 pb-1 pr-8">Time</th>
                </tr>
              </thead>
              <tbody>
                {dexChapters
                  .filter((chapter) => chapter.attributes.chapter)
                  .map((chapter) => {
                    const scanGroup = chapter.relationships.find(
                      (item) => item.type === "scanlation_group"
                    );
                    const scanGroupName = scanGroup?.attributes?.name;
                    const website = scanGroup?.attributes?.website;
                    return (
                      <tr
                        className="hover:bg-slate-700 cursor-pointer"
                        key={chapter.id}
                        onClick={() => router.push(`/chapter/${chapter.id}`)}
                      >
                        <td className="border-b border-slate-500 hover:bg-slate-700 px-1 md:px-3">
                          Chapter {chapter.attributes.chapter}{" "}
                          {chapter.attributes.title && "-"}{" "}
                          {chapter.attributes.title}
                        </td>
                        <td
                          className={`py-2 pl-1 md:pl-3 border-b border-slate-500 min-w-fit`}
                        >
                          {website ? (
                            <a
                              className={`${
                                website
                                  ? "cursor-pointer hover:text-blue-500 hover:underline"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              href={website}
                              target="_blank"
                            >
                              {scanGroupName}
                            </a>
                          ) : (
                            <>{scanGroupName}</>
                          )}
                        </td>
                        <td className="py-2 pl-1 pr-2 md:pl-3 border-b border-slate-500">
                          {chapter.attributes.createdAt &&
                            new Intl.DateTimeFormat("en-GB").format(
                              new Date(chapter.attributes.createdAt)
                            )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}
