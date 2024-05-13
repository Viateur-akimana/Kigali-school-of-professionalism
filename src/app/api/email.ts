import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from '../../utils/email';

interface EmailData {
  from: string;
  to: string;
  subject: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const emailData: EmailData = req.body;

    try {
      await sendEmail(emailData);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}