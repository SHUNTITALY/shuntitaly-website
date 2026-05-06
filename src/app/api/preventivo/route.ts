import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"Shunt Italy Website" <${process.env.SMTP_USER}>`,
      to: "info@shuntitaly.it",
      replyTo: data.email,
      subject: `Nuova richiesta preventivo - ${data.azienda}`,
      html: `
        <h2>Nuova richiesta preventivo tecnico</h2>
        <p><strong>Azienda:</strong> ${data.azienda}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Corrente:</strong> ${data.corrente || "Non indicata"}</p>
        <p><strong>Tensione:</strong> ${data.tensione || "Non indicata"}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${data.messaggio}</p>
      `
    });

    return NextResponse.json({ message: "Richiesta inviata correttamente." });
  } catch (error) {
    console.error("Errore invio email:", error);

    return NextResponse.json(
      { message: "Errore durante l'invio email." },
      { status: 500 }
    );
  }
}