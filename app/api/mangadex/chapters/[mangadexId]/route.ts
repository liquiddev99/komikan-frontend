// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchDexChapters } from "@/app/utils/manga";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { mangadexId: string; lang: string } }
) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const mangadexId = params.mangadexId;
  const lang = searchParams.get("lang") as string;

  const chapters = await fetchDexChapters(mangadexId, lang);
  return NextResponse.json(chapters);
}
