// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const malId = req.query.malId;
    const response = await axios.get(
      `https://api.malsync.moe/mal/manga/${malId}`
    );

    const malDex = response.data?.Sites?.Mangadex;
    const mangadexIds = Object.keys(malDex);
    return res.status(200).json(mangadexIds);
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Mangadex Info" });
  }
}
