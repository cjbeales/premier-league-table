import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#71717a",
        inverse: "#ffffff",

        surface: "#ffffff",
        surfaceSecondary: "#f4f4f5",
        surfaceDark: "#18181b",

        brand: "#37003c",
        accent: "#00ff87",
      },
    },
  },
};

export default config;
