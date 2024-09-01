import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const username = process.env.NODEMAILER_MAIL;
    const password = process.env.NODEMAILER_PASS;

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      auth: {
        user: username,
        pass: password,
      },
    });

    try {
      await transporter.sendMail({
        from: name,
        to: 'ai.aayush10@gmail.com',
        replyTo: email,
        subject: `Congratulations, A New Project from ${name}`,
        html: `
          <p>Name: ${name} </p>
          <p>Email: ${email} </p>
          <p>Message: ${message} </p>
        `,
      });

      res.status(200).json({ message: 'Success: email was sent' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'COULD NOT SEND MESSAGE', error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
