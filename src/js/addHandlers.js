import { hidePopup, showPopup } from "./PopupController";
import { resetQuiz } from "../form";
import { closeMenu } from "./hamburger";

const handleListenerOnConsultButtons = () => {
  const getConsultButtons = document.querySelectorAll(".consult-button");

  getConsultButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showPopup(".consultation-popup");
      closeMenu(true);
    });
  });
};

const handleListenerOnCloseButtons = () => {
  const closePopup = document.querySelector(
    ".consultation-popup__close-button"
  );

  closePopup.addEventListener("click", () => {
    hidePopup(".consultation-popup");
  });
};

const handleOnCloseButtonWithRedirect = () => {
  const closePopups = document.querySelectorAll(
    ".confirm-consultation-popup__close-button"
  );

  const closePopupsQuiz = document.querySelectorAll(
    ".confirm-consultation-popup__close-button-quiz"
  );

  closePopups.forEach((button) => {
    button.addEventListener("click", () => {
      hidePopup(".confirm-consultation-popup");
      window.location.href = "/";
    });
  });

  closePopupsQuiz.forEach((button) => {
    button.addEventListener("click", () => {
      hidePopup(".confirm-consultation-popup");
      // resetQuiz();
      hidePopup(".popup-quiz");
    });
  });
};

export const initHandlers = () => {
  handleListenerOnConsultButtons();
  handleListenerOnCloseButtons();
  handleOnCloseButtonWithRedirect();
};
