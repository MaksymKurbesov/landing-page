const upPageButton = document.querySelector(".up-page-button");

upPageButton.addEventListener("click", () => {
  window.scroll(0, 0);
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 700) {
    upPageButton.className = "up-page-button up-page-button-show";
  } else {
    upPageButton.className = "up-page-button";
  }
});
