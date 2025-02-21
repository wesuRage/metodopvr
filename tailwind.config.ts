import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "600px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-pmg": "#00FF85"
      },
    },
  },
  plugins: [],
} satisfies Config;
