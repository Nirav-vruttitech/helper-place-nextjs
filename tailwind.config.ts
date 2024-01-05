import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        greenbtn: "#25ae88",
        yellowbtn: "#ebba16",
        bannerBgColor: "#f9f9f9",
        primary: "#054a84",
      },
    },
  },
  plugins: [],
};
export default config;
