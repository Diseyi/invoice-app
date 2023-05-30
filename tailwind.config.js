/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': 'hsl(240, 27%, 98%)',
        'soft-purple': 'hsl(252, 100%, 73%)',
        'light-purple': 'hsl(252, 94%, 67%)',
        'soft-violet': 'hsl(231, 73%, 93%)',
        'light-violet': 'hsl(231, 37%, 63%)',
        'soft-red': 'hsl(0, 100%, 80%)',
        'light-red': 'hsl(0, 80%, 63%)',
        'dark-blue': 'hsl(228, 29%, 7%)',
        'black-shade-1': 'hsl(233, 30%, 11%)',
        'black-shade-2': 'hsl(233, 30%, 21%)',
        'black-shade-3': 'hsl(233. 31%. 17%)',
        'gray-purple': 'hsl(231, 20%, 61%)',
        'gray-purple-2': 'hsla(231, 20%, 27%, 1)',
        'dark-orange': 'hsla(34, 100%, 50%, 1)',
        'light-green': 'hsla(160, 67%, 52%, 1)',
      },
    },
  },
  plugins: [],
}

