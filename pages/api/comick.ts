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
    const malComick = response.data?.Sites?.Comick;
    const comickId = Object.keys(malComick)[0];
    return res.status(200).json({ comickId });
  } catch (err) {
    return res.status(400).json({ msg: "Failed to get Comick Info" });
  }
}
