// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { mangaId: string } }
) {
  const mangaId = params.mangaId;

  const res = await fetch(
    `https://api.mangadex.org/manga/${mangaId}?includes[]=cover_art`
  );
  const data: any = await res.json();
  const manga = data.data;

  return NextResponse.json(manga);
}
