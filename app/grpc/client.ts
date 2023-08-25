import { KomikanClient } from "../pb/service_komikan_grpc_pb";
import { credentials } from "@grpc/grpc-js";

export const client = new KomikanClient(
  process.env.SERVER_ADDRESS || "0.0.0.0:9090",
  credentials.createInsecure()
);
