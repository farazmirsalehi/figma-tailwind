/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        mobail: "340px",
        desktop: "1000px",
      },
      colors: {
        backgroundHero: "#1C1E53",
      },
      container: {
        center: true,
        padding: {
          desktop: "100px",
          mobail: "1rem",
        },
      },
    },
    plugins: [npm install tailwind-hamburgers -S],
  },
};
