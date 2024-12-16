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
          codeBg:'#111827',
          btnc:'#121d36',
          cardboder:'#103A5C'
        },
    },
    backgroundImage: {
      'dark-gradient': 'linear-gradient(to right, #0f172a, #152648)',
      'light-gradient': 'linear-gradient(to right, #ffffff, #e0f7fa)',
    },
    animation: {
      'rocket-launch': 'rocket 2s linear infinite',
      'beat': 'beat 1s ease-in-out infinite',
    },
    keyframes: {
      rocket: {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
        '100%': { transform: 'translateY(0)' },
      },
      beat: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
      },
    }

    },
    
  },
  plugins: [
    tailwindScrollbar,
  ],
  variants:{
    scrollbar:['dark']
  }
}