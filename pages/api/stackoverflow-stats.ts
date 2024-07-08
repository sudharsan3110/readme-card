// pages/api/stackoverflow-stats.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import extractStats from '../../service/extract-stats' // Adjust the import according to your project structure

interface StackOverflowStats {
  reputation: number;
  answers: number;
  questions: number;
  // Add other stats you want to include
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: "userId parameter is required" });
  }

  try {
    const url = `https://stackoverflow.com/users/${userId}?tab=profile`;
    const { data: rawUserData } = await axios.get(url);

    const stats: StackOverflowStats = extractStats(rawUserData);

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch StackOverflow stats" });
  }
}
