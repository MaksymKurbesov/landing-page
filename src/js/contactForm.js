import { sendUserData } from "./api";
import { hidePopup, showPopup } from "./PopupController";

const sendUserInfoButton = document.querySelector(".send-userinfo-button");
const sendUserInfoButtonFromPopup = document.querySelector(
  ".consultation-popup__submit-button"
);

const handleSubmit = async (name, phone) => {
  if (!name || !phone) return;

  await sendUserData(phone, phone);
  showPopup(".confirm-consultation-popup");
};

sendUserInfoButtonFromPopup.addEventListener("click", async (e) => {
  e.preventDefault();

  const nameInput = document.querySelector(".consultation-popup__name-input");
  const phoneInput = document.querySelector(".consultation-popup__phone-input");
  const username = nameInput.value;
  const userPhone = phoneInput.value;

  if (!username || !userPhone) return;

  hidePopup(".consultation-popup");
  await handleSubmit(username, userPhone);
});

if (sendUserInfoButton) {
  sendUserInfoButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const nameInput = document.querySelector(".name-input");
    const phoneInput = document.querySelector(".phone-input");
    const username = nameInput.value;
    const userPhone = phoneInput.value;

    if (!username || !userPhone) return;

    await handleSubmit(username, userPhone);
  });
}
