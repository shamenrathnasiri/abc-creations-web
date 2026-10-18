/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#ffda00',
          light: '#ffda00',
          dark: '#f57e22',
        },
        brand: {
          bg: '#000000',
          surface: '#000000',
          orange: '#f57e22',
          yellow: '#ffda00',
          cream: '#ffda00',
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
