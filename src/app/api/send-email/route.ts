import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
  from: string;
  to: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.EMAIL',
    pass: 'process.env.PASS',
  },
});

const sendEmail = async (emailData: EmailData) => {
  try {
    const info = await transporter.sendMail({
      from: emailData.from, 
      to: emailData.to, 
      subject: emailData.subject, 
      text: emailData.message, 
    });
    console.log('Email sent: ', info.messageId);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};
export async function POST(req: NextRequest) {
  try {
    const emailData: EmailData = await req.json();
    await sendEmail(emailData);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error sending email: ', error);
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}