/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5fb',
          100: '#d5e5f4',
          200: '#b3d0eb',
          300: '#88b5de',
          400: '#5c95cd',
          500: '#3568a4',
          600: '#2d5a8d',
          700: '#254b76',
          800: '#1d3c5f',
          900: '#152d48',
          950: '#0c1e31',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      screens: {
        'xs': '475px',
        ...require('tailwindcss/defaultTheme').screens,
      },
    },
  },
  plugins: [],
};