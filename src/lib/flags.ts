const readFlag = (value: string | undefined, fallback: boolean) => {
  if (value === undefined) return fallback;
  return value === "true";
};

export const FEATURES = {
  FEATURE_NODE_ENABLED: readFlag(import.meta.env.VITE_FEATURE_NODE_ENABLED, false),
  FEATURE_INSIGHTS_ENABLED: readFlag(import.meta.env.VITE_FEATURE_INSIGHTS_ENABLED, false),
  FEATURE_PROGRESS_VIEW: readFlag(import.meta.env.VITE_FEATURE_PROGRESS_VIEW, true),
  FEATURE_OBSERVATION_LAYER: readFlag(import.meta.env.VITE_FEATURE_OBSERVATION_LAYER, false),
  insights_enabled: readFlag(import.meta.env.VITE_INSIGHTS_ENABLED, true),
  progress_weekly_enabled: readFlag(import.meta.env.VITE_PROGRESS_WEEKLY_ENABLED, true),
};
