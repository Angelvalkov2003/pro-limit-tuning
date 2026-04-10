/** Canonical address for maps & search (Bulgarian). */
export const WORKSHOP_ADDRESS_BG = "Околовръстен път 462, София";
export const WORKSHOP_ADDRESS = WORKSHOP_ADDRESS_BG;

/** Shown on the English site. */
export const WORKSHOP_ADDRESS_EN = "Ring Road 462, Sofia";

export function workshopAddressDisplay(locale: "bg" | "en"): string {
  return locale === "en" ? WORKSHOP_ADDRESS_EN : WORKSHOP_ADDRESS_BG;
}

export const INSTAGRAM_URL = "https://www.instagram.com/pro_limit_tuning/";
export const INSTAGRAM_HANDLE = "@pro_limit_tuning";

/** Mobile (BG). Shown in UI; dial uses E.164. */
export const WORKSHOP_PHONE_DISPLAY = "0888882850";
export const WORKSHOP_PHONE_E164 = "+359888882850";
export const WORKSHOP_PHONE_TEL_HREF = `tel:${WORKSHOP_PHONE_E164}`;

export function googleMapsEmbedSrc(lang: "bg" | "en"): string {
  const q = encodeURIComponent(WORKSHOP_ADDRESS_BG);
  return `https://maps.google.com/maps?q=${q}&hl=${lang}&z=15&output=embed`;
}

export function googleMapsSearchUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WORKSHOP_ADDRESS_BG)}`;
}
