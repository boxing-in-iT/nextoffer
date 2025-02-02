import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#2C2C2C",
      },
      backgroundImage: {
        "login-banner": "url('/src/assets/images/login/bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
