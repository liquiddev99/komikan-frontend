// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
import { Metadata } from "@grpc/grpc-js";

import { getHistoriesAsync } from "@/app/utils/history";
import { client } from "@/app/grpc/client";
import { GetHistoriesRequest } from "@/app/pb/history_pb";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const metadata = new Metadata();
    const accessToken = cookies().get("access_token");
    if (accessToken) {
      metadata.add("authorization", `Bearer ${accessToken.value}`);
    }

    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const limit = parseInt(searchParams.get("limit") || "30");
    const offset = parseInt(searchParams.get("offset") || "0");
    const userAgent = searchParams.get("userAgent") || "";

    const request = new GetHistoriesRequest();
    request.setUserAgent(userAgent);
    request.setLimit(limit);
    request.setOffset(offset);

    const res = await getHistoriesAsync(client, metadata, request);

    return NextResponse.json({
      ok: true,
      histories: res.toObject().historiesList,
    });
  } catch (err: any) {
    return NextResponse.json({
      ok: false,
      message: err.details || "An error occured",
    });
  }
}
