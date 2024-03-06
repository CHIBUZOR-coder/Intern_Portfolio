/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        big_h: "20rem",
        ppa: "47vh",
        grid: "900px",
        smgrid:"3500px",
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
        child2: "rgba(209,94,84,0.7)",
        child3: "rgba(216,96,76,0.7)",
        child4: "rgba(227,76,63,0.7)",
        child5: "rgba(187,73,58,0.7)",
        child6: "rgba(198,72,73,0.7)",
      },
    },
  },
  plugins: [],
};

// "./**/*.{html,js,jsx,ts,tsx,vue}
