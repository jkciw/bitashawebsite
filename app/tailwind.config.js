/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        brand: ['Azonix', '"SF Pro Display"', 'sans-serif'],
      },
      colors: {
        ink: '#344861',
        steel: '#68778f',
        cloud: '#f4efe6',
        graphite: '#161b33',
        brandNight: '#161b33',
        brandMidnight: '#0d2748',
        brandNavy: '#344861',
        brandIndigo: '#22243d',
        brandIvory: '#ece5d6',
        brandAmber: '#f3a95d',
        brandEmber: '#9f573f',
        brandMist: '#e7ddce',
      },
      boxShadow: {
        card: '0 12px 40px rgba(0, 0, 0, 0.08)',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
};
