/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#0EA5E9',
        accent: '#06B6D4',
        dark: '#0F172A',
        darker: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui'],
      },
    },
  },
  plugins: [],
}