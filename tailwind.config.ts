import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "purple-300": "#EBE5F9",
      "purple-500": "#967ad7",
      "purple-600": "#805fcb",
      "purple-700": "#4B2995",
      "purple-900": "#321d5f",
      purple: "#8047F8",

      "light-gray": "#44475a",
      "smoke-gray": "#53566a",
      pink: "#ff79c6",
      "pink-light": "#efb8d8",
      "gray-700": "#1f1f1f",
      "gray-300": "#989898",

      "base-title": "#f8f8f2",
      "base-subtitle": "#bcbcbc",
      "base-text": "#574F4D",
      "base-label": "#8D8686",
      "base-hover": "#D7D5D5",
      "base-button": "#E6E5E5",
      "base-input": "#EDEDED",
      "base-card": "#F3F2F2",

      background: "#8047F8",
      white: "#FFFFFF",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
} satisfies Config;
