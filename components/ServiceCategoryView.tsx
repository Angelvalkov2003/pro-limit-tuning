import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { Locale } from "@/lib/i18n";
import { categoryTitle, type ServiceCategoryDef } from "@/lib/services-catalog";
import { getMessages } from "@/lib/i18n";
import { PhoneLink } from "@/components/PhoneLink";
import { ServiceCategoryServiceList } from "@/components/ServiceCategoryServiceList";

type Props = { locale: Locale; category: ServiceCategoryDef };

export function ServiceCategoryView({ locale, category }: Props) {
  const t = getMessages(locale);
  const title = categoryTitle(category, locale);

  return (
    <main className="flex flex-1 flex-col border-t border-white/10 bg-black/20">
      <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <AnimateOnScroll>
          <nav className="text-sm text-zinc-500">
            <Link
              href={locale === "en" ? "/en" : "/"}
              className="transition-colors hover:text-white"
            >
              {t.nav.home}
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <Link
              href={`${locale === "en" ? "/en" : "/"}#uslugi`}
              className="transition-colors hover:text-white"
            >
              {t.services.title}
            </Link>
            <span className="mx-2 text-zinc-600">/</span>
            <span className="text-zinc-400">{title}</span>
          </nav>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-6 block" delay="0.08s" variant="strong">
          <h1 className="flex flex-wrap items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            <span aria-hidden>{category.emoji}</span>
            {title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">{t.services.priceNote}</p>
        </AnimateOnScroll>

        <ServiceCategoryServiceList locale={locale} category={category} />

        <AnimateOnScroll className="mt-8 block" delay="0.06s">
          <p className="text-sm text-zinc-500">{t.services.disclaimer}</p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-8 block" delay="0.12s" variant="strong">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`${locale === "en" ? "/en" : "/"}#kontakti`}
              className="inline-flex rounded-md bg-[#dc211d] px-5 py-2.5 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
            >
              {t.hero.ctaSecondary}
            </Link>
            <PhoneLink
              className="inline-flex rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold tabular-nums text-white transition-colors hover:border-[#dc211d]/50 hover:text-[#dc211d]"
              ariaLabel={`${t.footer.phoneCallAria} ${t.footer.phoneLabel}`}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </main>
  );
}
