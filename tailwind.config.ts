import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        shunt: {
          blue: "#0b426e"
        }
      }
    }
  },
  plugins: []
};

export default config;