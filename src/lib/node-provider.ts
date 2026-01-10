import type { NodeDailySummaryDTO } from "./labs-types";

const pickByIndex = <T,>(list: T[], index: number) => list[index % list.length];

const hashDate = (dateISO: string) => {
  let hash = 0;
  for (let i = 0; i < dateISO.length; i += 1) {
    hash = (hash * 31 + dateISO.charCodeAt(i)) % 997;
  }
  return hash;
};

export const getNodeDailySummary = async (dateISO: string): Promise<NodeDailySummaryDTO> => {
  const hash = hashDate(dateISO);
  const sleepQualityTag = pickByIndex(["SHORT", "OK", "GOOD"], hash);
  const hrvTag = pickByIndex(
    ["LOWER_THAN_BASELINE", "IN_BASELINE", "ABOVE_BASELINE"],
    hash + 3,
  );
  const rhrTag = pickByIndex(
    ["LOWER_THAN_BASELINE", "IN_BASELINE", "ABOVE_BASELINE"],
    hash + 7,
  );
  const movementTag = pickByIndex(["LOW", "MODERATE", "HIGH"], hash + 11);
  const energyTag = pickByIndex(["LOW", "OK", "HIGH"], hash + 13);

  return {
    dateISO,
    sleepQualityTag,
    hrvTag,
    rhrTag,
    movementTag,
    energyTag,
    vendor: "VYR Node (mock)",
    confidence: 0.62,
  };
};
