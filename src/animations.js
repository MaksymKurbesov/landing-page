import { SplitText } from "./splitText";
import { gsap } from "gsap";

const quotes = document.querySelectorAll(".quote");
const startInvestButton = document.querySelector(".start-invest-button");
const header = document.querySelector("header");

function setupSplits() {
  quotes.forEach((quote) => {
    // Reset if needed
    if (quote.anim) {
      quote.anim.progress(1).kill();
      // quote.split.revert();
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

  startInvestButton.anim = gsap.from(startInvestButton, {
    opacity: 0,
    duration: 1,
    delay: 2,
    x: 40,
  });
}

// gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();
