// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const chapterId = req.query.chapterId;
    const response = await axios.get(
      `https://api.mangadex.org/at-home/server/${chapterId}`
    );

    const chapter = response.data.chapter;
    return res.status(200).json({ chapter });
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Mangadex Info" });
  }
}
