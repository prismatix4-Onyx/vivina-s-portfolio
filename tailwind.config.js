/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#080704',
          900: '#120F08',
          850: '#17130A',
          800: '#211B0E',
          700: '#2F2615',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          solar: '#FDE68A',
          glow: 'rgba(251, 191, 36, 0.25)',
          border: 'rgba(251, 191, 36, 0.18)',
        },
        orange: {
          flare: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'terminal-scan': 'scan 6s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
}