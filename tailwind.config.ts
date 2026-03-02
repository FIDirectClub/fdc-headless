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
        // FDC Brand Colors (from stickers site)
        gold: '#FF2D55',
        'gold-bright': '#FF5A7A',
        'gold-dim': 'rgba(255,45,85,0.12)',
        black: '#e0ddd5',
        dark: '#d4d0c8',
        darker: 'rgba(255,255,255,0.55)',
        white: '#1a1a1a',
        steel: '#666',
        'steel-light': '#444',
      },
      fontFamily: {
        barlow: ['var(--font-barlow)', 'sans-serif'],
        'barlow-condensed': ['var(--font-barlow-condensed)', 'sans-serif'],
        bangers: ['var(--font-bangers)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
