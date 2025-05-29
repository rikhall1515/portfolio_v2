/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/styles/**/*.{css}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.875rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "3rem"],
      "6xl": ["3.75rem", "3.75rem"],
      "7xl": ["4.5rem", "4.5rem"],
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontFamily: {
      plusjakarta: ["var(--font-jakarta)"],
      atkinson: ["var(--font-atkinson)"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      m: "420px",
      // => @media (min-width: 420px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1100px",
      // => @media (min-width: 1100px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      successful: {
        DEFAULT: "hsl(var(--successful))",
        foreground: "hsl(var(--successful-foreground))",
      },
      pending: {
        DEFAULT: "hsl(var(--pending))",
        foreground: "hsl(var(--pending-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      custom: {
        1000: "hsl(var(--text-1000))",
        900: "hsl(var(--text-900))",
        800: "hsl(var(--text-800))",
        700: "hsl(var(--text-700))",
        600: "hsl(var(--text-600))",
        500: "hsl(var(--text-500))",
        400: "hsl(var(--text-400))",
        300: "hsl(var(--text-300))",
        200: "hsl(var(--text-200))",
        150: "hsl(var(--text-150))",
        100: "hsl(var(--text-100))",
      },
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      white: "#FFFFFF",
      black: "#2E2E2E",
      transparent: "transparent",
      shadow: "#101828",
    },
    extend: {
      screens: {
        m: "420px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      dropShadow: {
        primary: "0 35px 35px hsl(var(--primary))",
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
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "150% 50%" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        gradient: "gradient 6s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      transitionTimingFunction: {
        btn: "cubic-bezier(0.5, 2.5, 0.7, 0.7)",
      },
      typography: ({ theme }: any) => ({
        custom: {
          css: {
            "--tw-prose-invert-pre-bg": theme("custom.1000"),
            "--tw-prose-headings": theme("custom.900"),
            "--tw-prose-links": theme("custom.900"),
            "--tw-prose-bold": theme("custom.900"),
            "--tw-prose-quotes": theme("custom.900"),
            "--tw-prose-code": theme("custom.900"),
            "--tw-prose-pre-bg": theme("custom.800"),
            "--tw-prose-body": theme("custom.700"),
            "--tw-prose-invert-hr": theme("custom.700"),
            "--tw-prose-invert-td-borders": theme("custom.700"),
            "--tw-prose-invert-quote-borders": theme("custom.700"),
            "--tw-prose-lead": theme("custom.600"),
            "--tw-prose-invert-bullets": theme("custom.600"),
            "--tw-prose-invert-th-borders": theme("custom.600"),
            "--tw-prose-counters": theme("custom.500"),
            "--tw-prose-captions": theme("custom.500"),
            "--tw-prose-invert-captions": theme("custom.400"),
            "--tw-prose-invert-counters": theme("custom.400"),
            "--tw-prose-invert-lead": theme("custom.400"),
            "--tw-prose-th-borders": theme("custom.300"),
            "--tw-prose-invert-body": theme("custom.300"),
            "--tw-prose-bullets": theme("custom.300"),
            "--tw-prose-invert-pre-code": theme("custom.300"),
            "--tw-prose-hr": theme("custom.200"),
            "--tw-prose-quote-borders": theme("custom.200"),
            "--tw-prose-pre-code": theme("custom.200"),
            "--tw-prose-td-borders": theme("custom.200"),
            "--tw-prose-invert-quotes": theme("custom.150"),
            "--tw-prose-invert-headings": theme("custom.100"),
            "--tw-prose-invert-links": theme("custom.100"),
            "--tw-prose-invert-bold": theme("custom.100"),
            "--tw-prose-invert-code": theme("custom.100"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // function ({ matchUtilities, theme }: unknown) {
    //   matchUtilities(
    //     {
    //       "bg-grid": (value: string) => ({
    //         backgroundImage: `url("${svgToTinyDataUri(
    //           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
    //         )}")`,
    //       }),
    //       "bg-grid-small": (value: string) => ({
    //         backgroundImage: `url("${svgToTinyDataUri(
    //           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
    //         )}")`,
    //       }),
    //       "bg-dot": (value: string) => ({
    //         backgroundImage: `url("${svgToTinyDataUri(
    //           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
    //         )}")`,
    //       }),
    //     },
    //     { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    //   );
    // },
    function addVariablesForColors({ addBase, theme }: any) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
export default config;
