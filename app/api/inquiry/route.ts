import { NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml, isValidEmail } from "@/lib/email-html";
import { RESEND_FROM } from "@/lib/resend-from";
import {
  WORKSHOP_ADDRESS,
  WORKSHOP_ADDRESS_EN,
  WORKSHOP_PHONE_DISPLAY,
  WORKSHOP_PHONE_E164,
} from "@/lib/site-address";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  locale?: string;
  acceptPolicies?: unknown;
};

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = RESEND_FROM;

  if (!key || !to) {
    return NextResponse.json(
      { error: "Email is not configured." },
      { status: 500 },
    );
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (body.acceptPolicies !== true) {
    return NextResponse.json(
      { error: "Policy acceptance is required." },
      { status: 400 },
    );
  }

  if (name.length < 2 || name.length > 200) {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }
  if (phone.length < 5 || phone.length > 50) {
    return NextResponse.json({ error: "Invalid phone." }, { status: 400 });
  }
  if (!isValidEmail(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json({ error: "Invalid message." }, { status: 400 });
  }

  const locale = body.locale === "en" ? "en" : "bg";
  const subject =
    locale === "en"
      ? `[Pro Limit Tuning] Inquiry from ${name}`
      : `[Pro Limit Tuning] Запитване от ${name}`;

  const addrLine = locale === "en" ? WORKSHOP_ADDRESS_EN : WORKSHOP_ADDRESS;

  const consentNote =
    locale === "en"
      ? "<p><strong>Policy consent:</strong> The sender confirmed acceptance of the privacy policy and terms at submission.</p>"
      : "<p><strong>Съгласие с политики:</strong> Подателят е потвърдил приемане на политиката за поверителност и общите условия при изпращане.</p>";

  const html = `
    <h2>${locale === "en" ? "Contact inquiry" : "Запитване"}</h2>
    ${consentNote}
    <p><strong>${locale === "en" ? "Name" : "Име"}:</strong> ${escapeHtml(name)}</p>
    <p><strong>${locale === "en" ? "Phone" : "Телефон"}:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>${locale === "en" ? "Message" : "Съобщение"}:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
    <hr style="margin-top:24px;border:none;border-top:1px solid #eee" />
    <p style="font-size:12px;color:#666">Pro Limit Tuning · ${escapeHtml(WORKSHOP_PHONE_DISPLAY)} · ${escapeHtml(WORKSHOP_PHONE_E164)} · ${escapeHtml(addrLine)}</p>
  `;

  const resend = new Resend(key);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject,
    html,
  });

  if (error) {
    console.error("Resend inquiry error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
