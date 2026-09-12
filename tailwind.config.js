/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#f7d15a',
          light: '#ffe894',
          dark: '#f2b819',
        },
        brand: {
          bg: '#020202',
          surface: '#0a0a0a',
          orange: '#f7931a',
          yellow: '#ffd700',
          cream: '#ffe87a',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'sans-serif'],
      },
      animation: {
        'cta-shimmer': 'ctaShimmer 3s ease-in-out infinite',
        shine: 'shine 4s ease-in-out infinite',
      },
      keyframes: {
        ctaShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%, 75%, 100%': { left: '-100%' },
          '50%': { left: '150%' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
