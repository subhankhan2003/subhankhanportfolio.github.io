/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff3333',
          dark: '#cc0000',
        },
        background: '#0a0a0a',
        surface: '#1a1a1a',
        'surface-light': '#2a2a2a',
      },
    },
  },
  plugins: [],
};