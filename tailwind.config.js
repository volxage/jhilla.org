/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#dcbb84',
          60: '#bc9990'
        },
      },
      animation: {
        slideIn: "fadeIn 2s ease-in forwards"
      },
      keyframes : {
        slideIn: {
          "0%:": { opacity: 0 },
          "100%": { opacity: 1}
        }
      }
    },
  },
  plugins: [],
}

