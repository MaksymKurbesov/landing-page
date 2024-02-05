import "./index.css";
import "./hamburger";
import "./popup";
import "./pageTransition";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { QUIZ } from "./QUIZ";

const questionElement = document.querySelector(".question");
const backButtonElement = document.querySelector(".back-button");
const nextButtonElement = document.querySelector(".next-button");
const questionListItems = document.querySelectorAll(".questions li");
const optionsContainer = document.querySelector(".inputs-wrapper");
const mobileQuestionCount = document.querySelector(".mobile-questions span");

let currentQuestion = 0;

const user_answers = {};

const contactInputs = () => {
  const inputPhone = document.createElement("input");
  const inputName = document.createElement("input");

  inputPhone.type = "text";
  inputName.type = "text";

  inputPhone.id = "phone";
  inputName.id = "name";

  inputPhone.style.width = "100%";
  inputPhone.style.paddingLeft = "45px";
  // inputPhone.value = "+";
  inputPhone.placeholder = "Ваш номер телефона";
  inputName.placeholder = "Ваше имя";
  optionsContainer.appendChild(inputName);
  optionsContainer.appendChild(inputPhone);

  intlTelInput(inputPhone, {
    showSelectedDialCode: true,
  });
};

const displayStep = (step) => {
  const optionsContainer = document.querySelector(".inputs-wrapper");
  optionsContainer.innerHTML = "";

  if (step < QUIZ.length) {
    questionElement.innerHTML = QUIZ[step].question;

    nextButtonElement.innerHTML = "Вперёд";

    QUIZ[step].answers.forEach((answer) => {
      const divContainer = document.createElement("div");

      const label = document.createElement("label");
      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = "answer";
      radioButton.value = answer;
      divContainer.className = "input-wrapper";

      radioButton.addEventListener("change", (e) => {
        nextButtonElement.disabled = !e.target.value;
      });

      label.appendChild(radioButton);
      label.appendChild(document.createTextNode(answer));
      divContainer.appendChild(label);
      optionsContainer.appendChild(divContainer);
    });

    if (user_answers[step] !== undefined) {
      document.querySelector(
        `input[name="answer"][value="${user_answers[step]}"]`
      ).checked = true;
      nextButtonElement.disabled = false;
    } else {
      nextButtonElement.disabled = true;
    }
  } else {
    optionsContainer.style.gridTemplateRows = "initial";
    nextButtonElement.innerHTML = "Отправить!";
    document.querySelector(".question").innerHTML =
      "Укажите в форме, пожалуйста, свои контактные данные";

    contactInputs();
  }

  if (step !== 0) {
    backButtonElement.className = "back-button button back-button-show";
  } else {
    backButtonElement.className = "back-button back-button-hide";
  }

  questionListItems[currentQuestion].className = "active-question";

  mobileQuestionCount.innerHTML = step + 1;

  if (user_answers[step - 1] !== undefined) {
    questionListItems[step - 1].className = "success-question";
  }
};

displayStep(currentQuestion);

backButtonElement.addEventListener("click", () => {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    user_answers[currentQuestion] = selectedOption.value;
  }

  if (currentQuestion > 0) {
    questionListItems[currentQuestion].className = "";
    currentQuestion--;
    displayStep(currentQuestion);
    nextButtonElement.disabled = false;
  }
});

nextButtonElement.addEventListener("click", () => {
  if (currentQuestion < QUIZ.length) {
    currentQuestion++;

    displayStep(currentQuestion);
  } else if (currentQuestion === QUIZ.length) {
    const contactInfo = document.getElementById("phone").value;
    if (!contactInfo) {
      alert("Пожалуйста, введите вашу контактную информацию.");
      return;
    }

    user_answers["contactInfo"] = contactInfo;
    // fbq("track", "Lead");
    console.log("Опрос завершен");
    console.log(user_answers);
  }
});
