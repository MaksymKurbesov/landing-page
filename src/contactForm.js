import axios from "axios";

const submitButton = document.querySelector(".send-request-button");
const nameInput = document.querySelector(".name-input");
const phoneInput = document.querySelector(".phone-input");

const popupNameInput = document.querySelector(".popup-name");
const popupPhoneInput = document.querySelector(".popup-phone");
const submitPopupButton = document.querySelector(".submit-popup");

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

  submitPopupButton.innerHTML = "Отправлено!";
  submitPopupButton.style.backgroundImage =
    "linear-gradient(90deg, #f2f047, #1ed94f)";
  submitPopupButton.style.color = "white";

  setTimeout(() => {
    submitPopupButton.innerHTML = "Отправить";
    submitPopupButton.style.background = "white";
    submitPopupButton.style.color = "#aa34f8";
  }, 4000);
});

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;
  if (name === "" || phone === "") return;

  await sendRequest(name, phone);

  nameInput.value = "";
  phoneInput.value = "";
  submitButton.innerHTML = "Отправлено!";
  submitButton.style.backgroundImage =
    "linear-gradient(90deg, #f2f047, #1ed94f)";
  submitButton.style.color = "white";
  submitButton.style.border = "none";

  setTimeout(() => {
    submitButton.innerHTML = "Отправить заявку";
    submitButton.style.background = "white";
    submitButton.style.color = "#1f395c";
  }, 4000);
});
