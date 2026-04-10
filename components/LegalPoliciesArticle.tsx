import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { legalPageCopy } from "@/lib/legal-content";

type Props = { locale: Locale };

export function LegalPoliciesArticle({ locale }: Props) {
  const doc = legalPageCopy[locale];
  const t = getMessages(locale);
  const home = locale === "en" ? "/en" : "/";

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <AnimateOnScroll>
        <Link
          href={home}
          className="text-sm font-medium text-[#dc211d] transition-colors hover:underline"
        >
          ← {t.nav.home}
        </Link>
      </AnimateOnScroll>
      <AnimateOnScroll className="mt-8 block" delay="0.08s" variant="strong">
        <header className="border-b border-white/10 pb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {doc.documentTitle}
          </h1>
          <p className="mt-3 text-sm text-zinc-500">{doc.updatedLabel}</p>
          <p className="mt-6 text-base leading-relaxed text-zinc-400">
            {doc.intro}
          </p>
        </header>
      </AnimateOnScroll>

      <AnimateOnScroll className="mt-10 block" delay="0.12s">
        <nav className="flex flex-wrap gap-4 text-sm">
          <a
            href="#privacy"
            className="font-medium text-[#dc211d] hover:underline"
          >
            {doc.privacyHeading}
          </a>
          <span className="text-zinc-600" aria-hidden>
            ·
          </span>
          <a href="#terms" className="font-medium text-[#dc211d] hover:underline">
            {doc.termsHeading}
          </a>
        </nav>
      </AnimateOnScroll>

      <section id="privacy" className="mt-14 scroll-mt-24">
        <AnimateOnScroll variant="strong">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            {doc.privacyHeading}
          </h2>
        </AnimateOnScroll>
        <div className="mt-8 space-y-10">
          {doc.privacy.map((sec, i) => (
            <AnimateOnScroll
              key={sec.id}
              className="block"
              delay={`${0.05 + i * 0.07}s`}
              variant="strong"
            >
              <section id={sec.id} className="scroll-mt-24">
                <h3 className="text-lg font-medium text-zinc-200">{sec.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
                  {sec.paragraphs.map((p, j) => (
                    <p key={`${sec.id}-${j}`}>{p}</p>
                  ))}
                </div>
              </section>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section
        id="terms"
        className="mt-20 scroll-mt-24 border-t border-white/10 pt-16"
      >
        <AnimateOnScroll variant="strong">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            {doc.termsHeading}
          </h2>
        </AnimateOnScroll>
        <div className="mt-8 space-y-10">
          {doc.terms.map((sec, i) => (
            <AnimateOnScroll
              key={sec.id}
              className="block"
              delay={`${0.05 + i * 0.07}s`}
              variant="strong"
            >
              <section id={sec.id} className="scroll-mt-24">
                <h3 className="text-lg font-medium text-zinc-200">{sec.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-400">
                  {sec.paragraphs.map((p, j) => (
                    <p key={`${sec.id}-${j}`}>{p}</p>
                  ))}
                </div>
              </section>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </article>
  );
}
