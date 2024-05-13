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

export const sendEmail = async (emailData: EmailData) => {
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
    throw error
  }
};