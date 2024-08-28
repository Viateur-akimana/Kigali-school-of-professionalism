import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const views = await db.viewCount.findMany(); 
    res.status(200).json(views);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch views', error });
  }
}
