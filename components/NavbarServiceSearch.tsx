"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/lib/i18n";
import {
  searchServiceHits,
  type ServiceSearchHit,
} from "@/lib/service-search";
import { categoryTitle, itemName } from "@/lib/services-catalog";

type Props = {
  locale: Locale;
  onPick: (categoryTitle: string, serviceName: string) => void;
  onAfterPick?: () => void;
  className?: string;
};

export function NavbarServiceSearch({
  locale,
  onPick,
  onAfterPick,
  className,
}: Props) {
  const t = getMessages(locale).nav;
  const [q, setQ] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  const trimmed = q.trim();
  const showPanel = panelOpen && trimmed.length >= 2;
  const hits = showPanel ? searchServiceHits(trimmed) : [];

  useEffect(() => {
    setActive(0);
  }, [trimmed]);

  useEffect(() => {
    if (!showPanel) return;
    const onCap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPanelOpen(false);
        inputRef.current?.blur();
        e.stopPropagation();
      }
    };
    window.addEventListener("keydown", onCap, true);
    return () => window.removeEventListener("keydown", onCap, true);
  }, [showPanel]);

  useEffect(() => {
    if (!showPanel) return;
    const fn = (e: PointerEvent) => {
      if (wrapRef.current?.contains(e.target as Node)) return;
      setPanelOpen(false);
    };
    document.addEventListener("pointerdown", fn);
    return () => document.removeEventListener("pointerdown", fn);
  }, [showPanel]);

  const commit = useCallback(
    (hit: ServiceSearchHit) => {
      onPick(categoryTitle(hit.category, locale), itemName(hit.item, locale));
      setQ("");
      setPanelOpen(false);
      onAfterPick?.();
    },
    [locale, onPick, onAfterPick],
  );

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!showPanel) {
      if (e.key === "Escape") {
        setPanelOpen(false);
      }
      return;
    }

    if (hits.length === 0) {
      if (e.key === "Escape") {
        setPanelOpen(false);
        inputRef.current?.blur();
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, hits.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const hit = hits[active];
      if (hit) commit(hit);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setPanelOpen(false);
      inputRef.current?.blur();
    }
  }

  const safeActive = hits.length ? Math.min(active, hits.length - 1) : 0;

  return (
    <div ref={wrapRef} className={`relative ${className ?? ""}`}>
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder={t.searchPlaceholder}
          aria-label={t.searchAriaLabel}
          aria-expanded={showPanel}
          aria-controls={showPanel ? listId : undefined}
          aria-activedescendant={
            showPanel && hits[safeActive]
              ? `${listId}-opt-${safeActive}`
              : undefined
          }
          className="w-full rounded-md border border-white/15 bg-black/50 py-2 pl-3 pr-9 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[#dc211d]/50"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPanelOpen(true);
          }}
          onFocus={() => {
            if (trimmed.length >= 2) setPanelOpen(true);
          }}
          onKeyDown={onKeyDown}
        />
        <span
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500"
          aria-hidden
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </span>
      </div>

      {showPanel ? (
        <div
          id={listId}
          role="listbox"
          aria-label={t.searchAriaLabel}
          className="absolute left-0 right-0 top-full z-[70] mt-1 max-h-72 overflow-y-auto rounded-lg border border-white/10 bg-[#010000] py-1 shadow-xl"
        >
          {hits.length === 0 ? (
            <div className="px-3 py-2.5 text-sm text-zinc-500">
              {t.searchNoResults}
            </div>
          ) : (
            hits.map((hit, i) => (
              <button
                key={hitKey(hit)}
                type="button"
                role="option"
                id={`${listId}-opt-${i}`}
                aria-selected={i === safeActive}
                className={`flex w-full flex-col items-start gap-0.5 px-3 py-2.5 text-left text-sm transition-colors ${
                  i === safeActive
                    ? "bg-white/10 text-white"
                    : "text-zinc-300 hover:bg-white/5"
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => commit(hit)}
              >
                <span className="font-medium">
                  {itemName(hit.item, locale)}
                </span>
                <span className="text-xs text-zinc-500">
                  {categoryTitle(hit.category, locale)}
                </span>
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  );
}

function hitKey(hit: ServiceSearchHit): string {
  return `${hit.category.slug}:${hit.item.nameBg}:${hit.item.price}`;
}
