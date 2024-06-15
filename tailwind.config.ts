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
        white:"#ffffff",
        white6:"#f6f6f6",
        blueVoilet: "#14279B",
        black:"#fff",
        black1:"#111111",
        black2:"#222222",
        black3:"#333333",
        black4:"#444444",
        black4a:"#484848",
        black5:"#555555",
        black8:"#888888",
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;


