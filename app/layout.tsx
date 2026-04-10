import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LocaleHtmlLang } from "@/components/LocaleHtmlLang";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pro-limit-tuning.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pro Limit Tuning — автосервиз",
    template: "%s | Pro Limit Tuning",
  },
  description:
    "Автосервиз Pro Limit Tuning — диагностика, ремонт и тунинг. Качествено обслужване на вашия автомобил.",
  keywords: ["автосервиз", "ремонт автомобили", "диагностика", "тунинг"],
  openGraph: {
    type: "website",
    locale: "bg_BG",
    siteName: "Pro Limit Tuning",
    title: "Pro Limit Tuning — автосервиз",
    description:
      "Автосервиз Pro Limit Tuning — диагностика, ремонт и тунинг.",
    images: [
      {
        url: "/biglogo.png",
        alt: "Pro Limit Tuning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Limit Tuning — автосервиз",
    description:
      "Автосервиз Pro Limit Tuning — диагностика, ремонт и тунинг.",
    images: ["/biglogo.png"],
  },
  icons: {
    icon: "/prolimitlogo.PNG",
    apple: "/biglogo.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      bg: "/",
      en: "/en",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#010000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LocaleHtmlLang />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
