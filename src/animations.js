import { SplitText } from "./splitText";
import { gsap } from "gsap";

const animateMain = () => {
  const quotes = document.querySelectorAll(".quote");
  const startInvestButton = document.querySelector(".start-invest-button");
  const header = document.querySelector("header");

  quotes.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
    }

    quote.split = new SplitText(quote, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      opacity: 0,
      duration: 0.6,
      ease: "circ.out",
      y: 80,
      stagger: 0.03,
    });
  });

  gsap.from(header, {
    duration: 0.5,
    y: -80,
  });

  gsap.from(startInvestButton, {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: 40,
  });
};
const animateChangeLife = () => {
  const changeLifeTitles = document.querySelectorAll(".section-title");
  const changeLifeSubtitle = document.querySelectorAll(".change-life-subtitle");
  const changeLifeItemsContainer =
    document.querySelectorAll(".change-life-list");
  const changeLifeItems = document.querySelectorAll(".change-life-list li");
  const changeLifeImg = document.querySelectorAll(".change-life-list li img");
  const changeLifeTitle = document.querySelectorAll(".change-life-list li h3");
  const changeLifeDescription = document.querySelectorAll(
    ".change-life-list li p"
  );

  changeLifeTitles.forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "bottom 80%",
        end: "+=200",
      },
      y: 40,
      duration: 1,
      opacity: 0,
    });
  });

  changeLifeImg.forEach((img, i) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: changeLifeItemsContainer,
        start: "-200 center",
      },
      y: 40,
      duration: 1,
      opacity: 0,
      delay: 0.05 * i,
    });
  });

  changeLifeTitle.forEach((title, i) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: changeLifeItemsContainer,
        start: "-200 center",
      },
      y: -40,
      duration: 1,
      opacity: 0,
      delay: 0.05 * i,
    });
  });

  changeLifeDescription.forEach((descr, i) => {
    gsap.from(descr, {
      scrollTrigger: {
        trigger: changeLifeItemsContainer,
        start: "-200 center",
      },
      y: -40,
      duration: 1,
      opacity: 0,
      delay: 0.05 * i,
    });
  });

  changeLifeItems.forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: changeLifeItemsContainer,
        start: "-200 center",
      },
      delay: 0.1 * index,
      y: 40,
      duration: 1,
      opacity: 0,
    });
  });

  gsap.from(changeLifeSubtitle, {
    scrollTrigger: {
      trigger: changeLifeSubtitle,
      start: "bottom 80%",
      end: "+=200",
    },
    y: -40,
    duration: 1,
    opacity: 0,
    delay: 0.5,
  });
};
const animatePlans = () => {
  const plansContainer = document.querySelector(".features-list");
  const plansList = document.querySelectorAll(".features-list li");

  plansList.forEach((plan, index) => {
    gsap.from(plan, {
      scrollTrigger: {
        trigger: plansContainer,
        start: "-200 center",
      },
      delay: 0.3 * index,
      y: 40,
      duration: 1,
      opacity: 0,
    });
  });
};
const animateWorkStages = () => {
  const workStages = document.querySelectorAll(".work-stages-list li");

  workStages.forEach((stage, index) => {
    gsap.from(stage, {
      scrollTrigger: {
        trigger: stage,
        start: "-200 center",
      },
      delay: 0.3 * index,
      y: -40,
      duration: 1,
      opacity: 0,
    });
  });
};
const animateConditionsList = () => {
  const conditionList = document.querySelectorAll(".conditions-list li");
  conditionList.forEach((condition, index) => {
    gsap.from(condition, {
      scrollTrigger: {
        trigger: condition,
        start: "-200 center",
      },
      delay: 0.3 * index,
      y: 50,
      duration: 1,
      opacity: 0,
    });
  });
};
const animateEarlyBooking = () => {
  const bookingWrapper = document.querySelector(".booking-wrapper");

  gsap.from(bookingWrapper, {
    scrollTrigger: {
      trigger: bookingWrapper,
      start: "-200 center",
    },
    duration: 1,
    opacity: 0,
  });
};
const animateStartWithUs = () => {
  const startInvestWithUs = document.querySelector(".start-invest-form");

  gsap.from(startInvestWithUs, {
    scrollTrigger: {
      trigger: startInvestWithUs,
      start: "-200 center",
    },
    duration: 1,
    opacity: 0,
  });
};
const animateFooter = () => {
  const footer = document.querySelector("footer > div");

  gsap.from(footer, {
    scrollTrigger: {
      trigger: footer,
      start: "-300 center",
    },
    duration: 0.5,
    opacity: 0,
    y: -100,
  });
};

function init() {
  animateMain();
  animateChangeLife();
  animatePlans();
  animateWorkStages();
  animateConditionsList();
  animateEarlyBooking();
  animateStartWithUs();
  animateFooter();
}

gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.addEventListener("refresh", init);
init();
