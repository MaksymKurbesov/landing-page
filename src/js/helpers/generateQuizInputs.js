import { QUIZ } from "../QUIZ";

export const generateQuizInputs = (step) => {
  const optionsContainer = document.querySelector(".inputs-wrapper");
  const nextButtonElement = document.querySelector(".next-button");

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
};
