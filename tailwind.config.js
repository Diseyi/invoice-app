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
        'off-white': '#F8F8FB',
        'soft-purple': '#9277FF',
        'light-purple': '#7C5DFA',
        'soft-violet': '#DFE3FA',
        'light-violet': '#7E88C3',
        'soft-red': '#9277FF',
        'light-red': '#EC5757',
        'black-shade-1': '#OCOE16',
        'black-shade-2': '#141625',
        'dark-blue-1': '#252945',
        'dark-blue-2': '#1E2139',
        'gray-purple': '#888EBO',
      },
    },
  },
  plugins: [],
}

