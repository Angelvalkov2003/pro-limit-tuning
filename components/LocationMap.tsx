import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { PhoneLink } from "@/components/PhoneLink";
import {
  googleMapsEmbedSrc,
  googleMapsSearchUrl,
  workshopAddressDisplay,
} from "@/lib/site-address";

type Props = { locale: Locale };

export function LocationMap({ locale }: Props) {
  const t = getMessages(locale).footer;
  const hl = locale === "en" ? "en" : "bg";

  return (
    <div id="lokatsiya" className="w-full">
      <h3 className="text-lg font-semibold tracking-tight text-white">
        {t.mapTitle}
      </h3>
      <p className="mt-2 text-sm text-zinc-400">
        {workshopAddressDisplay(locale)}
      </p>
      <p className="mt-2 text-sm text-zinc-400">
        <span className="text-zinc-500">{t.phoneLabel}: </span>
        <PhoneLink
          className="font-semibold tabular-nums text-[#dc211d] hover:underline"
          ariaLabel={`${t.phoneCallAria} ${t.phoneLabel}`}
        />
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-zinc-950/50 to-black/40 shadow-xl shadow-black/30 ring-1 ring-inset ring-white/[0.04]">
        <iframe
          title={t.mapIframeTitle}
          src={googleMapsEmbedSrc(hl)}
          className="block h-[min(22rem,55vw)] w-full min-h-[240px] border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a
        href={googleMapsSearchUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-medium text-[#dc211d] transition-colors hover:underline"
      >
        {t.mapOpenInGoogle}
      </a>
    </div>
  );
}
