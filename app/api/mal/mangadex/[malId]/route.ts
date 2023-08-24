// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { malId: string } }
) {
  const malId = params.malId;

  const res = await fetch(`https://api.malsync.moe/mal/manga/${malId}`);
  const data: any = await res.json();

  const malDex = data?.Sites?.Mangadex;
  const mangadexIds = Object.keys(malDex);

  return NextResponse.json(mangadexIds);
}
