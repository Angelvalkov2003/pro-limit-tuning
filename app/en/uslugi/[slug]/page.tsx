import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceCategoryView } from "@/components/ServiceCategoryView";
import {
  categoryTitle,
  getCategoryBySlug,
  SERVICE_SLUGS,
} from "@/lib/services-catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${categoryTitle(cat, "en")} — services`,
    description: `Prices and services: ${categoryTitle(cat, "en")} at Pro Limit Tuning.`,
  };
}

export default async function ServiceCategoryPageEn({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();
  return <ServiceCategoryView locale="en" category={cat} />;
}
