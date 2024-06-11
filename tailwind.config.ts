import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;