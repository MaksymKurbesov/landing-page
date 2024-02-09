import { closeMenu } from "./hamburger";

const popupBg = document.querySelector(".popup__bg"); // Фон попап окна
const popupController = document.querySelector(".popupController"); // Само окно

const confirmPopup = document.querySelector(".popupController-confirm"); // Само окно
const confirmPopupBg = document.querySelector(".popupController-confirm__bg"); // Само окно

const successPopupBg = document.querySelector(".success-popupController"); // Само окно
const popupFormWrapper = document.querySelector(
  ".popupController-form-wrapper"
); // Само окно

const openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
const closePopupButtons = document.querySelectorAll(".close-popup");
const closeSuccessPopup = document.querySelector(
  ".close-success-popupController"
);
const closeConfirmPopup = document.querySelector(
  ".close-confirm-popupController"
);

const quizPopup = document.querySelector(".popupController-quiz");
const quizPopupBg = document.querySelector(".popupController-quiz__bg");
const closeQuizButton = document.querySelector(
  ".close-quiz-confirm-popupController"
);
//
// const CLOSE_BUTTONS = [closeSuccessPopup, closeConfirmPopup];
//
// if (closeQuizButton) {
//   closeQuizButton.addEventListener("click", () => {
//     if (quizPopup && quizPopupBg) {
//       quizPopup.classList.remove("active"); // И с окна
//       quizPopupBg.classList.remove("active");
//       window.location.href = "./";
//
//       document.body.style.overflow = "visible";
//       document.body.style.marginRight = "0px";
//     }
//   });
// }

// openPopupButtons.forEach((button) => {
//   // Перебираем все кнопки
//   button.addEventListener("click", (e) => {
//     // Для каждой вешаем обработчик событий на клик
//     e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//     closeMenu();
//     popupBg.classList.add("active"); // Добавляем класс 'active' для фона
//     popupController.classList.add("active"); // И для самого окна
//     document.body.style.overflow = "hidden";
//     document.body.style.marginRight = "17px";
//   });
// });
//
// CLOSE_BUTTONS.forEach((button) => {
//   if (!button) return;
//
//   button.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.scrollTo(0, 0);
//
//     console.log("closed");
//
//     // Вешаем обработчик на крестик
//     popupBg.classList.remove("active"); // Убираем активный класс с фона
//     popupController.classList.remove("active"); // И с окна
//
//     if (confirmPopup && confirmPopupBg) {
//       confirmPopup.classList.remove("active"); // И с окна
//       confirmPopupBg.classList.remove("active"); // И с окна
//     }
//
//     successPopupBg.classList.remove("active"); // И с окна
//     popupFormWrapper.classList.remove("active"); // И с окна
//
//     document.body.style.overflow = "visible";
//     document.body.style.marginRight = "0";
//
//     closeMenu(true);
//   });
// });
//
// closePopupButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     popupBg.classList.remove("active"); // Убираем активный класс с фона
//     popupController.classList.remove("active");
//
//     document.body.style.overflow = "visible";
//     document.body.style.marginRight = "0";
//     closeMenu(true);
//   });
// });

// document.addEventListener("click", (e) => {
//   // Вешаем обработчик на весь документ
//   if (e.target === popupBg) {
//     // Если цель клика - фот, то:
//     popupBg.classList.remove("active"); // Убираем активный класс с фона
//     popupController.classList.remove("active"); // И с окна
//     document.body.style.overflow = "visible";
//     document.body.style.marginRight = "0";
//   }
// });

export const showPopup = (selector) => {
  const popupBg = document.querySelector(".popup__bg");
  const popupContent = document.querySelector(selector);

  popupBg.classList.add("active");
  popupContent.classList.add("active");

  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "17px";
};

export const hidePopup = (selector) => {
  const popupBg = document.querySelector(".popup__bg");
  const popupContent = document.querySelector(selector);

  popupBg.classList.remove("active");
  popupContent.classList.remove("active");

  document.body.style.overflow = "visible";
  document.body.style.marginRight = "0px";
};

// showPopup(".confirm-consultation-popup");
// showPopup(".consultation-popup");
