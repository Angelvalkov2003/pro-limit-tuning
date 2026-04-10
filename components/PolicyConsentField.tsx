"use client";

import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";

const linkClass =
  "font-medium text-[#dc211d] underline decoration-[#dc211d]/40 underline-offset-2 hover:decoration-[#dc211d]";

type Props = {
  locale: Locale;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  showError?: boolean;
};

export function PolicyConsentField({
  locale,
  id,
  checked,
  onChange,
  showError,
}: Props) {
  const c = getMessages(locale).forms.consent;
  const base = locale === "en" ? "/en/politika" : "/politika";

  return (
    <fieldset className="m-0 space-y-2 border-0 p-0">
      <legend className="sr-only">{c.checkboxAria}</legend>
      <div className="flex gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={showError ? true : undefined}
          aria-describedby={
            showError ? `${id}-note ${id}-error` : `${id}-note`
          }
          className="mt-1 h-4 w-4 shrink-0 rounded border-white/25 bg-black/60 text-[#dc211d] focus:ring-[#dc211d]/50"
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-zinc-300">
          {c.labelBeforePrivacy}
          <a
            href={`${base}#privacy`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {c.privacyLink}
          </a>
          {c.labelBetween}
          <a
            href={`${base}#terms`}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {c.termsLink}
          </a>
          {c.labelAfterTerms}{" "}
          <span className="text-zinc-500" aria-hidden>
            *
          </span>
        </label>
      </div>
      <p id={`${id}-note`} className="pl-7 text-xs text-zinc-500">
        {c.note}
      </p>
      {showError ? (
        <p id={`${id}-error`} role="alert" className="pl-7 text-sm text-red-400">
          {c.requiredError}
        </p>
      ) : null}
    </fieldset>
  );
}
