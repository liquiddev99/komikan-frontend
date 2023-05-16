import { IHistoryManga } from "../types/manga";
export function saveHistoryUnAuth(manga: IHistoryManga) {
  try {
    const rawHistory = localStorage.getItem("mangazine-history");
    if (!rawHistory) {
      const readManga = [manga];
      localStorage.setItem("mangazine-history", JSON.stringify(readManga));
      return;
    }

    const history: IHistoryManga[] = JSON.parse(rawHistory);

    if (history.length > 50) history.pop();
    const newHistory = history.filter(
      (historyManga) => historyManga.mangadexId !== manga.mangadexId
    );
    newHistory.unshift(manga);

    localStorage.setItem("mangazine-history", JSON.stringify(newHistory));
  } catch (err) {}
}
