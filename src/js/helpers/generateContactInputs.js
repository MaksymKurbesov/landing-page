const MESSANGERS = ["Выберите мессенджер", "WhatsApp", "Viber", "Telegram"];

export const generateContactInputs = () => {
  const optionsContainer = document.querySelector(".inputs-wrapper");

  const inputPhone = document.createElement("input");
  const inputName = document.createElement("input");
  const selectMessenger = document.createElement("select");
  const inputPhoneWrapper = document.createElement("div");

  inputPhone.type = "text";
  inputName.type = "text";

  inputPhone.id = "phone";
  inputName.id = "name";
  selectMessenger.id = "messenger";
  inputPhoneWrapper.className = "input-phone-wrapper";

  MESSANGERS.forEach((messenger, index) => {
    const option = document.createElement("option");

    if (index === 0) {
      selectMessenger.onchange = () => {
        option.disabled = true;
      };
    }

    option.value = messenger;
    // option.value = "Выберите мессенджер";
    option.text = messenger;
    selectMessenger.appendChild(option);
  });

  inputPhone.style.width = "100%";
  inputPhone.oninput = (e) =>
    (e.target.value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1"));
  inputPhone.style.paddingLeft = "35px";
  // inputPhone.value = "+";
  inputPhone.placeholder = "Ваш номер телефона";
  inputName.placeholder = "Ваше имя";

  inputPhoneWrapper.appendChild(inputPhone);

  optionsContainer.appendChild(inputName);
  optionsContainer.appendChild(inputPhoneWrapper);
  optionsContainer.appendChild(selectMessenger);
};
