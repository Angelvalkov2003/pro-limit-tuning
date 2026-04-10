import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { PhoneLink } from "@/components/PhoneLink";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  workshopAddressDisplay,
} from "@/lib/site-address";

function PlusRow({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#dc211d]/15 text-xl font-bold leading-none text-[#dc211d]"
        aria-hidden
      >
        +
      </span>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          {heading}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">{text}</p>
      </div>
    </div>
  );
}

type Props = { locale: Locale };

export function WhyChooseSection({ locale }: Props) {
  const w = getMessages(locale).whyChoose;
  const igAria = getMessages(locale).footer.instagramAria;

  return (
    <section
      id="zasho-pro-limit"
      className="relative border-t border-white/10 bg-gradient-to-b from-black/60 via-[#070202] to-[#0a0303] py-16 sm:py-20"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dc211d]/35 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dc211d] sm:text-xs">
          {w.eyebrow}
        </p>
        <div className="mx-auto mt-4 flex flex-col items-center gap-4">
          <div className="h-px w-12 bg-[#dc211d]/80" aria-hidden />
          <h2 className="text-center text-xl font-bold uppercase tracking-wide text-white sm:text-2xl md:text-3xl">
            {w.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 sm:space-y-7">
            {w.pillars.map((p) => (
              <PlusRow key={p.heading} heading={p.heading} text={p.text} />
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-[#010000]/80 p-6 sm:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc211d]">
              {w.servicesHeading}
            </h3>
            <ul className="mt-5 space-y-3">
              {w.services.map((line) => (
                <li key={line} className="flex gap-3 text-sm text-zinc-300">
                  <span
                    className="mt-0.5 shrink-0 font-bold text-[#dc211d]"
                    aria-hidden
                  >
                    +
                  </span>
                  <span className="leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {w.extras.map((e) => (
            <div
              key={e.heading}
              className="rounded-xl border border-white/10 bg-[#010000]/60 p-5"
            >
              <PlusRow heading={e.heading} text={e.text} />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#dc211d]/25 bg-[#010000] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dc211d]">
              {w.contactStripTitle}
            </h3>
            <p className="mt-3 text-base font-medium text-white sm:text-lg">
              {workshopAddressDisplay(locale)}
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2 sm:mt-0 sm:items-end sm:text-right">
            <PhoneLink className="text-lg font-semibold tabular-nums text-white hover:text-[#dc211d]" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#dc211d] hover:underline"
              aria-label={igAria}
            >
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base italic leading-relaxed text-zinc-400 sm:text-lg">
          {w.closing}
        </p>
      </div>
    </section>
  );
}
