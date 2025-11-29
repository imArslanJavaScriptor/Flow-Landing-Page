// Custom Cursor Code
const crsr = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
});

// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

// Add click event for smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (window.innerWidth <= 720) {
        navList.style.maxHeight = "0px";
      }
    }
  });
});

// Highlight active nav item on scroll
function highlightActiveNav() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightActiveNav);
window.addEventListener('load', highlightActiveNav);

// Responsive NavBar
let navList = document.getElementById("navList");
let navIcon = document.querySelector(".menu-icon svg");

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

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
