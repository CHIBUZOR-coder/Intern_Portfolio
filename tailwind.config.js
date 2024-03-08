/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        big_h: "20rem",
        ppa: "47vh",
        grid: "900px",
        grid2: "800px",
        grid3: "500px",
        smgrid: "3500px",
        smgrid2: "2200px",
        smgrid3: "1450px",
        contactl: "500px",
      },
      margin: {
        ppaa: "180px",
        force: "100px",
      },
      width: {
        fat: "450px",
        fat2: "500px",
        fattext: "550px",
        sfat: "280px",
        smfat: "300px",

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
        serve1: "rgb(226,165,153)",
        serve2: "rgb(113,95,105)",
        serve3: "rgb(228,84,71)",
        serve4: "rgb(144,172,209)",
        serve5: "rgb(226,165,153)",
        serve6: "rgb(113,95,105)",
        geek: "rgba(237,240,250,0.9)",
        geekhover: "rgba(144,172,209,2)",
        contact: "rgb(228,84,71)",
        serve: "rgba(51, 51, 51,0.8);",
      },
    },
  },
  plugins: [],
};

// "./**/*.{html,js,jsx,ts,tsx,vue}
