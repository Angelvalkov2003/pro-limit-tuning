/** Working hours: Mon–Fri 9:00–18:00, Sat 9:00–16:00. Sunday closed. */

export function parseISODateLocal(
  iso: string,
): { y: number; m: number; d: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const month = Number(m[2]);
  const d = Number(m[3]);
  if (month < 1 || month > 12 || d < 1 || d > 31) return null;
  const dt = new Date(y, month - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== month - 1 || dt.getDate() !== d)
    return null;
  return { y, m: month, d };
}

function halfHourSlots(startHour: number, endHour: number): string[] {
  const out: string[] = [];
  let t = startHour * 60;
  const end = endHour * 60;
  while (t < end) {
    const h = Math.floor(t / 60);
    const mm = t % 60;
    out.push(`${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`);
    t += 30;
  }
  return out;
}

/** Returns empty array on Sunday; null if date invalid. */
export function getTimeSlotsForDate(iso: string): string[] | null {
  const p = parseISODateLocal(iso);
  if (!p) return null;
  const dow = new Date(p.y, p.m - 1, p.d).getDay();
  if (dow === 0) return [];
  if (dow === 6) return halfHourSlots(9, 16);
  return halfHourSlots(9, 18);
}

export function todayISOLocal(): string {
  const n = new Date();
  const y = n.getFullYear();
  const m = String(n.getMonth() + 1).padStart(2, "0");
  const d = String(n.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function isValidBookingDate(iso: string): boolean {
  const p = parseISODateLocal(iso);
  if (!p) return false;
  const today = todayISOLocal();
  if (iso < today) return false;
  const dow = new Date(p.y, p.m - 1, p.d).getDay();
  if (dow === 0) return false;
  return true;
}

export function isValidTimeForDate(iso: string, time: string): boolean {
  const slots = getTimeSlotsForDate(iso);
  if (slots === null) return false;
  return slots.includes(time);
}
