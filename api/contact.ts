import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const body = (req.body || {}) as ContactPayload;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ ok: false, error: "Missing RESEND_API_KEY" });
  }

  if (!process.env.RESEND_CONTACT_RECIPIENT) {
    return res
      .status(500)
      .json({ ok: false, error: "Missing RESEND_CONTACT_RECIPIENT" });
  }

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required fields: name, email, message" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const { error } = await resend.emails.send({
      from: "Custora <onboarding@resend.dev>",
      to: process.env.RESEND_CONTACT_RECIPIENT,
      replyTo: email,
      subject: "New contact form submission",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({
        ok: false,
        error: error.message ?? "Failed to send email via Resend",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    const errorMessage =
      err instanceof Error ? err.message : "Unexpected error while sending email!";

    return res.status(500).json({ ok: false, error: errorMessage });
  }
}
