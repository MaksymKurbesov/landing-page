import axios from "axios";

const submitButton = document.querySelector(".send-request-button");
const nameInput = document.querySelector(".name-input");
const phoneInput = document.querySelector(".phone-input");

const popupNameInput = document.querySelector(".popup-name");
const popupPhoneInput = document.querySelector(".popup-phone");
const submitPopupButton = document.querySelector(".submit-popup");

const successPopup = document.querySelector(".success-popup");
const popupFormWrapper = document.querySelector(".popup-form-wrapper");

const confirmSuccessPopupBg = document.querySelector(".popup-confirm__bg");
const confirmSuccessPopup = document.querySelector(".popup-confirm");

const sendRequest = async (name, phone) => {
  await axios.post(
    "https://api.telegram.org/bot6564302403:AAG0OCnhKTBWedTFeoKAZnPolUu3t2MHvuw/sendMessage",
    {
      chat_id: "-1002137027465",
      parse_mode: "html",
      text: `Имя: ${name}\nТелефон: ${phone}`,
    }
  );
};

submitPopupButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = popupNameInput.value;
  const phone = popupPhoneInput.value;
  if (name === "" || phone === "") return;

  await sendRequest(name, phone);

  popupNameInput.value = "";
  popupPhoneInput.value = "";

  successPopup.classList.add("active");
  popupFormWrapper.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "17px";
});

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;
  if (name === "" || phone === "") return;

  await sendRequest(name, phone);
  confirmSuccessPopupBg.classList.add("active");
  confirmSuccessPopup.classList.add("active");
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "17px";

  nameInput.value = "";
  phoneInput.value = "";
});
