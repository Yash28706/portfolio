/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050816',
          card: 'rgba(15, 23, 42, 0.65)',
          border: 'rgba(0, 245, 255, 0.15)',
          primary: '#00F5FF',
          secondary: '#6C63FF',
          accent: '#FF4D9D',
          success: '#22C55E',
          text: '#E2E8F0',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Sora', 'sans-serif'],
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 245, 255, 0.8), 0 0 40px rgba(108, 99, 255, 0.4)' },
        },
      },
      boxShadow: {
        'cyber-neon': '0 0 20px rgba(0, 245, 255, 0.35), 0 0 40px rgba(108, 99, 255, 0.2)',
        'cyber-pink': '0 0 20px rgba(255, 77, 157, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};
