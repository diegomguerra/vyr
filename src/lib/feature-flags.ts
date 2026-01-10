type FeatureFlags = {
  nodeEnabled: boolean;
  nodeSignalsCard: boolean;
  nodePrefillRitual: boolean;
  nodeTrendsProgress: boolean;
  insightsEnabled: boolean;
  progressWeeklyEnabled: boolean;
};

const parseFlag = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  const normalized = value.trim().toLowerCase();
  if (["true", "1", "yes", "on"].includes(normalized)) return true;
  if (["false", "0", "no", "off"].includes(normalized)) return false;
  return fallback;
};

export const getFeatureFlags = (): FeatureFlags => {
  const nodeEnabled = parseFlag(import.meta.env.VITE_FF_NODE_ENABLED, false);
  const nodeSignalsCard = nodeEnabled
    ? parseFlag(import.meta.env.VITE_FF_NODE_SIGNALS_CARD, true)
    : false;
  const nodePrefillRitual = nodeEnabled
    ? parseFlag(import.meta.env.VITE_FF_NODE_PREFILL_RITUAL, true)
    : false;
  const nodeTrendsProgress = nodeEnabled
    ? parseFlag(import.meta.env.VITE_FF_NODE_TRENDS_PROGRESS, true)
    : false;
  const insightsEnabled = parseFlag(import.meta.env.VITE_FF_INSIGHTS_ENABLED, true);
  const progressWeeklyEnabled = parseFlag(
    import.meta.env.VITE_FF_PROGRESS_WEEKLY_ENABLED,
    true,
  );

  return {
    nodeEnabled,
    nodeSignalsCard,
    nodePrefillRitual,
    nodeTrendsProgress,
    insightsEnabled,
    progressWeeklyEnabled,
  };
};
