import { NextApiRequest, NextApiResponse } from 'next';
import { getIo } from '../../../server/socket-server';
import db from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { url } = req.body;
    const month = new Date().toLocaleString('default', { month: 'long' });

    const updatedView = await db.viewCount.upsert({
      where: { month },
      update: { views: { increment: 1 } },
      create: { month, views: 1 },
    });


    const io = getIo();
    io.emit('view-updated', updatedView);

    res.status(200).json({ message: 'View tracked', updatedView });
  } catch (error) {
    res.status(500).json({ message: 'Failed to track view', error });
  }
}
