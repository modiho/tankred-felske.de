import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Nimbus Sans", sans-serif',
      },
      colors: {
        white: "#f0f0f0",
      },
    },
  },
  plugins: [typography],
};
