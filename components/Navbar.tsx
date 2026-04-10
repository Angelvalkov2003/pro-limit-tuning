"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import { BookingModal } from "@/components/BookingModal";
import { NavbarServiceSearch } from "@/components/NavbarServiceSearch";
import { PhoneLink } from "@/components/PhoneLink";
import {
  SERVICE_CATEGORIES,
  categoryTitle,
  serviceHref,
} from "@/lib/services-catalog";

function detectLocale(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "bg";
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const locale = detectLocale(pathname);
  const t = getMessages(locale);
  const homeHref = locale === "en" ? "/en" : "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [searchBooking, setSearchBooking] = useState<{
    categoryTitle: string;
    serviceName: string;
  } | null>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const closeDesktopServices = useCallback(
    () => setDesktopServicesOpen(false),
    [],
  );

  useEffect(() => {
    closeMobile();
    closeDesktopServices();
    setSearchBooking(null);
  }, [pathname, closeMobile, closeDesktopServices]);

  useEffect(() => {
    if (!mobileOpen && !desktopServicesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMobile();
        closeDesktopServices();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, desktopServicesOpen, closeMobile, closeDesktopServices]);

  useEffect(() => {
    if (!desktopServicesOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const el = servicesMenuRef.current;
      if (el && !el.contains(e.target as Node)) {
        closeDesktopServices();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [desktopServicesOpen, closeDesktopServices]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const sectionLinkClass =
    "block rounded-md px-3 py-3 text-base font-medium text-zinc-200 transition-colors hover:bg-white/5 hover:text-white";

  const submenuLinkClass =
    "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#010000]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4 sm:gap-3 sm:px-6">
        <Link
          href={homeHref}
          className="flex min-w-0 shrink-0 items-center gap-2 py-2"
        >
          <Image
            src="/prolimitlogo.PNG"
            alt="Pro Limit Tuning"
            width={200}
            height={56}
            className="h-10 w-auto object-contain sm:h-11"
            priority
          />
        </Link>

        <div className="mx-2 hidden min-w-0 max-w-md flex-1 md:block">
          <NavbarServiceSearch
            locale={locale}
            onPick={(categoryTitle, serviceName) =>
              setSearchBooking({ categoryTitle, serviceName })
            }
          />
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <div
            className="flex rounded-md border border-white/20 p-0.5"
            role="group"
            aria-label={t.nav.language}
          >
            <Link
              href="/"
              className={`rounded px-2.5 py-1 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
                locale === "bg"
                  ? "bg-[#dc211d] text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.nav.langBg}
            </Link>
            <Link
              href="/en"
              className={`rounded px-2.5 py-1 text-xs font-semibold transition-colors sm:px-3 sm:text-sm ${
                locale === "en"
                  ? "bg-[#dc211d] text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.nav.langEn}
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-zinc-200 transition-colors hover:bg-white/10 hover:text-white sm:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            onClick={() => setMobileOpen(true)}
            aria-label={t.nav.openMenu}
          >
            <MenuIcon />
          </button>

          <div className="hidden items-center gap-3 sm:flex sm:gap-4">
            <PhoneLink
              className="hidden text-sm font-semibold tabular-nums text-zinc-200 transition-colors hover:text-[#dc211d] md:inline"
              ariaLabel={`${t.footer.phoneCallAria} ${t.footer.phoneLabel}`}
            />
            <a
              href={`${homeHref}#kontakti`}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {t.nav.contact}
            </a>
            <div className="relative" ref={servicesMenuRef}>
              <button
                type="button"
                className="flex items-center gap-1 rounded-md bg-[#dc211d] px-4 py-2 text-sm font-medium text-white transition-[filter] hover:brightness-110"
                aria-expanded={desktopServicesOpen}
                aria-haspopup="menu"
                aria-controls="desktop-services-menu"
                id="desktop-services-button"
                onClick={() => setDesktopServicesOpen((o) => !o)}
              >
                {t.nav.services}
                <ChevronDown
                  className={`transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {desktopServicesOpen ? (
                <div
                  id="desktop-services-menu"
                  role="menu"
                  aria-labelledby="desktop-services-button"
                  className="absolute right-0 top-full z-[60] mt-2 max-h-[min(70vh,28rem)] w-80 overflow-y-auto rounded-lg border border-white/10 bg-[#010000] py-2 shadow-xl"
                >
                  <Link
                    href={`${homeHref}#uslugi`}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm font-medium text-[#dc211d] transition-colors hover:bg-white/5"
                    onClick={closeDesktopServices}
                  >
                    {t.nav.allServices}
                  </Link>
                  <div className="my-1 border-t border-white/10" role="separator" />
                  {SERVICE_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={serviceHref(locale, cat.slug)}
                      role="menuitem"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                      onClick={closeDesktopServices}
                    >
                      <span className="text-base" aria-hidden>
                        {cat.emoji}
                      </span>
                      {categoryTitle(cat, locale)}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] sm:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileOpen ? "opacity-70" : "opacity-0"
          }`}
          onClick={closeMobile}
          aria-label={t.nav.closeMenu}
          tabIndex={mobileOpen ? 0 : -1}
        />
        <aside
          id="mobile-drawer"
          className={`absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-white/10 bg-[#010000] shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4">
            <span className="text-sm font-semibold tracking-wide text-white">
              {t.nav.menu}
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              onClick={closeMobile}
              aria-label={t.nav.closeMenu}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="shrink-0 border-b border-white/10 px-4 py-3">
            <NavbarServiceSearch
              className="z-[110]"
              locale={locale}
              onPick={(categoryTitle, serviceName) =>
                setSearchBooking({ categoryTitle, serviceName })
              }
              onAfterPick={closeMobile}
            />
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-4">
            <Link
              href={homeHref}
              className={sectionLinkClass}
              onClick={closeMobile}
            >
              {t.nav.home}
            </Link>
            <PhoneLink
              className={`${sectionLinkClass} font-semibold tabular-nums text-[#dc211d]`}
              ariaLabel={`${t.footer.phoneCallAria} ${t.footer.phoneLabel}`}
            />
            <a
              href={`${homeHref}#kontakti`}
              className={sectionLinkClass}
              onClick={closeMobile}
            >
              {t.nav.contact}
            </a>
            <div className="mt-2 border-t border-white/10 pt-3">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {t.nav.services}
              </p>
              <Link
                href={`${homeHref}#uslugi`}
                className={submenuLinkClass}
                onClick={closeMobile}
              >
                {t.nav.allServices}
              </Link>
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={serviceHref(locale, cat.slug)}
                  className={submenuLinkClass}
                  onClick={closeMobile}
                >
                  <span aria-hidden>{cat.emoji}</span>
                  {categoryTitle(cat, locale)}
                </Link>
              ))}
            </div>
          </nav>
        </aside>
      </div>

      {searchBooking ? (
        <BookingModal
          open
          onClose={() => setSearchBooking(null)}
          locale={locale}
          categoryTitle={searchBooking.categoryTitle}
          serviceName={searchBooking.serviceName}
        />
      ) : null}
    </header>
  );
}
