import "./index.css";
import "./js/hamburger";
import "./js/animations";
import "./js/PopupController";
import "./js/contactForm";
import "./js/pageTransition";
import "./js/GoToUpPage";
import "./js/TypedText";
import { initHandlers } from "./js/addHandlers";

if (module.hot) module.hot.accept();

initHandlers();
