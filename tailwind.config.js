/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hydraCastle: "url(img/hydra-castle.jpg)",
        predator: "url(img/predator-cover.png)",
        empire: "url(img/empire-cover.jpg)",
      },
      fontFamily: {
        jost: "'Jost', sans-serif;",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeIn 1s ease-in-out",
      },
      // that is actual animation
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
};