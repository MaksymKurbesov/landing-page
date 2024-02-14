import "./index.css";
import "./js/hamburger";
import "./js/animations";
import "./js/PopupController";
import "./js/contactForm";
import "./js/pageTransition";
import "./js/GoToUpPage";
import "./js/TypedText";
import "./form";
import { initHandlers } from "./js/addHandlers";

if (module.hot) module.hot.accept();

// document.addEventListener("load", () => {
//   document.querySelector(".preloader").style.display = "none";
//   document.querySelector(".index-content").style.display = "block";
//   console.log("loaded");
// });

const linkEls = document.head.querySelectorAll("style");

let cssLoaded = false;

let arr = [];

linkEls.forEach((style) => {
  style.addEventListener("load", async () => {
    arr.push(Promise.resolve(true));
  });
});

Promise.all(arr).then(() => {
  console.log("css loaded");
  document.querySelector(".preloader").style.display = "none";
  document.querySelector(".index-content").style.display = "block";
});

//
// initHandlers();
