/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mob: { max: "920px" },
      revmob: "920px",
      smlap: { max: "1200px" },
      revsmlap: "1200px",
      mdlap: { max: "1350px" },
    },
    extend: {
      fontFamily: {
        Agrandir: ["Agrandir"],
        Mulish: ["Mulish"],
      },
    },
  },
  plugins: [],
};
