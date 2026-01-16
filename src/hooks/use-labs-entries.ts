import { useEffect, useState } from "react";
import type { RitualEntry } from "@/lib/labs-types";

const STORAGE_KEY = "vyr.labs.rituals";

const readEntries = (): RitualEntry[] => {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as RitualEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const sortEntries = (list: RitualEntry[]) =>
  [...list].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

export const useLabsEntries = () => {
  const [entries, setEntries] = useState<RitualEntry[]>(() => sortEntries(readEntries()));

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const setSortedEntries = (next: RitualEntry[] | ((prev: RitualEntry[]) => RitualEntry[])) => {
    setEntries((prev) => {
      const resolved = typeof next === "function" ? next(prev) : next;
      return sortEntries(resolved);
    });
  };

  return { entries, setEntries: setSortedEntries };
};
