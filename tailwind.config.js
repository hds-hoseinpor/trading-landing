import { colors } from "./app/constants/colors";

const sizes = Array(27)
  .fill("")
  .reduce((obj, _, i) => ({ ...obj, [i + 6]: `${(i + 6) / 16}rem` }), {});

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["BinanceNova", "system-ui", "sans-serif"],
      },
      borderRadius: sizes,
      fontSize: sizes,
    },
  },
  plugins: [],
};
