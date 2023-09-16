/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/01-Javascript_Drum_Kit/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "background-pattern": "url('/dist/01-Javascript_Drum_Kit/background.jpeg')",
      },
    },
  },
  plugins: [],
};
