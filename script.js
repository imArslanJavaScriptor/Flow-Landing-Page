// Custom Cursor Code
const crsr = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
});

// Responsive NavBar
let navList = document.getElementById("navList");
let navIcon = document.querySelector(".menu-icon i");

navList.style.maxHeight = "0px";

navIcon.addEventListener("click", () => {
  if (navList.style.maxHeight == "0px") {
    navList.style.maxHeight = "400px";
  } else {
    navList.style.maxHeight = "0px";
  }
});

// Button Ripple Effect
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});

// Faq
const faqsEl = document.querySelectorAll(".faq-container-1 .FAQ");
// const faqBodyEl = document.querySelectorAll(".faq-container-1 .faq-body");

faqsEl.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("height");
  });
});
