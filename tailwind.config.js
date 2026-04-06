/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff9d',
        'neon-cyan': '#00e5ff',
        'neon-amber': '#ffb300',
        'dark-bg': '#050a0e',
        'dark-bg2': '#080f14',
        'dark-surface': '#0c1620',
        'dark-surface2': '#111e2a',
        'dark-muted': '#4a6070',
        'dark-text': '#c8dde8',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        'blink': 'blink 1s step-end infinite',
        'fadeUp': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0,255,157,0.35)',
        'glow-cyan': '0 0 20px rgba(0,229,255,0.35)',
        'glow-amber': '0 0 20px rgba(255,179,0,0.35)',
      },
    },
  },
  plugins: [],
}
