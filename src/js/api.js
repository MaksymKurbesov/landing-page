import axios from "axios";

export const sendUserAnswers = async (name, phone, userMessenger, answers) => {
  const userAnswersStr = Object.values(answers)
    .map((answer, index) => `${index + 1}. ${answer}\n`)
    .join("");

  await axios.post(
    "https://api.telegram.org/bot6564302403:AAG0OCnhKTBWedTFeoKAZnPolUu3t2MHvuw/sendMessage",
    {
      chat_id: "-1002137027465",
      parse_mode: "html",
      text: `Имя: ${name}\nТелефон: ${phone}\nМессенджер: ${userMessenger}\nОтветы:\n<code>${userAnswersStr}</code>`,
    }
  );
};

export const sendUserData = async (name, phone) => {
  await axios.post(
    "https://api.telegram.org/bot6564302403:AAG0OCnhKTBWedTFeoKAZnPolUu3t2MHvuw/sendMessage",
    {
      chat_id: "-1002137027465",
      parse_mode: "html",
      text: `Имя: ${name}\nТелефон: ${phone}`,
    }
  );
};
