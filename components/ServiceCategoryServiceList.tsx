"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import {
  categoryTitle,
  itemName,
  type ServiceCategoryDef,
} from "@/lib/services-catalog";
import { BookingModal } from "@/components/BookingModal";

type Props = {
  locale: Locale;
  category: ServiceCategoryDef;
};

export function ServiceCategoryServiceList({ locale, category }: Props) {
  const t = getMessages(locale);
  const catTitle = categoryTitle(category, locale);
  const [booking, setBooking] = useState<{ serviceName: string } | null>(null);

  return (
    <>
      <ul className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#010000]">
        {category.items.map((row, index) => {
          const name = itemName(row, locale);
          return (
            <li
              key={`${row.nameBg}-${row.price}-${index}`}
              className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="text-zinc-200">{name}</span>
              <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                <span className="font-medium tabular-nums text-[#dc211d]">
                  {row.price}
                </span>
                <button
                  type="button"
                  onClick={() => setBooking({ serviceName: name })}
                  className="shrink-0 rounded-md border border-[#dc211d]/50 bg-[#dc211d]/10 px-3 py-1.5 text-xs font-semibold text-[#dc211d] transition-colors hover:bg-[#dc211d] hover:text-white sm:text-sm"
                >
                  {t.forms.booking.bookSlot}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {booking ? (
        <BookingModal
          open
          onClose={() => setBooking(null)}
          locale={locale}
          categoryTitle={catTitle}
          serviceName={booking.serviceName}
        />
      ) : null}
    </>
  );
}
