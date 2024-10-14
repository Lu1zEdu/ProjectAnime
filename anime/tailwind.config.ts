import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // #f8f8ec
        // #aedd2b
        // #066699
        // #0a5483
        // #02416d
        "white": "#f8f8ec",
        "green": "#aedd2b",
        "blue": "#066699",
        "blue2": "#0a5483",
        "blue3": "#02416d",
      },
    },
  },
  plugins: [],
};
export default config;
