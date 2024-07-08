import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface GitHubStats {
  followers: number;
  publicRepos: number;
  // Add other stats you want to include
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "username parameter is required" });
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const data = response.data;

    const stats: GitHubStats = {
      followers: data.followers,
      publicRepos: data.public_repos,
      // Add other stats you want to include
    };

    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch GitHub stats" });
  }
}