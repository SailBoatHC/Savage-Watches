/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '4xs' : '280px',
        // => @media (min-width: 280px) { ... }

        '3xs' : '320px',
        // => @media (min-width: 320px) { ... }

        '2xs' : '360px',
        // => @media (min-width: 360px) { ... }

        'xs' : '475px',
        // => @media (min-width: 475px) { ... }
      }
    },
  },
  plugins: [],
}