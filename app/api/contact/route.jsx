import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const username = process.env.NODEMAILER_MAIL;
  const password = process.env.NODEMAILER_PASS;

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    transporter.sendMail({
      from: name,
      to: "ai.aayush10@gmail.com",
      replyTo: email,
      subject: `Congratulations, A New Project from ${name}`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
