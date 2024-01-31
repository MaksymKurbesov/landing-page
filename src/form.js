import "./index.css";
import "./hamburger";
import "./popup";
import "./pageTransition";

const questionElement = document.querySelector(".question");
const backButtonElement = document.querySelector(".back-button");
const nextButtonElement = document.querySelector(".next-button");
const questionListItems = document.querySelectorAll(".questions li");
const errorMessage = document.querySelector(".error-message");

const mobileQuestionCount = document.querySelector(".mobile-questions span");

let currentQuestion = 0;

const user_answers = {};

const QUIZ = [
  {
    question: "Каковы ваши инвестиционные цели?",
    answers: [
      "Финансовая стабильность, пассивный доход, минимизация рисков.",
      "Фокус на рост через акции, недвижимость и управляемый риск.",
      "Прирост капитала через экологичные проекты и инновации.",
      "Стабильный доход от дивидендов и надежные инвестиции.",
    ],
  },
  {
    question: "Какой у вас опыт с инвестициями?",
    answers: [
      "Опытный: акции, облигации, недвижимость, крипто.",
      "Новичок: активное обучение.",
      "Средний уровень: разносторонние инвестиции.",
      "Специализация: секторные глубокие знания.",
    ],
  },
  {
    question:
      "Был ли у вас опыт сотрудничества с компаниями на партнерской основе?",
    answers: [
      "Профи в партнерстве: стратегические альянсы.",
      "Опыт в сотрудничестве: координация проектов.",
      "Начальный опыт: успешное взаимодействие.",
      "Новичок: открыт к партнерству.",
    ],
  },
  {
    question: "Какую сумму вы планируете инвестировать?",
    answers: [
      "Целевые инвестиции: рассчитанный риск и анализ.",
      "Гибкий средний вклад: корректируемый под обстоятельства.",
      "Старт с минимума: потенциал для наращивания.",
      "Значительные инвестиции: основанные на стабильности и целях.",
    ],
  },
  {
    question: "Как часто вы планируете отслеживать свои инвестиции?",
    answers: [
      "Ежедневный мониторинг для оперативного реагирования на рынок.",
      "Еженедельная проверка для сбалансированного управления.",
      "Ежемесячное отслеживание для стратегического фокуса.",
      "Квартальный обзор для долгосрочной стратегии.",
    ],
  },
  {
    question: "Как часто планируете выводить дивиденды?",
    answers: [
      "Реинвестирование: ускорение капитального роста.",
      "Еженедельный вывод: дополнительный доход.",
      "Месячные дивиденды: баланс роста и дохода.",
      "Гибкий вывод: адаптация к финансам и рынку.",
    ],
  },
  {
    question: "У вас был опыт пользования криптокошельками?",
    answers: [
      "Активный пользователь: криптокошельки и безопасность.",
      "Умеренный опыт: осторожное использование.",
      "Основы знакомы: ограниченный практический опыт.",
      "Новичок: открыт к обучению и использованию.",
    ],
  },
  {
    question: "В чем вы больше всего экспертны?",
    answers: [
      "Финансовый эксперт: анализ и управление портфелями.",
      "Технологический специалист: программирование и инновации.",
      "Стратегическое управление: планирование и проекты.",
      "Маркетинговый эксперт: стратегии и брендинг. ",
    ],
  },
];

const contactInputs = () => {
  const optionsContainer = document.querySelector(".inputs-wrapper");
  const inputPhone = document.createElement("input");
  const inputName = document.createElement("input");

  inputPhone.type = "text";
  inputName.type = "text";

  inputPhone.id = "phone";
  inputName.id = "name";

  inputPhone.placeholder = "Ваш номер телефона";
  inputName.placeholder = "Ваше имя";
  optionsContainer.appendChild(inputName);
  optionsContainer.appendChild(inputPhone);
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

  mobileQuestionCount.innerHTML = step + 1;

  if (user_answers[step - 1] !== undefined) {
    questionListItems[step - 1].className = "success-question";
  }

  questionListItems[currentQuestion].className = "active-question";
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
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );

    if (!selectedOption) {
      errorMessage.style.opacity = "1";
      return;
    } else {
      user_answers[currentQuestion] = selectedOption.value;
      errorMessage.style.opacity = "0";
    }
  }

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
