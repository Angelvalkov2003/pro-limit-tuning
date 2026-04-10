"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { PhoneLink } from "@/components/PhoneLink";
import {
  getTimeSlotsForDate,
  todayISOLocal,
} from "@/lib/booking-hours";

const inputClass =
  "w-full rounded-md border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-[#dc211d]/60";
const labelClass =
  "mb-1.5 block text-xs font-medium uppercase tracking-wider text-zinc-500";

type Props = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  categoryTitle: string;
  serviceName: string;
};

export function BookingModal({
  open,
  onClose,
  locale,
  categoryTitle,
  serviceName,
}: Props) {
  const t = getMessages(locale).forms.booking;
  const inquiry = getMessages(locale).forms.inquiry;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [carType, setCarType] = useState("");
  const [engine, setEngine] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">(
    "idle",
  );

  const slots = useMemo(() => {
    if (!date) return [];
    return getTimeSlotsForDate(date) ?? [];
  }, [date]);

  useEffect(() => {
    if (!open) return;
    setName("");
    setPhone("");
    setEmail("");
    setCarType("");
    setEngine("");
    setBrand("");
    setYear("");
    setComment("");
    setStatus("idle");
    const today = todayISOLocal();
    setDate(today);
    const s = getTimeSlotsForDate(today) ?? [];
    setTime(s[0] ?? "");
  }, [open, categoryTitle, serviceName]);

  useEffect(() => {
    if (!date) return;
    const s = getTimeSlotsForDate(date) ?? [];
    setTime((prev) => (s.includes(prev) ? prev : s[0] ?? ""));
  }, [date]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const onBackdropDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!date || slots.length === 0 || !time) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          categoryTitle,
          serviceName,
          name,
          phone,
          email,
          date,
          time,
          carType,
          engine,
          brand,
          year,
          comment,
          locale,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/75 p-4 sm:items-center"
      role="presentation"
      onPointerDown={onBackdropDown}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="max-h-[min(92vh,40rem)] w-full max-w-lg overflow-y-auto rounded-xl border border-white/10 bg-[#010000] shadow-2xl"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <h2
              id="booking-modal-title"
              className="text-lg font-semibold text-white"
            >
              {t.title}
            </h2>
            <p className="mt-1 text-xs text-zinc-500">{t.hoursHint}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
            aria-label={t.cancel}
          >
            ✕
          </button>
        </div>

        {status === "ok" ? (
          <div className="px-5 py-10 text-center text-sm text-zinc-300">
            {t.success}
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-md bg-[#dc211d] py-2.5 text-sm font-semibold text-white hover:brightness-110"
            >
              OK
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
            <div className="rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-sm">
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                {t.service}
              </p>
              <p className="mt-1 font-medium text-white">{serviceName}</p>
              <p className="mt-2 text-xs text-zinc-500">{t.category}</p>
              <p className="text-zinc-400">{categoryTitle}</p>
            </div>

            <div>
              <label className={labelClass} htmlFor="bk-name">
                {t.name} *
              </label>
              <input
                id="bk-name"
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
              <label className={labelClass} htmlFor="bk-phone">
                {t.phone} *
              </label>
              <input
                id="bk-phone"
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
              <label className={labelClass} htmlFor="bk-email">
                {t.email} *
              </label>
              <input
                id="bk-email"
                className={inputClass}
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={254}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="bk-date">
                  {t.date} *
                </label>
                <input
                  id="bk-date"
                  className={inputClass}
                  type="date"
                  required
                  min={todayISOLocal()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="bk-time">
                  {t.time} *
                </label>
                <select
                  id="bk-time"
                  className={inputClass}
                  required={slots.length > 0}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  disabled={slots.length === 0}
                >
                  {slots.length === 0 ? (
                    <option value="">{t.closedDay}</option>
                  ) : (
                    slots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {t.optionalTitle}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="bk-car">
                    {t.carType}
                  </label>
                  <input
                    id="bk-car"
                    className={inputClass}
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                    maxLength={120}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="bk-engine">
                    {t.engine}
                  </label>
                  <input
                    id="bk-engine"
                    className={inputClass}
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    maxLength={120}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="bk-brand">
                    {t.brand}
                  </label>
                  <input
                    id="bk-brand"
                    className={inputClass}
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    maxLength={120}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="bk-year">
                    {t.year}
                  </label>
                  <input
                    id="bk-year"
                    className={inputClass}
                    inputMode="numeric"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className={labelClass} htmlFor="bk-comment">
                  {t.comment}
                </label>
                <textarea
                  id="bk-comment"
                  className={`${inputClass} min-h-[88px] resize-y`}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={5000}
                  rows={3}
                />
              </div>
            </div>

            <p className="text-sm text-zinc-500">
              {inquiry.phoneCta}{" "}
              <PhoneLink className="font-semibold tabular-nums text-[#dc211d] hover:underline" />
            </p>

            {status === "err" ? (
              <p className="text-sm text-red-400">{t.error}</p>
            ) : null}

            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                disabled={
                  status === "sending" || slots.length === 0 || !time
                }
                className="rounded-md bg-[#dc211d] px-4 py-2.5 text-sm font-semibold text-white transition-[filter] hover:brightness-110 disabled:opacity-50"
              >
                {status === "sending" ? t.sending : t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
