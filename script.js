const menuBars = document.querySelector(".menu-bars");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

const navSlide = () => {
  // Toggle

  menuBars.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    menuBars.classList.toggle("toggle");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    // Menu Bars Animation
    //menuBars.classList.toggle("toggle");
  });
  menuBars.addEventListener("click", () => {
    menuBars.classList.toggle("untoggle");
  });
};

navSlide();
/* if (!nav.classList.contains("nav-active")) {
  menuBars.classList.toggle("untoggle");
} */
menuBars.classList.toggle("untoggle");
