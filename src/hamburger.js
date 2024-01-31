const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bg = document.querySelector(".menu-background");

const links = document.querySelectorAll(".mobile-menu nav ul li");
const startInvestButton = document.querySelector(".start-invest-button");

let menuIsOpen = false;

export const closeMenu = () => {
  mobileMenu.className = "mobile-menu";
  hamburger.className = "hamburger";
  bg.className = "menu-background";
  document.body.style.overflow = "visible";

  if (startInvestButton) {
    startInvestButton.style.zIndex = "1";
  }
};

hamburger.addEventListener("click", () => {
  if (menuIsOpen) {
    closeMenu();
  } else {
    mobileMenu.className = "mobile-menu mobile-menu-open";
    hamburger.className = "hamburger hamburger-open";
    bg.className = "menu-background menu-background-active";
    document.body.style.overflow = "hidden";

    if (startInvestButton) {
      startInvestButton.style.zIndex = "-1";
    }
  }
  menuIsOpen = !menuIsOpen;
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.className = "mobile-menu";
    hamburger.className = "hamburger";
    bg.className = "menu-background";
    document.body.style.overflow = "visible";
    menuIsOpen = false;
  });
});
