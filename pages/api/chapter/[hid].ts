// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchComickChapter } from "@/utils/manga";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const hid = req.query.hid as string;

    const chapter = await fetchComickChapter(hid);

    return res.status(200).json(chapter);
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Comick Info" });
  }
}
