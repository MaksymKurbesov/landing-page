window.addEventListener("load", () => {
  const transitionElement = document.querySelector(".transition");
  const startInvestButton = document.querySelector(".start-invest-button");

  const tariffButton = document.querySelector(".tariff-button");
  const bookingButton = document.querySelector(".booking-button");

  const buttons = [startInvestButton, tariffButton, bookingButton];

  for (let i = 0; i < buttons.length; i++) {
    const anchor = buttons[i];

    if (!anchor) return;

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      transitionElement.classList.add("is-active");

      setInterval(() => {
        window.location.href = target;
      }, 1000);
    });
  }
});
