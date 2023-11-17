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
        custom: {
          gray: {
            50: "#f6f6f6",
            100: "#efeeed",
            200: "#dddcdc",
            500: "#333333",
          },
          red: {
            500: "#eb4a46",
          },
          cyan: {
            500: "#00c8b3",
          },
        },
      },
      gridTemplateColumns: {
        "auto-fit-250": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
