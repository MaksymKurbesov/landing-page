import "./index.css";
import "./hamburger";
import Typed from "typed.js";
import "./animations";
import "./popup";
import "./contactForm";
import "./pageTransition";

if (module.hot) module.hot.accept();

const upPageButton = document.querySelector(".up-page-button");

setTimeout(() => {
  new Typed("#typed-text", {
    strings: [
      "Инвестиции в недвижимость — ваша стабильность завтра. ^1000",
      "Инвестиции в недвижимость — открывают двери к благосостоянию. ^1000",
      "Инвестиции в недвижимость — надёжный курс к богатству. ^1000",
      "Инвестиции в недвижимость — ваш шаг к финансовому доминированию. ^1000",
      "Инвестиции в недвижимость — фундамент вашего процветания. ^1000",
      "Инвестиции в недвижимость — превращают мечты в реальность. ^1000",
    ],
    typeSpeed: 50,
    loop: true,
  });
}, 1000);

upPageButton.addEventListener("click", () => {
  window.scroll(0, 0);
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 700) {
    upPageButton.className = "up-page-button up-page-button-show";
  } else {
    upPageButton.className = "up-page-button";
  }
});
