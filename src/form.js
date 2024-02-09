import "./index.css";
import "./js/hamburger";
import "./js/PopupController";
import "./js/pageTransition";
import { QUIZ } from "./js/QUIZ";
import "./js/contactForm";
import { generateContactInputs } from "./js/helpers/generateContactInputs";
import { generateQuizInputs } from "./js/helpers/generateQuizInputs";
import { sendUserAnswers } from "./js/api";
import { showPopup } from "./js/PopupController";
import { initHandlers } from "./js/addHandlers";

const questionElement = document.querySelector(".question");
const backButtonElement = document.querySelector(".back-button");
const nextButtonElement = document.querySelector(".next-button");
const questionListItems = document.querySelectorAll(".questions li");
const mobileQuestionCount = document.querySelector(".mobile-questions span");

initHandlers();

let currentQuestion = 0;

const user_answers = {};

const displayStep = (step) => {
  const optionsContainer = document.querySelector(".inputs-wrapper");
  optionsContainer.innerHTML = "";

  if (step < QUIZ.length) {
    questionElement.innerHTML = QUIZ[step].question;

    nextButtonElement.innerHTML = "Вперёд";

    generateQuizInputs(step);

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

    generateContactInputs();
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
    const userMessenger = document.getElementById("messenger").value;

    if (!userPhone || !userName) {
      alert("Пожалуйста, введите вашу контактную информацию.");
      return;
    }

    showPopup(".popup-quiz");

    // fbq("track", "Lead");

    sendUserAnswers(userName, userPhone, userMessenger, user_answers);
  }
});
