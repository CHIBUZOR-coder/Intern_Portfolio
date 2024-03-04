const box = document.querySelectorAll(".box");
const txt = document.querySelectorAll(".txt");
const nav_text = document.querySelectorAll(".nav_text");
const nav_home = document.querySelector(".nav_home");
console.log(nav_home)
const nav_about = document.querySelector(".nav_about");
const nav_portfolio = document.querySelector(".nav_portfolio");
const nav_service = document.querySelector(".nav_service");
const nav_skill = document.querySelector(".nav_skill");
const nav_timeline = document.querySelector(".nav_timeline");
const nav_contact = document.querySelector(".nav_contact");
const abtn = document.querySelector(".abtn");
const hbtn = document.querySelector(".hbtn");
const btn = document.querySelectorAll(".btn");
const pbtn = document.querySelector(".port");
const sbtn = document.querySelector(".sbtn");
const tbtn = document.querySelector(".tbtn");
const cbtn = document.querySelector(".cbtn");
const skcbtn = document.querySelector(".skcbtn");
const home_btn = document.querySelectorAll(".rsp");
const socials = document.querySelectorAll(".social");
const show = document.querySelectorAll(".show");
const show_child = document.querySelectorAll(".show_child");
const num = document.querySelectorAll(".num");
const lan_num = document.querySelectorAll(".lan_num");

hbtn.addEventListener("click", () => {
  if (nav_home.classList.contains("hidden")) {
    nav_home.classList.remove("hidden");
    nav_home.classList.add("block");
  } else {
    nav_home.classList.add("hidden");
    nav_home.classList.remove("block");
  }
});

// abtn.addEventListener("click", () => {
//   if (nav_about.classList.contains("hidden")) {
//     nav_about.classList.remove("hidden");
//     nav_about.classList.add("block");
//   } else {
//     nav_about.classList.add("hidden");
//     nav_about.classList.remove("block");
//   }
// });

// pbtn.addEventListener("click", () => {
//   if (nav_portfolio.classList.contains("hidden")) {
//     nav_portfolio.classList.remove("hidden");
//     nav_portfolio.classList.add("block");
//   } else {
//     nav_portfolio.classList.add("hidden");
//     nav_portfolio.classList.remove("block");
//   }
// });

// sbtn.addEventListener("click", () => {
//   if (nav_service.classList.contains("hidden")) {
//     nav_service.classList.remove("hidden");
//     nav_service.classList.add("block");
//   } else {
//     nav_service.classList.add("hidden");
//     nav_service.classList.remove("block");
//   }
// });

// skcbtn.addEventListener("click", () => {
//   if (nav_skill.classList.contains("hidden")) {
//     nav_skill.classList.remove("hidden");
//     nav_skill.classList.add("block");
//   } else {
//     nav_skill.classList.add("hidden");
//     nav_skill.classList.remove("block");
//   }
// });

// tbtn.addEventListener("click", () => {
//   if (nav_timeline.classList.contains("hidden")) {
//     nav_timeline.classList.remove("hidden");
//     nav_timeline.classList.add("block");
//   } else {
//     nav_timeline.classList.add("hidden");
//     nav_timeline.classList.remove("block");
//   }
// });

// cbtn.addEventListener("click", () => {
//   if (nav_contact.classList.contains("hidden")) {
//     nav_contact.classList.remove("hidden");
//     nav_contact.classList.add("block");
//   } else {
//     nav_contact.classList.add("hidden");
//     nav_contact.classList.remove("block");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;

  // Read primary and secondary colors from data attributes
  const primaryColor = body.getAttribute("data-primary-color") || "#101320";
  const secondaryColor = body.getAttribute("data-secondary-color") || "#27ae60";
  const activeColor = body.getAttribute("activeColor") || "grey";
  const textColor = body.getAttribute("color") || "blue";

  // Apply colors to the body's background
  body.style.background = "url(images/newbg.jpg) center center/ cover";
  body.style.color = textColor;


  for (let i = 0; i < lan_num.length; i++) {
    const currentValue = parseInt(lan_num[i].innerText); // Ensure the value is parsed as an integer
    console.log(currentValue);

    if (currentValue < 50) {
      lan_num[i].style.border = "3px solid red";
      num[i].style.color = "red";
    } else if (currentValue >= 50 && currentValue <= 60) {
      lan_num[i].style.border = "3px solid yellow";
      num[i].style.color = "yellow";
    } else {
      lan_num[i].style.border = `3px solid ${activeColor}`;
      num[i].style.color = activeColor;
    }
  }

  // for (let i = 0; i < box.length; i++) {
  //   box[i].style.backgroundColor = secondaryColor;
  // }

  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = primaryColor;
  }

  for (let i = 0; i < socials.length; i++) {
    socials[i].style.backgroundColor = textColor;
  }
  for (let i = 0; i < nav_text.length; i++) {
    nav_text[i].style.color = textColor;

    // Add event listeners for nav_text elements
    nav_text[i].addEventListener("mouseover", function () {
      nav_text[i].style.color = activeColor;
    });

    nav_text[i].addEventListener("mouseout", function () {
      nav_text[i].style.color = textColor;
    });
  }

  // for (let i = 0; i < txt.length; i++) {
  //   txt[i].style.color = textColor;

  //   // Add event listeners for txt elements
  //   txt[i].addEventListener("mouseover", function () {
  //     txt[i].style.color = activeColor;
  //   });

  //   txt[i].addEventListener("mouseout", function () {
  //     txt[i].style.color = textColor;
  //   });
  // }
});
