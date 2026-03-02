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
        // FDC Brand Colors (Professional Dark Theme)
        gold: '#FF2D55',
        'gold-bright': '#FF5A7A',
        'gold-dim': 'rgba(255,45,85,0.12)',
        
        // Professional Dark Palette
        zinc: {
          950: '#09090b',
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          600: '#52525b',
          500: '#71717a',
          400: '#a1a1aa',
          300: '#d4d4d8',
          200: '#e4e4e7',
          100: '#f4f4f5',
        },
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
