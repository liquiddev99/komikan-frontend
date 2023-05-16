// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const mangaId = req.query.mangaId;
    const response = await axios.get(
      `https://api.mangadex.org/manga/${mangaId}?includes[]=cover_art`
    );

    const manga = response.data.data;
    return res.status(200).json(manga);
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Mangadex Info" });
  }
}
