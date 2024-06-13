import type { Config } from "tailwindcss";

import topographyPlugin from "@tailwindcss/typography";
import openVariant from "./tailwind.plugin";

export default {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [topographyPlugin, openVariant]
} as Config;