import { KomikanClient } from "../pb/service_komikan_grpc_pb";
import { credentials } from "@grpc/grpc-js";

export const client = new KomikanClient(
  "159.65.129.57:9090",
  credentials.createInsecure()
);
