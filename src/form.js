import "./index.css";
import "./hamburger";
import "./popup";
import "./pageTransition";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import { QUIZ } from "./QUIZ";
import axios from "axios";
import "./contactForm";

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
  const inputPhoneWrapper = document.createElement("div");

  inputPhone.type = "text";
  inputName.type = "text";

  inputPhone.id = "phone";
  inputName.id = "name";
  inputPhoneWrapper.className = "input-phone-wrapper";

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
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (currentQuestion < QUIZ.length) {
    if (selectedOption) {
      user_answers[currentQuestion] = selectedOption.value;
    }

    currentQuestion++;

    displayStep(currentQuestion);
  } else if (currentQuestion === QUIZ.length) {
    const userPhone = document.getElementById("phone").value;
    const userName = document.getElementById("name").value;

    if (!userPhone || !userName) {
      alert("Пожалуйста, введите вашу контактную информацию.");
      return;
    }

    const successPopupQuiz = document.querySelector(".popup-quiz");
    const successPopupQuizBg = document.querySelector(".popup-quiz__bg");

    successPopupQuiz.classList.add("active");
    successPopupQuizBg.classList.add("active");

    document.body.style.overflow = "hidden";
    document.body.style.marginRight = "17px";

    // fbq("track", "Lead");

    sendUserAnswers(userName, userPhone, user_answers);
  }
});

const sendUserAnswers = async (name, phone, answers) => {
  const userAnswersStr = Object.values(answers)
    .map((answer, index) => `${index + 1}. ${answer}\n`)
    .join("");

  console.log(userAnswersStr, "userAnswersStr");

  await axios.post(
    "https://api.telegram.org/bot6564302403:AAG0OCnhKTBWedTFeoKAZnPolUu3t2MHvuw/sendMessage",
    {
      chat_id: "-1002137027465",
      parse_mode: "html",
      text: `Имя: ${name}\nТелефон: ${phone}\nОтветы:\n<code>${userAnswersStr}</code>`,
    }
  );
};
