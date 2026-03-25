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
        ink: '#2f415d',
        steel: '#5a6478',
        cloud: '#ebe8df',
        graphite: '#2f415d',
        brandNavy: '#2f415d',
        brandIvory: '#d9d5cb',
        brandCopper: '#f3ab59',
        brandMist: '#f3f1ea',
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
