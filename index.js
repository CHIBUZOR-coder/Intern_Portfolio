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
const hova = document.querySelectorAll(".nosee");
const see = document.querySelector(".see");
const gleekchild = document.querySelectorAll(".gleekchild");
console.log(gleekchild);
const carousel = document.querySelector(".carousel");
const carousel_item = document.querySelectorAll(".carousel-item");
const indicator = document.querySelectorAll(".indicator");

hbtn.addEventListener("click", () => {
  if (nav_home.classList.contains("hidden")) {
    nav_home.classList.remove("hidden");
    nav_home.classList.add("block");
  } else {
    nav_home.classList.add("hidden");
    nav_home.classList.remove("block");
  }
});

for (let i = 0; i < gleekchild.length; i++) {
  gleekchild[i].addEventListener("mouseover", () => {
    console.log("Mouseover event triggered");

    // if (hova[i].classList.contains("hova")) {
    //   console.log("true");
    //   console.log("Removing hova, adding see");
    //   hova[i].classList.remove("hova");
    //   hova[i].classList.add("see");
    // }
    const geekhover = gleekchild[i].querySelector(".hova");
    const geeksee = gleekchild[i].querySelector(".see");

    geekhover.style.display = "none";
    geeksee.style.display = "block";
  });

  gleekchild[i].addEventListener("mouseout", () => {
    console.log("Mouseout event triggered");
    // if (hova[i].classList.contains("see")) {
    //   console.log("Removing see, adding hova");
    //   hova[i].classList.remove("see");
    //   hova[i].classList.add("hova");
    // }

    const geekhover = gleekchild[i].querySelector(".hova");
    const geeksee = gleekchild[i].querySelector(".see");

    geekhover.style.display = "block";
    geeksee.style.display = "none";
  });
}
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




 document.addEventListener("DOMContentLoaded", function () {
   let slideIndex = 1;
   let touchStartX = 0;
   let touchEndX = 0;

   const slides = document.getElementById("carousel");
   const indicators = document.querySelectorAll(".indicator");

   slides.addEventListener("touchstart", (e) => {
     touchStartX = e.touches[0].clientX;
   });

   slides.addEventListener("touchend", (e) => {
     touchEndX = e.changedTouches[0].clientX;
     handleSwipe();
   });

   indicators.forEach((indicator, index) => {
     indicator.addEventListener("click", () => {
       currentSlide(index + 1);
     });
   });

   function handleSwipe() {
     const swipeThreshold = 50;

     if (touchStartX - touchEndX > swipeThreshold) {
       // Swipe left
       slideIndex++;
     } else if (touchEndX - touchStartX > swipeThreshold) {
       // Swipe right
       slideIndex--;
     }

     showSlides();
   }

   function showSlides() {
     if (slideIndex > slides.children.length) {
       slideIndex = 1;
     }

     if (slideIndex < 1) {
       slideIndex = slides.children.length;
     }

     slides.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;

     indicators.forEach((indicator, index) => {
       indicator.classList.remove("active");
       if (index === slideIndex - 1) {
         indicator.classList.add("active");
       }
     });
   }

   function currentSlide(index) {
     slideIndex = index;
     showSlides();
   }

   setInterval(() => {
     slideIndex++;
     showSlides();
   }, 3000);
 });