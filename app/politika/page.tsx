import type { Metadata } from "next";
import { LegalPoliciesArticle } from "@/components/LegalPoliciesArticle";
import { legalPageCopy } from "@/lib/legal-content";

const doc = legalPageCopy.bg;

export const metadata: Metadata = {
  title: doc.documentTitle,
  description: doc.intro.slice(0, 155),
  alternates: {
    canonical: "/politika",
    languages: {
      bg: "/politika",
      en: "/en/politika",
    },
  },
  openGraph: {
    title: doc.documentTitle,
    description: doc.intro.slice(0, 200),
    url: "/politika",
    locale: "bg_BG",
  },
};

export default function PolitikaPage() {
  return (
    <main className="min-h-[60vh] flex-1 bg-[#010000] text-zinc-200">
      <LegalPoliciesArticle locale="bg" />
    </main>
  );
}
