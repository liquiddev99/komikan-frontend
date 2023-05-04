// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchComickChapters } from "@/utils/manga";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const lang = req.query.lang as string;
    const comickId = req.query.comickId as string;

    const chapters = await fetchComickChapters(comickId, lang);

    return res.status(200).json(chapters);
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Comick Info" });
  }
}
