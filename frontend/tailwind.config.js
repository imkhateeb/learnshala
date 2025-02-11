/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#ffffff",
        secondary: "#46393a",
        tertiary: "#0e0a1a",
      },
      backgroundColor: {
        primary: "#0c0a15",
        secondary: "#eff0f6",
        tertiary: "#f7f7fc",
      },
      borderColor: {
        primary: "linear-gradient(90deg, #f7f7fc 0%, #eff0f6 100%)",
        secondary: "#ffffff",
        tertiary: "#0e0a1a",
      },
    },
  },
  plugins: [],
};
