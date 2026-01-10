import type { RitualEntryDTO } from "./labs-types";

const STORAGE_KEY = "vyr.labs.ritualEntries.v1";

const safeParse = (raw: string | null): RitualEntryDTO[] => {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry) => entry && typeof entry.dateISO === "string");
  } catch {
    return [];
  }
};

export const getRitualEntries = (): RitualEntryDTO[] => {
  if (typeof window === "undefined") return [];
  return safeParse(window.localStorage.getItem(STORAGE_KEY));
};

export const upsertRitualEntry = (entry: RitualEntryDTO): RitualEntryDTO[] => {
  if (typeof window === "undefined") return [entry];
  const existing = getRitualEntries();
  const index = existing.findIndex((item) => item.dateISO === entry.dateISO);
  const updated = [...existing];
  if (index >= 0) {
    updated[index] = entry;
  } else {
    updated.push(entry);
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};

export const getRitualEntryByDate = (dateISO: string): RitualEntryDTO | undefined => {
  return getRitualEntries().find((entry) => entry.dateISO === dateISO);
};
