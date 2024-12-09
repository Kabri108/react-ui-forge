/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0f172a', // Primary background
          secondary: '#1e293b', // Secondary background
          text: '#E0E0E0', // Light text
          muted: '#B3B3B3', // Muted text
          border: '#292929', // Border color
          codeBg:'#111827'
        },
    },
    backgroundImage: {
      'dark-gradient': 'linear-gradient(to right, #0f172a, #152648)',
      'light-gradient': 'linear-gradient(to right, #ffffff, #e0f7fa)',
    },

    },
  },
  plugins: [],
}