import { fetchGenres, fetchTags } from "../utils/manga";
import Search from "./components/Search";

export default async function AdvancedSearch() {
  const genres = await fetchGenres();
  const tags = await fetchTags();

  return (
    <div className="layout">
      <h3 className="text-3xl font-medium pb-1 border-b border-slate-500">
        Advanced Search
      </h3>

      <Search tags={tags} genres={genres} />
    </div>
  );
}
