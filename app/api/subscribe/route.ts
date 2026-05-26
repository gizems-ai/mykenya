import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { name, email } = body as { name?: string; email?: string };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "MyKenya <onboarding@resend.dev>",
          to: ["gizemburtecin@gmail.com"],
          subject: `New Letter subscriber: ${name || "Unknown"} <${email}>`,
          html: `
            <h2>New subscriber for The Letter</h2>
            <p><strong>Name:</strong> ${name || "(not provided)"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><em>Sent from MyKenya newsletter form</em></p>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
      }
    } catch (err) {
      console.error("Subscribe error:", err);
    }
  } else {
    // Log until RESEND_API_KEY is configured in Vercel env vars
    console.log(`[MyKenya] New subscriber: ${name || "-"} <${email}>`);
  }

  return NextResponse.json({ ok: true });
}
