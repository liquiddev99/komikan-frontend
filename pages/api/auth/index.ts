// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = req.cookies.user_session;

    if (!session) return res.status(401).json({ msg: "Unauthorized" });

    return res.status(200).json({ msg: "OK" });
  } catch (err) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
}
