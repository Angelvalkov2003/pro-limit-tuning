"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LocaleHtmlLang() {
  const pathname = usePathname();
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "bg";

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
