import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import {
  SERVICE_CATEGORIES,
  categoryTitle,
  serviceHref,
} from "@/lib/services-catalog";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ContactSocialBlock } from "@/components/ContactSocialBlock";
import HeroTitle, {
  type HeroTitleLine,
} from "@/components/HeroTitle";
import { InquiryForm } from "@/components/InquiryForm";
import { LocationMap } from "@/components/LocationMap";
import { PhoneLink } from "@/components/PhoneLink";
import { WhyChooseSection } from "@/components/WhyChooseSection";

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#dc211d] sm:text-xs">
      {children}
    </p>
  );
}

type Props = { locale: Locale };

function heroTitleLines(title: string): readonly HeroTitleLine[] {
  const parts = title.trim().split(/\s+/).filter(Boolean);
  if (parts.length <= 1) {
    return [
      {
        text: title.trim() || title,
        className: "text-[var(--foreground)]",
      },
    ];
  }
  const last = parts[parts.length - 1]!;
  const rest = parts.slice(0, -1).join(" ");
  return [
    { text: rest, className: "text-[var(--foreground)]" },
    { text: last, className: "text-[#dc211d]" },
  ];
}

export function HomePage({ locale }: Props) {
  const t = getMessages(locale);

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[min(100vw,32rem)] w-[min(100vw,32rem)] translate-x-1/4 rounded-full bg-[#dc211d]/[0.09] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/4 rounded-full bg-[#dc211d]/[0.05] blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:gap-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="hero-rest-badge">
              <SectionEyebrow>{t.hero.kicker}</SectionEyebrow>
            </div>
            <div className="mt-3 max-w-xl">
              <HeroTitle lines={heroTitleLines(t.hero.title)} />
            </div>
            <p className="hero-rest-paragraph mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t.hero.body}
            </p>
            <div className="hero-rest-buttons mt-8 flex flex-wrap gap-3">
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center rounded-lg bg-[#dc211d] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#dc211d]/20 transition-[filter,transform] hover:brightness-110 active:scale-[0.98]"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#kontakti"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.06]"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="hero-rest-up mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              {t.hero.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-400"
                >
                  {b}
                </span>
              ))}
              <p className="flex w-full min-w-[12rem] flex-wrap items-center gap-2 text-sm text-zinc-500 sm:w-auto sm:flex-1">
                <span>{t.footer.phoneLabel}:</span>
                <PhoneLink className="font-semibold tabular-nums text-[#dc211d] transition-colors hover:underline" />
              </p>
            </div>
            <div className="hero-rest-scroll relative mt-10 h-8 w-full shrink-0">
              <span className="absolute left-1/2 top-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 animate-soft-pulse">
                {t.hero.scrollHint}
              </span>
            </div>
          </div>

          <AnimateOnScroll
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
            delay="0.12s"
            variant="strong"
          >
            <div
              className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-[#dc211d]/25 via-[#dc211d]/5 to-transparent opacity-80 blur-2xl"
              aria-hidden
            />
            <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/50 shadow-2xl shadow-black/40 ring-1 ring-inset ring-white/[0.04] lg:rounded-3xl">
              <Image
                src="/car1.png"
                alt={t.hero.imageAlt}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </figure>
          </AnimateOnScroll>
        </div>
      </section>

      <WhyChooseSection locale={locale} />

      <section
        id="uslugi"
        className="relative border-t border-white/10 bg-gradient-to-b from-zinc-950/80 to-black/60 py-16 sm:py-20"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#dc211d]/40 to-transparent"
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionEyebrow>{t.services.eyebrow}</SectionEyebrow>
          </AnimateOnScroll>
          <AnimateOnScroll delay="0.08s" variant="strong">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t.services.title}
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay="0.14s">
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
              {t.services.intro}
            </p>
          </AnimateOnScroll>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <li key={cat.slug}>
                <AnimateOnScroll
                  delay={`${0.1 + i * 0.08}s`}
                  variant="strong"
                >
                  <Link
                    href={serviceHref(locale, cat.slug)}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0a0404] via-[#050202] to-[#010000] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#dc211d]/30 hover:shadow-xl hover:shadow-[#dc211d]/[0.07]"
                  >
                    <span
                      className="absolute right-4 top-4 text-2xl opacity-90 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden
                    >
                      {cat.emoji}
                    </span>
                    <span className="pr-10 text-lg font-semibold text-white transition-colors group-hover:text-[#dc211d]">
                      {categoryTitle(cat, locale)}
                    </span>
                    <span className="mt-3 text-sm text-zinc-500 transition-colors group-hover:text-zinc-400">
                      {t.services.cardCta}
                      <span
                        className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      >
                        →
                      </span>
                    </span>
                  </Link>
                </AnimateOnScroll>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="kontakti"
        className="relative border-t border-white/10 bg-[#060202] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionEyebrow>{t.footer.contactEyebrow}</SectionEyebrow>
          </AnimateOnScroll>
          <div className="mt-3 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <AnimateOnScroll delay="0.08s" variant="strong">
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-white sm:text-2xl">
                  {t.footer.contactHeading}
                </h2>
                <div className="mt-6">
                  <ContactSocialBlock locale={locale} />
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay="0.16s" variant="strong">
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 p-6 sm:p-8">
                <InquiryForm locale={locale} />
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll
            className="mt-14 block lg:mt-16"
            delay="0.1s"
            variant="strong"
          >
            <LocationMap locale={locale} />
          </AnimateOnScroll>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#010000] py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll variant="strong">
            <ContactSocialBlock locale={locale} compact />
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-8 block text-center" delay="0.1s">
            <Link
              href={locale === "en" ? "/en/politika" : "/politika"}
              className="text-sm text-zinc-500 underline decoration-zinc-600 underline-offset-2 transition-colors hover:text-zinc-300"
            >
              {t.footer.legalPolicies}
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-6 block text-center" delay="0.16s">
            <p className="text-sm text-zinc-600">{t.footer.line}</p>
          </AnimateOnScroll>
        </div>
      </footer>
    </main>
  );
}
