/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        darkBackground: "#000000",
        darkForeground: "#ffffff",
      },
    },
  },
  plugins: [],
};

export default config;
