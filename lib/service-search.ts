import {
  SERVICE_CATEGORIES,
  type ServiceCategoryDef,
  type ServiceItemRow,
} from "@/lib/services-catalog";

export type ServiceSearchHit = {
  category: ServiceCategoryDef;
  item: ServiceItemRow;
};

function hitKey(cat: ServiceCategoryDef, item: ServiceItemRow): string {
  return `${cat.slug}:${item.nameBg}`;
}

/** Minimum query length: 2. Matches service names (BG/EN) and category titles. */
export function searchServiceHits(query: string, limit = 10): ServiceSearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const hits: ServiceSearchHit[] = [];
  const seen = new Set<string>();

  for (const cat of SERVICE_CATEGORIES) {
    for (const item of cat.items) {
      const k = hitKey(cat, item);
      if (seen.has(k)) continue;
      if (
        item.nameBg.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q)
      ) {
        seen.add(k);
        hits.push({ category: cat, item });
        if (hits.length >= limit) return hits;
      }
    }
  }

  for (const cat of SERVICE_CATEGORIES) {
    const catMatch =
      cat.titleBg.toLowerCase().includes(q) ||
      cat.titleEn.toLowerCase().includes(q);
    if (!catMatch) continue;
    for (const item of cat.items) {
      const k = hitKey(cat, item);
      if (seen.has(k)) continue;
      seen.add(k);
      hits.push({ category: cat, item });
      if (hits.length >= limit) return hits;
    }
  }

  return hits;
}
