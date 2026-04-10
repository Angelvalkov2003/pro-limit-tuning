"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { PhoneLink } from "@/components/PhoneLink";
import { PolicyConsentField } from "@/components/PolicyConsentField";

const inputClass =
  "w-full rounded-md border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#dc211d]/60";
const labelClass =
  "mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500";

type Props = { locale: Locale };

export function InquiryForm({ locale }: Props) {
  const t = getMessages(locale).forms.inquiry;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setConsentError(true);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
          locale,
          acceptPolicies: true,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setConsent(false);
      setConsentError(false);
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl text-left">
      <h2 className="text-xl font-semibold text-white">{t.title}</h2>
      <p className="mt-2 text-sm text-zinc-400">{t.subtitle}</p>
      <p className="mt-3 text-sm text-zinc-400">
        {t.phoneCta}{" "}
        <PhoneLink className="font-semibold tabular-nums text-[#dc211d] hover:underline" />
      </p>

      {status === "ok" ? (
        <p className="mt-6 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-200">
          {t.success}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className={labelClass} htmlFor="in-name">
              {t.name} *
            </label>
            <input
              id="in-name"
              className={inputClass}
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength={2}
              maxLength={200}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="in-phone">
              {t.phone} *
            </label>
            <input
              id="in-phone"
              className={inputClass}
              type="tel"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              minLength={5}
              maxLength={50}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="in-email">
              {t.email} *
            </label>
            <input
              id="in-email"
              className={inputClass}
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={254}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="in-msg">
              {t.message} *
            </label>
            <textarea
              id="in-msg"
              className={`${inputClass} min-h-[120px] resize-y`}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              minLength={5}
              maxLength={5000}
              rows={5}
            />
          </div>
          <PolicyConsentField
            locale={locale}
            id="in-consent"
            checked={consent}
            onChange={(v) => {
              setConsent(v);
              if (v) setConsentError(false);
            }}
            showError={consentError}
          />
          {status === "err" ? (
            <p className="text-sm text-red-400">{t.error}</p>
          ) : null}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-md bg-[#dc211d] py-3 text-sm font-semibold text-white transition-[filter] hover:brightness-110 disabled:opacity-50 sm:w-auto sm:px-8"
          >
            {status === "sending" ? t.sending : t.submit}
          </button>
        </form>
      )}
    </div>
  );
}
