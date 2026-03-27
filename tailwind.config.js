/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#efefef",
        panel: "#f5f5f5",
        line: "#e8e8e8",
        text: "#111111",
        muted: "#666666",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        noneSoft: "none",
      },
    },
  },
  plugins: [],
};
