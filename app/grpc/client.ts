import { KomikanClient } from "../pb/service_komikan_grpc_pb";
import { credentials } from "@grpc/grpc-js";

export const client = new KomikanClient(
  "localhost:9090",
  credentials.createInsecure()
);
