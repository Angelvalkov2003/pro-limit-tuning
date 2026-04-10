import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Pro Limit Tuning — auto service",
  description:
    "Pro Limit Tuning auto service — diagnostics, repair, and tuning. Quality care for your vehicle.",
  keywords: [
    "auto service",
    "car repair",
    "diagnostics",
    "tuning",
    "Pro Limit Tuning",
  ],
  alternates: {
    canonical: "/en",
    languages: {
      bg: "/",
      en: "/en",
    },
  },
  openGraph: {
    locale: "en_US",
    title: "Pro Limit Tuning — auto service",
    description:
      "Pro Limit Tuning auto service — diagnostics, repair, and tuning.",
    url: "/en",
  },
  twitter: {
    title: "Pro Limit Tuning — auto service",
    description:
      "Pro Limit Tuning auto service — diagnostics, repair, and tuning.",
  },
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}
