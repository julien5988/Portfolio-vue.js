/** @type {import('tailwindcss').Config}*/
const plugin = require("tailwindcss/plugin");

const MyPlugin = plugin(function({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective: "1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
    },
  });
});

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [
    MyPlugin
  ]
};
