const box = document.querySelectorAll(".box");
const txt = document.querySelectorAll(".txt");
const nav_text = document.querySelectorAll(".nav_text");
const nav_home = document.querySelector(".nav_home");
console.log(nav_home);
const nav_about = document.querySelector(".nav_about");

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
const geek = document.querySelectorAll(".geek");

hbtn.addEventListener("click", () => {
  if (nav_home.classList.contains("hidden")) {
    nav_home.classList.remove("hidden");
    nav_home.classList.add("block");
  } else {
    nav_home.classList.add("hidden");
    nav_home.classList.remove("block");
  }
});

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

  for (let i = 0; i < geek.length; i++) {
    geek[i].addEventListener("mouseover", () => {
      // Find the .compny elements inside the currently hovered .geek
      const compnyElements = geek[i].querySelectorAll(".compny");
      const companyElements = geek[i].querySelectorAll(".company");
      const gchild = geek[i].querySelectorAll(".gchild");

      for (let j = 0; j < compnyElements.length; j++) {
        compnyElements[j].style.color = "white";
        companyElements[j].style.color = "white";
        gchild[j].style.color = "white";
      }
    });

    geek[i].addEventListener("mouseout", () => {
      // Find the .compny elements inside the currently hovered .geek
      const compnyElements = geek[i].querySelectorAll(".compny");
      const companyElements = geek[i].querySelectorAll(".company");
      const gchild = geek[i].querySelectorAll(".gchild");

      for (let k = 0; k < compnyElements.length; k++) {
        compnyElements[k].style.color = textColor;
        companyElements[k].style.color = textColor;
        gchild[k].style.color = textColor;
      }
    });
  }

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
});
