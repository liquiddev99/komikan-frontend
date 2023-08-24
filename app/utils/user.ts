import { Metadata } from "@grpc/grpc-js";
import { KomikanClient } from "../pb/service_komikan_grpc_pb";
import { GetUserRequest, UserResponse } from "../pb/user_pb";

export async function getUserAsync(
  client: KomikanClient,
  metadata: Metadata,
  request: GetUserRequest
): Promise<UserResponse> {
  return new Promise<UserResponse>((resolve, reject) => {
    client.getUser(request, metadata, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}
