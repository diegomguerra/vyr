// VYR Brand Tokens
// Technical, neutral, minimal color system

export const VYR_COLORS = {
  black: "#0A0A0A",
  white: "#FAFAFA",
  gray: {
    100: "#E5E5E5",
    200: "#D4D4D4",
    300: "#A3A3A3",
    400: "#737373",
    500: "#525252",
    600: "#404040",
    700: "#262626",
    800: "#1A1A1A",
    900: "#171717",
  },
  coldBlue: "#1E293B",
} as const;

export const VYR_LABELS = {
  BOOT: {
    old: "NZT Dia",
    name: "VYR BOOT",
    color: VYR_COLORS.gray[100], // Light gray / technical white
    textColor: VYR_COLORS.black,
  },
  HOLD: {
    old: "NZT Tarde",
    name: "VYR HOLD",
    color: VYR_COLORS.gray[600], // Graphite / dark gray
    textColor: VYR_COLORS.white,
  },
  CLEAR: {
    old: "NZT Noite",
    name: "VYR CLEAR",
    color: VYR_COLORS.coldBlue, // Deep black with cold blue
    textColor: VYR_COLORS.white,
  },
  SYSTEM: {
    old: "Pacote Completo",
    name: "VYR SYSTEM",
    color: VYR_COLORS.gray[800],
    textColor: VYR_COLORS.white,
  },
  NODE: {
    old: "Smart Ring",
    name: "VYR NODE",
    color: VYR_COLORS.black,
    textColor: VYR_COLORS.gray[300],
  },
} as const;

export const VYR_TYPOGRAPHY = {
  logo: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 500,
    letterSpacing: "0.35em",
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
  },
} as const;

export const VYR_SPACING = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
} as const;
