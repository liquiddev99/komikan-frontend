import { Metadata } from "@grpc/grpc-js";
import { GetHistoriesRequest, HistoriesResponse } from "../pb/history_pb";
import { KomikanClient } from "../pb/service_komikan_grpc_pb";
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

export async function getHistoriesAsync(
  client: KomikanClient,
  metadata: Metadata,
  request: GetHistoriesRequest
): Promise<HistoriesResponse> {
  return new Promise<HistoriesResponse>((resolve, reject) => {
    client.getHistories(request, metadata, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}
