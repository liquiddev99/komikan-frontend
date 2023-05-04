// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchComickChapter, fetchComickInfo } from "@/utils/manga";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const comickId = req.query.comickId as string;

    const chapter = await fetchComickInfo(comickId);

    return res.status(200).json(chapter);
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Comick Info" });
  }
}
