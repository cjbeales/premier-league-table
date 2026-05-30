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
        purple: "#475291",
        lightPurple: "#7B86BF",
        blue: "#1822b9",
        darkBlue: "#030543",
        championsLeague: "#2038E2",
        europaLeague: "#FC6D23",
        conferenceLeague: "#1EBC28",
      },
    },
  },
};

export default config;
