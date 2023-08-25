import MangaItem from "./components/MangaItem";
import Carousel from "./components/Carousel";
import { fetchPopularManga, fetchTrendingManga } from "./utils/manga";

export default async function Home() {
  const popularManga = await fetchPopularManga();
  const trendingManga = await fetchTrendingManga();

  console.log("server addr: ", process.env.SERVER_ADDRESS);
  console.log("fe addr: ", process.env.NEXT_PUBLIC_FE_URL);

  return (
    <main className="layout">
      <Carousel trendingManga={trendingManga} />
      <div className="sm:mt-12">
        <h3 className="text-3xl font-semibold text-yellow-300">
          Trending Manga
        </h3>
        <div className="mt-8 container-list-manga">
          {trendingManga &&
            trendingManga.data.Page.media
              .slice(6)
              .map((manga, index) => <MangaItem manga={manga} key={index} />)}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-yellow-300">
          All Time Popular
        </h3>
        <div className="mt-8 container-list-manga">
          {popularManga &&
            popularManga.data.Page.media
              .slice(6)
              .map((manga, index) => <MangaItem manga={manga} key={index} />)}
        </div>
      </div>
    </main>
  );
}
