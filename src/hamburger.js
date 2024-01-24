const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

let menuIsOpen = false;

hamburger.addEventListener("click", () => {
  if (menuIsOpen) {
    mobileMenu.className = "mobile-menu";
    hamburger.className = "hamburger";
  } else {
    mobileMenu.className = "mobile-menu mobile-menu-open";
    hamburger.className = "hamburger hamburger-open";
  }

  menuIsOpen = !menuIsOpen;
});
