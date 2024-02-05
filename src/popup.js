import { closeMenu } from "./hamburger";

const popupBg = document.querySelector(".popup__bg"); // Фон попап окна
const popup = document.querySelector(".popup"); // Само окно

const confirmPopup = document.querySelector(".popup-confirm"); // Само окно
const confirmPopupBg = document.querySelector(".popup-confirm__bg"); // Само окно

const successPopupBg = document.querySelector(".success-popup"); // Само окно
const popupFormWrapper = document.querySelector(".popup-form-wrapper"); // Само окно

const openPopupButtons = document.querySelectorAll(".open-popup"); // Кнопки для показа окна
const closePopupButton = document.querySelector(".close-popup");
const closeSuccessPopup = document.querySelector(".close-success-popup");
const closeConfirmPopup = document.querySelector(".close-confirm-popup");

const CLOSE_BUTTONS = [closeSuccessPopup, closeConfirmPopup];

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    closeMenu();
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "17px";
  });
});

CLOSE_BUTTONS.forEach((button) => {
  if (!button) return;

  button.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    // Вешаем обработчик на крестик
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна

    confirmPopup.classList.remove("active"); // И с окна
    confirmPopupBg.classList.remove("active"); // И с окна

    successPopupBg.classList.remove("active"); // И с окна
    popupFormWrapper.classList.remove("active"); // И с окна

    document.body.style.overflow = "visible";
    document.body.style.marginRight = "0";
  });
});

closePopupButton.addEventListener("click", () => {
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active");

  document.body.style.overflow = "visible";
  document.body.style.marginRight = "0";
});

document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
    document.body.style.overflow = "visible";
    document.body.style.marginRight = "0";
  }
});
