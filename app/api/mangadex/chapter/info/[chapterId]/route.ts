// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { chapterId: string } }
) {
  const chapterId = params.chapterId;

  const res = await fetch(`https://api.mangadex.org/chapter/${chapterId}`);
  const data: any = await res.json();
  const chapter = data.data;
  return NextResponse.json(chapter);
}
