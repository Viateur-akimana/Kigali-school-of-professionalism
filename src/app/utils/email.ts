import nodemailer from 'nodemailer';

interface EmailData {
  from: string;
  to: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  // Configure your email service provider (e.g., Gmail, SendGrid, etc.)
  // Example for Gmail:
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

export const sendEmail = async (emailData: EmailData) => {
  try {
    const info = await transporter.sendMail({
      from: emailData.from, // Sender address
      to: emailData.to, // Recipient address
      subject: emailData.subject, // Subject line
      text: emailData.message, // Plain text body
    });
    console.log('Email sent: ', info.messageId);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};