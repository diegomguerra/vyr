import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // VYR Brand Colors
        vyr: {
          black: "hsl(var(--vyr-black))",
          white: "hsl(var(--vyr-white))",
          gray: {
            100: "hsl(var(--vyr-gray-100))",
            200: "hsl(var(--vyr-gray-200))",
            300: "hsl(var(--vyr-gray-300))",
            400: "hsl(var(--vyr-gray-400))",
            500: "hsl(var(--vyr-gray-500))",
            600: "hsl(var(--vyr-gray-600))",
            700: "hsl(var(--vyr-gray-700))",
            800: "hsl(var(--vyr-gray-800))",
            900: "hsl(var(--vyr-gray-900))",
          },
          coldBlue: "hsl(var(--vyr-cold-blue))",
          boot: "hsl(var(--vyr-boot))",
          hold: "hsl(var(--vyr-hold))",
          clear: "hsl(var(--vyr-clear))",
          accent: "hsl(var(--vyr-accent))",
          accentGlow: "hsl(var(--vyr-accent-glow))",
          cyan: "hsl(var(--vyr-cyan))",
          cyanGlow: "hsl(var(--vyr-cyan-glow))",
          graphite: {
            DEFAULT: "hsl(var(--vyr-graphite))",
            light: "hsl(var(--vyr-graphite-light))",
            dark: "hsl(var(--vyr-graphite-dark))",
          },
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 12px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-10px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        spin3d: {
          "0%": { transform: "rotateY(-15deg) rotateX(5deg)" },
          "25%": { transform: "rotateY(15deg) rotateX(-3deg)" },
          "50%": { transform: "rotateY(-15deg) rotateX(-5deg)" },
          "75%": { transform: "rotateY(15deg) rotateX(3deg)" },
          "100%": { transform: "rotateY(-15deg) rotateX(5deg)" },
        },
        float3d: {
          "0%, 100%": { transform: "translateY(0) rotateY(-8deg)" },
          "50%": { transform: "translateY(-10px) rotateY(8deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        spin3d: "spin3d 8s ease-in-out infinite",
        float3d: "float3d 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
