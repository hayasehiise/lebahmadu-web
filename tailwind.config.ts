import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), daisyui,],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#740001",
          "secondary": "#ae0001",
          "accent": "#eeba30",
          "neutral": "#ae0001",
          "base-100": "#000000",
        }
      }
    ]
  }
};
export default config;
