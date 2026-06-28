import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        rangerBlue: "#15559f",
        rangerOrange: "#f79a18",
      },
      boxShadow: {
        card: "0 30px 90px rgba(11, 43, 91, 0.16)",
      },
    },
  },
  plugins: [],
};
export default config;
