import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  isValidBookingDate,
  isValidTimeForDate,
} from "@/lib/booking-hours";
import { escapeHtml, isValidEmail } from "@/lib/email-html";
import {
  WORKSHOP_ADDRESS,
  WORKSHOP_ADDRESS_EN,
  WORKSHOP_PHONE_DISPLAY,
  WORKSHOP_PHONE_E164,
} from "@/lib/site-address";

type Body = {
  categoryTitle?: string;
  serviceName?: string;
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
  time?: string;
  carType?: string;
  engine?: string;
  brand?: string;
  year?: string;
  comment?: string;
  locale?: string;
};

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Pro Limit Tuning <onboarding@resend.dev>";

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

  const categoryTitle =
    typeof body.categoryTitle === "string" ? body.categoryTitle.trim() : "";
  const serviceName =
    typeof body.serviceName === "string" ? body.serviceName.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const date = typeof body.date === "string" ? body.date.trim() : "";
  const time = typeof body.time === "string" ? body.time.trim() : "";

  const carType =
    typeof body.carType === "string" ? body.carType.trim().slice(0, 120) : "";
  const engine =
    typeof body.engine === "string" ? body.engine.trim().slice(0, 120) : "";
  const brand =
    typeof body.brand === "string" ? body.brand.trim().slice(0, 120) : "";
  const year =
    typeof body.year === "string" ? body.year.trim().slice(0, 20) : "";
  const comment =
    typeof body.comment === "string" ? body.comment.trim().slice(0, 5000) : "";

  if (categoryTitle.length < 1 || categoryTitle.length > 200) {
    return NextResponse.json({ error: "Invalid category." }, { status: 400 });
  }
  if (serviceName.length < 1 || serviceName.length > 300) {
    return NextResponse.json({ error: "Invalid service." }, { status: 400 });
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
  if (!isValidBookingDate(date)) {
    return NextResponse.json({ error: "Invalid date." }, { status: 400 });
  }
  if (!isValidTimeForDate(date, time)) {
    return NextResponse.json({ error: "Invalid time." }, { status: 400 });
  }

  const locale = body.locale === "en" ? "en" : "bg";
  const subject =
    locale === "en"
      ? `[Pro Limit Tuning] Booking: ${serviceName}`
      : `[Pro Limit Tuning] Час: ${serviceName}`;

  const l = (bg: string, en: string) => (locale === "en" ? en : bg);

  const optional = (labelBg: string, labelEn: string, val: string) =>
    val
      ? `<p><strong>${l(labelBg, labelEn)}:</strong> ${escapeHtml(val)}</p>`
      : "";

  const addrLine = locale === "en" ? WORKSHOP_ADDRESS_EN : WORKSHOP_ADDRESS;

  const html = `
    <h2>${l("Запазване на час", "Appointment request")}</h2>
    <p><strong>${l("Категория", "Category")}:</strong> ${escapeHtml(categoryTitle)}</p>
    <p><strong>${l("Услуга", "Service")}:</strong> ${escapeHtml(serviceName)}</p>
    <p><strong>${l("Име", "Name")}:</strong> ${escapeHtml(name)}</p>
    <p><strong>${l("Телефон", "Phone")}:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>${l("Ден", "Date")}:</strong> ${escapeHtml(date)}</p>
    <p><strong>${l("Час", "Time")}:</strong> ${escapeHtml(time)}</p>
    ${optional("Вид кола", "Vehicle type", carType)}
    ${optional("Двигател", "Engine", engine)}
    ${optional("Марка", "Make", brand)}
    ${optional("Година", "Year", year)}
    ${comment ? `<p><strong>${l("Коментар", "Comment")}:</strong></p><pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(comment)}</pre>` : ""}
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
    console.error("Resend booking error:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
