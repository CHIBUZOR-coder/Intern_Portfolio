/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        big_h: "20rem",
        ppa: "47vh",
        grid: "735px",
      },
      margin: {
        ppaa: "180px",
        force: "100px",
      },
      width: {
        fat: "450px",
        sfat: "400px",
        ssfat: "300px",
      },
      backgroundColor: {
        nav: " rgba(24, 22, 22, 0.9)  ",
      },

      colors: {
        greyishWhite: "#f5f5f5",
        prim: "#777777",
        child1: "rgba(211,125,118,0.7)", // You can adjust the hex value as needed
      },
    },
  },
  plugins: [],
};

// "./**/*.{html,js,jsx,ts,tsx,vue}
