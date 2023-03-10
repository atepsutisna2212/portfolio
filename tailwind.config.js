/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        // primary: '#14b8a6',
        primary: '#0F62FE',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
