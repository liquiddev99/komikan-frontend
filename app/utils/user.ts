import { Metadata } from "@grpc/grpc-js";
import { KomikanClient } from "../pb/service_komikan_grpc_pb";
import {
  CreateUserRequest,
  CreateUserResponse,
  GetUserRequest,
  LoginUserRequest,
  LoginUserResponse,
  UserResponse,
} from "../pb/user_pb";

export function createUserAsync(
  client: KomikanClient,
  request: CreateUserRequest
): Promise<CreateUserResponse> {
  return new Promise<CreateUserResponse>((resolve, reject) => {
    client.createUser(request, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

export function loginUserAsync(
  client: KomikanClient,
  request: LoginUserRequest
): Promise<LoginUserResponse> {
  return new Promise<LoginUserResponse>((resolve, reject) => {
    client.loginUser(request, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
}

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
