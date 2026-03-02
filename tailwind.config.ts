import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keep the gold/pink for accents
        gold: '#FF2D55',
        'gold-bright': '#FF5A7A',
      },
    },
  },
  plugins: [],
};
export default config;
