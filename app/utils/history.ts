import { Metadata } from "@grpc/grpc-js";
import {
  CreateHistoryRequest,
  CreateHistoryResponse,
  GetHistoriesRequest,
  HistoriesResponse,
} from "../pb/history_pb";
import { KomikanClient } from "../pb/service_komikan_grpc_pb";

export function createHistoryAsync(
  client: KomikanClient,
  metadata: Metadata,
  request: CreateHistoryRequest
): Promise<CreateHistoryResponse> {
  return new Promise<CreateHistoryResponse>((resolve, reject) => {
    client.upsertHistory(request, metadata, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
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
