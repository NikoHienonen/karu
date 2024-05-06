/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        twoToOne: "2fr 1fr",
      },
      backgroundImage: {
        hydraCastle: "url(img/hydra-castle.jpg)",
        predator: "url(img/predator.png)",
        empire: "url(img/empire.jpg)",
        karuBand: "url(img/karu-2024.jpg)",
        rockTexture:
          "linear-gradient(to right bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(img/rock-texture.jpg)",
        winter:
          "linear-gradient(to right bottom, rgba(0,0,0,1), rgba(256,256,256, 0.5)), url(img/winter.jpg)",
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
