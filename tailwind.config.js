/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e2837c",

          "secondary": "#8eedbf",

          "accent": "#eaef4f",

          "neutral": "#292338",

          "base-100": "#E6E6E6",

          "info": "#7493F1",

          "success": "#3CE289",

          "warning": "#F9972F",

          "error": "#ED2C39",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

