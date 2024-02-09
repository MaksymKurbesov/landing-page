import { hidePopup, showPopup } from "./PopupController";

const handleListenerOnConsultButtons = () => {
  const getConsultButtons = document.querySelectorAll(".consult-button");

  getConsultButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showPopup(".consultation-popup");
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

  closePopups.forEach((button) => {
    button.addEventListener("click", () => {
      hidePopup(".confirm-consultation-popup");
      window.location.href = "/";
    });
  });
};

export const initHandlers = () => {
  handleListenerOnConsultButtons();
  handleListenerOnCloseButtons();
  handleOnCloseButtonWithRedirect();
};
