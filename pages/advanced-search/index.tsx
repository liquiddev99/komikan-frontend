import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

import { fetchGenres, fetchTags } from "../../utils/manga";
import { ITag } from "@/types/manga";

interface Props {
  genres: string[];
  tags: ITag[];
}

export default function AdvancedSearch({ genres, tags }: Props) {
  const router = useRouter();
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);

  function handleGenres(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSelectedGenres([...selectedGenres, e.target.value]);
    } else {
      setSelectedGenres(
        selectedGenres.filter((genre) => genre !== e.target.value)
      );
    }
  }

  function handleTags(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSelectedTags([...selectedTags, e.target.value]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== e.target.value));
    }
  }

  function handleStatus(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setSelectedStatus([...selectedStatus, e.target.value]);
    } else {
      setSelectedStatus(
        selectedStatus.filter((status) => status !== e.target.value)
      );
    }
  }

  function handleSearch() {
    if (
      !selectedGenres.length &&
      !selectedTags.length &&
      !selectedStatus.length
    )
      return;

    let query = "";
    if (selectedGenres.length) {
      query += (query ? "&" : "?") + "genres=" + selectedGenres.join(",");
    }
    if (selectedTags.length) {
      query += (query ? "&" : "?") + "tags=" + selectedTags.join(",");
    }
    if (selectedStatus.length) {
      query += (query ? "&" : "?") + "status=" + selectedStatus.join(",");
    }

    router.push(`/advanced-search/query${query}`);
  }

  return (
    <div className="layout">
      <Head>
        <title>Mangazine | Advanced Search</title>
        <meta property="og:title" content="Mangazine | Advanced Search" />
        <meta name="description" content="Advanced search manga in Mangazine" />
        <meta
          property="og:description"
          content="Advanced search manga in Mangazine"
        />
        <meta
          property="og:URL"
          content="https://mangazine.site/advanced-search"
        />
        <meta property="og:type" content="website" />
      </Head>
      <h3 className="text-3xl font-medium pb-1 border-b border-slate-500">
        Advanced Search
      </h3>

      <button
        className="rounded-md px-4 py-1 bg-teal-600 mt-4"
        onClick={handleSearch}
      >
        Search
      </button>

      <div className="mt-3">
        <p className="text-2xl font-medium">Genres</p>
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 gap-y-2.5 mt-2">
          {genres &&
            genres.map((genre) => (
              <div key={genre} className="flex flex-row items-center">
                <input
                  type="checkbox"
                  id={genre}
                  className="mr-1"
                  name=""
                  value={genre}
                  onChange={handleGenres}
                />
                <label className="cursor-pointer line-clamp-1" htmlFor={genre}>
                  {genre}
                </label>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-2xl font-medium">Status</p>
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 gap-y-2.5 mt-2">
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              id="Finished"
              className="mr-1"
              value="FINISHED"
              onChange={handleStatus}
            />
            <label className="cursor-pointer line-clamp-1" htmlFor="Finished">
              Finished
            </label>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              id="Releasing"
              className="mr-1"
              value="RELEASING"
              onChange={handleStatus}
            />
            <label className="cursor-pointer line-clamp-1" htmlFor="Releasing">
              Releasing
            </label>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              id="Not_yet_released"
              className="mr-1"
              value="NOT_YET_RELEASED"
              onChange={handleStatus}
            />
            <label
              className="cursor-pointer line-clamp-1"
              htmlFor="Not_yet_released"
            >
              Not yet released
            </label>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              id="Cancelled"
              className="mr-1"
              value="CANCELLED"
              onChange={handleStatus}
            />
            <label className="cursor-pointer line-clamp-1" htmlFor="Cancelled">
              Cancelled
            </label>
          </div>
          <div className="flex flex-row items-center">
            <input
              type="checkbox"
              id="Hiatus"
              className="mr-1"
              value="HIATUS"
              onChange={handleStatus}
            />
            <label className="cursor-pointer line-clamp-1" htmlFor="Hiatus">
              Hiatus
            </label>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-2xl font-medium">Tags</p>
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-2 gap-y-2.5 mt-2">
          {tags &&
            tags.map((tag) => (
              <div key={tag.id} className="flex flex-row items-center">
                <input
                  type="checkbox"
                  id={tag.id.toString()}
                  className="mr-1"
                  value={tag.name}
                  onChange={handleTags}
                />
                <label
                  className="cursor-pointer line-clamp-1"
                  htmlFor={tag.id.toString()}
                >
                  {tag.name}
                </label>
              </div>
            ))}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const genres = await fetchGenres();
  const tags = await fetchTags();

  return {
    props: {
      genres,
      tags,
    },
    revalidate: 60,
  };
};
