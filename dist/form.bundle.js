/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/PTSans-Regular.ttf */ \"./src/assets/fonts/PTSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/PTSans-Bold.ttf */ \"./src/assets/fonts/PTSans-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n  font-family: \"PT Sans\";\r\n  font-weight: 400;\r\n  src:\r\n          url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"PT Sans\";\r\n  font-weight: 600;\r\n  src:\r\n          url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"truetype\");\r\n}\r\n\r\n:root {\r\n  --main-blue: #1f395c;\r\n  --dark-blue: #0D0221;\r\n  --gradient-A: #7957ff;\r\n  --gradient-B: #a824e6;\r\n  --white: #fff;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nhtml {\r\n  background-color: var(--white);\r\n  color: var(--main-blue);\r\n  font-family: 'PT Sans', sans-serif;\r\n}\r\n\r\nul, ol {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 0 40px;\r\n}\r\n\r\n.button {\r\n  background-image: linear-gradient(90deg,var(--gradient-A),var(--gradient-B));\r\n  border: none;\r\n  border-radius: 25px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding: 14px 40px;\r\n  text-align: center;\r\n}\r\n\r\n.section-title {\r\n  font-size: clamp(1.4rem, 1.1rem + 1.8vw, 3rem);\r\n  font-weight: 700;\r\n  line-height: 1;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .wrap {\r\n    max-width: 70%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n  .wrap {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .nav {\r\n    display: none;\r\n  }\r\n\r\n  .consult-button {\r\n    margin-left: auto;\r\n    margin-right: 25px;\r\n  }\r\n\r\n  .hamburger {\r\n    display: block;\r\n  }\r\n\r\n  .main-text h1 {\r\n    margin-bottom: 50px;\r\n  }\r\n\r\n  .main-text p {\r\n    /*max-width: 500px;*/\r\n    /*font-size: 14px;*/\r\n    /*margin-bottom: 80px;*/\r\n  }\r\n\r\n  .logo {\r\n    width: 150px;\r\n  }\r\n\r\n  .button {\r\n    padding: 10px 30px;\r\n    font-size: 12px;\r\n  }\r\n\r\n  .start-invest-button {\r\n    font-size: 14px;\r\n    padding: 14px 40px;\r\n  }\r\n\r\n  .change-life-list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .calendar-image img:nth-child(1) {\r\n    width: 40px;\r\n  }\r\n\r\n  .calendar-image img:nth-child(2) {\r\n    width: 250px;\r\n  }\r\n\r\n  .tags {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .work-stages-list {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .start-invest-form-wrapper {\r\n    padding: 45px;\r\n  }\r\n\r\n  .start-invest-form-wrapper form {\r\n    gap: 10px;\r\n  }\r\n\r\n  .bottom-row {\r\n    grid-template-columns: initial;\r\n    grid-template-areas:\r\n            \"text .\"\r\n            \"contacts nav\";\r\n  }\r\n\r\n  .first-column {\r\n    grid-area: text;\r\n  }\r\n\r\n  .first-column a {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .contacts {\r\n    grid-area: contacts;\r\n    justify-self: initial;\r\n  }\r\n\r\n  .navigation {\r\n    grid-area: nav;\r\n  }\r\n\r\n\r\n  /****************************  FORM  ****************************/\r\n\r\n  .form-wrapper {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .form-wrapper form {\r\n    padding: 0;\r\n  }\r\n\r\n  .questions {\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    padding-right: 0;\r\n    border-right: none;\r\n    margin-bottom: 40px;\r\n    gap: 10px;\r\n  }\r\n\r\n  .questions li span {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .questions li {\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .questions li p {\r\n    display: none;\r\n  }\r\n\r\n  .active-question {\r\n    /*background: rgba(255, 255, 255, 0.3);*/\r\n    background: linear-gradient(#ffc2a1, #ffb1bd);\r\n\r\n    border-radius: 50%;\r\n    transition: 0.35s ease all;\r\n  }\r\n\r\n  .error-message {\r\n    bottom: -47px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n\r\n  .success-question {\r\n    /*background: linear-gradient(var(--gradient-B), var(--gradient-A));*/\r\n    background: linear-gradient(#98e05f, #0de3ac);\r\n    border-radius: 50%;\r\n    color: white;\r\n    transition: 0.35s ease all;\r\n  }\r\n\r\n  .quiz h2 {\r\n    margin-bottom: 50px;\r\n    font-size: 30px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n  .main {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .change-life {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .change-life-list li {\r\n    padding: 25px;\r\n  }\r\n\r\n  .change-life-subtitle {\r\n    display: none;\r\n  }\r\n\r\n  .change-life-list li img {\r\n    height: 45px;\r\n  }\r\n\r\n  .plans {\r\n    padding: 40px 0;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .tags li {\r\n    font-size: 14px;\r\n    padding: 2px 15px;\r\n  }\r\n\r\n  .work-stages {\r\n    margin-bottom: 60px;\r\n  }\r\n\r\n  .booking-wrapper {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .conditions-list {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .conditions-list li {\r\n    display: flex;\r\n    padding: 30px;\r\n  }\r\n\r\n  .conditions-list li img {\r\n    margin-bottom: 0;\r\n    margin-right: 35px;\r\n  }\r\n\r\n  .form-wrapper h3 {\r\n    font-size: 28px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .inputs-wrapper input[type=text] {\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 705px) {\r\n  .main-text {\r\n    padding: 0 14px;\r\n  }\r\n\r\n  /*.main-text p {*/\r\n  /*  font-size: 12px;*/\r\n  /*}*/\r\n\r\n  .change-life-list {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n\r\n  .tariff-button {\r\n    margin-top: 25px;\r\n  }\r\n\r\n  .plans-list {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .plans-list > li {\r\n    padding: 20px 30px;\r\n  }\r\n\r\n  .calendar-image img:nth-child(1) {\r\n    width: 20px;\r\n  }\r\n\r\n  .calendar-image img:nth-child(2) {\r\n    width: 170px;\r\n  }\r\n\r\n  .conditions-list li {\r\n    align-items: center;\r\n    padding: 20px;\r\n  }\r\n\r\n  .conditions-list li img {\r\n    margin-right: 20px;\r\n    height: 40px;\r\n    width: 40px;\r\n  }\r\n\r\n  .conditions-list li h3 {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .conditions-list li p {\r\n    font-size: 14px;\r\n  }\r\n\r\n  .start-invest-form-wrapper form {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n  }\r\n\r\n  .start-invest-form-wrapper input {\r\n    width: 100%;\r\n  }\r\n\r\n  .form-wrapper {\r\n    padding: 15px;\r\n  }\r\n\r\n  .questions {\r\n    padding-top: 15px;\r\n    margin-bottom: 25px;\r\n    display: none;\r\n  }\r\n\r\n  .mobile-questions {\r\n    /*width: 50px;*/\r\n    /*height: 50px;*/\r\n    display: block;\r\n    margin: 15px auto;\r\n    background-image: linear-gradient(90deg,var(--gradient-A),var(--gradient-B));\r\n    /*background: white;*/\r\n    /*color: black;*/\r\n    padding: 8px 25px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .inputs-wrapper {\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: initial;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .container {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  .work-stages-list {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  footer {\r\n    text-align: center;\r\n  }\r\n\r\n  .bottom-row {\r\n    grid-template-columns: 1fr;\r\n    grid-template-areas: none;\r\n  }\r\n\r\n  .bottom-row h3 {\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n  .contacts p:nth-child(2) {\r\n    margin-bottom: 7px\r\n  }\r\n\r\n  .contacts, .navigation, .first-column {\r\n    grid-area: initial;\r\n  }\r\n\r\n  .form-wrapper {\r\n    margin-bottom: 45px;\r\n  }\r\n\r\n  .inputs-wrapper > div {\r\n    padding: 8px;\r\n  }\r\n\r\n  .up-page-button {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .up-page-button img {\r\n    width: 15px;\r\n  }\r\n\r\n  .mobile-menu {\r\n    top: -255px;\r\n    z-index: 4;\r\n  }\r\n\r\n  .mobile-menu-open {\r\n    top: 0;\r\n  }\r\n\r\n  .mobile-menu ul {\r\n    flex-direction: column;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 550px) {\r\n  .logo {\r\n    width: 130px;\r\n  }\r\n\r\n  .consult-button {\r\n    display: none;\r\n  }\r\n\r\n  .start-invest-button {\r\n    padding: 10px 30px;\r\n  }\r\n\r\n  .change-life li:not(:last-child) h3 {\r\n    display: inline-block;\r\n    position: relative;\r\n    top: -10px;\r\n    left: 10px;\r\n  }\r\n\r\n  .change-life li img {\r\n    margin-bottom: 0px;\r\n  }\r\n\r\n  .plans-list {\r\n    gap: 10px;\r\n  }\r\n\r\n  .tags li {\r\n    font-size: 12px;\r\n    padding: 1px 10px;\r\n  }\r\n\r\n  .work-stages-list {\r\n    gap: 5px;\r\n  }\r\n\r\n  .work-stages li h3 {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .work-stages li span {\r\n    width: 30px;\r\n    height: 30px;\r\n  }\r\n\r\n  .booking-wrapper {\r\n    flex-direction: column-reverse;\r\n  }\r\n\r\n  .booking-title-mobile {\r\n    display: block;\r\n  }\r\n\r\n  .booking-title-desktop {\r\n    display: none;\r\n  }\r\n\r\n  .booking-text {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .booking-text p {\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .start-invest-form-wrapper {\r\n    padding: 25px;\r\n  }\r\n\r\n  .start-invest-form p {\r\n    margin-bottom: 35px;\r\n  }\r\n\r\n  .top-row > img {\r\n    width: 130px;\r\n  }\r\n\r\n  .top-row ul li img {\r\n    width: 25px;\r\n  }\r\n\r\n  .quiz h2 {\r\n    font-size: 24px;\r\n  }\r\n\r\n  .form-wrapper h3 {\r\n    font-size: 20px;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://landing-page/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `video {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  object-fit: cover;\r\n  z-index: -1;\r\n}\r\n\r\n.logo {\r\n  display: block;\r\n}\r\n\r\n.header-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 25px 0;\r\n}\r\n\r\n.hamburger {\r\n  display: none;\r\n  width: 18px;\r\n  height: 12px;\r\n  cursor: pointer;\r\n  z-index: 5;\r\n  /*margin-left: auto;*/\r\n  /*margin-right: 25px;*/\r\n}\r\n\r\n\r\n.hamburger span {\r\n  display: block;\r\n  width: 18px;\r\n  height: 2px;\r\n  background: white;\r\n  transition: 0.35s ease all;\r\n}\r\n\r\n.hamburger span:nth-child(2) {\r\n  transform: translateY(3px);\r\n}\r\n\r\n.hamburger span:nth-child(3) {\r\n  transform: translateY(6px);\r\n}\r\n\r\n.hamburger-open span:nth-child(1) {\r\n  opacity: 0;\r\n}\r\n\r\n.hamburger-open span:nth-child(2) {\r\n  transform: translateY(5px) rotateZ(45deg);\r\n}\r\n\r\n.hamburger-open span:nth-child(3) {\r\n  transform: translateY(3px) rotateZ(-45deg);\r\n}\r\n\r\n.nav ul {\r\n  display: flex;\r\n  gap: 25px;\r\n  font-weight: 700;\r\n}\r\n\r\n.main {\r\n  min-height: 100vh;\r\n  text-align: center;\r\n  margin-bottom: 80px;\r\n  color: white;\r\n}\r\n\r\n#typed-text {\r\n  height: 20px;\r\n}\r\n\r\n.main-text {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: calc(50% - 100px);\r\n  left: 50%;\r\n  padding: 0 40px;\r\n  transform: translate(-50%, calc(-50% + 100px));\r\n}\r\n\r\n.main-text h1 {\r\n  font-size: clamp(0.6rem, 1rem + 2.58vw, 5rem);\r\n  margin-bottom: 15px;\r\n  line-height: 1.1;\r\n}\r\n\r\n\r\n.main-text h1 span {\r\n  color: var(--gradient-B);\r\n  background: linear-gradient(var(--gradient-B), var(--gradient-A));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.main-text > span {\r\n  /*display:inline-block;*/\r\n  /*margin: 0 auto 50px;*/\r\n  opacity: 0.4;\r\n}\r\n\r\n.start-invest-button {\r\n  display: block;\r\n  max-width: 235px;\r\n  margin: 50px auto 0;\r\n  box-shadow: 0px 0px 108px 15px rgba(121,87,255,0.72);\r\n  animation: pulse linear 1.5s infinite alternate;\r\n}\r\n\r\n.change-life {\r\n  margin-bottom: 80px;\r\n}\r\n\r\n\r\n.change-life-text {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.change-life-text h2 {\r\n  margin-right: 20px;\r\n}\r\n\r\n.change-life-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.change-life-subtitle {\r\n  max-width: 300px;\r\n  text-align: right;\r\n}\r\n\r\n.change-life-list li {\r\n  border: 1px solid rgba(0, 0, 0, 0.07);\r\n  padding: 35px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.change-life-list li img {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.change-life-list li h3 {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.have-question {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-image: linear-gradient(90deg,var(--gradient-A),var(--gradient-B));\r\n  color: white;\r\n}\r\n\r\n.tariff-button {\r\n  margin-top: auto;\r\n  background-image: none !important;\r\n  color: black !important;\r\n  background: white;\r\n}\r\n\r\n.plans {\r\n  background-color: var(--dark-blue);\r\n  background-image:\r\n          radial-gradient(1700px 1200px, rgba(23,46,164,0.45) 20%, rgba(22,119,255,0) 55%);\r\n  color: white;\r\n  padding: 70px 0;\r\n  margin-bottom: 80px;\r\n}\r\n\r\n\r\n.plans h2 {\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.plans-list {\r\n  display: grid;\r\n  grid-template-columns:  1fr 1fr;\r\n  gap: 25px;\r\n  color: var(--main-blue);\r\n}\r\n\r\n.plans-list > li {\r\n  padding: 25px 35px;\r\n  border-radius: 20px;\r\n  background: rgba(255, 255, 255, 0.05);\r\n  border: 1px solid rgba(255, 255, 255, 0.13);\r\n  color: white;\r\n}\r\n\r\n.plans-list li h3 {\r\n  font-size: 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.tags {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  max-width: 75%;\r\n  /*grid-template-columns: repeat(3, max-content);*/\r\n  gap: 7px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.tags li {\r\n  background-color: var(--gradient-A);\r\n  color: white;\r\n  padding: 4px 20px;\r\n  height: 35px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 25px;\r\n  font-weight: 700;\r\n}\r\n\r\n.work-stages {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.work-stages h2 {\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.work-stages-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.work-stages-list li {\r\n  padding: 20px;\r\n  border: 2px solid rgba(0, 0, 0, 0.03);\r\n  border-radius: 20px;\r\n  background: var(--white);\r\n}\r\n\r\n.work-stages-list li span {\r\n  background-image: linear-gradient(90deg,var(--gradient-A),var(--gradient-B));\r\n  color: white;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 50%;\r\n  margin-right: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.work-stages-list li h3 {\r\n  display: inline-block;\r\n}\r\n\r\n.circles {\r\n  position: absolute;\r\n  top: -400px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  opacity: 0.06;\r\n  z-index: -1;\r\n}\r\n\r\n.booking-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 80px;\r\n  gap: 50px;\r\n}\r\n\r\n.booking-title-mobile {\r\n  display: none;\r\n}\r\n\r\n.calendar-image {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n.calendar-image img:nth-child(1) {\r\n  animation: float 3s ease-in-out infinite;\r\n}\r\n\r\n.calendar-image img:nth-child(2) {\r\n  animation: float 4s ease-in-out infinite;\r\n}\r\n\r\n.booking {\r\n  margin-bottom: 80px;\r\n  position: relative;\r\n}\r\n\r\n.booking-text {\r\n  max-width: 600px;\r\n}\r\n\r\n.booking-text h2 {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.booking-text p {\r\n  margin-bottom: 70px;\r\n  line-height: 1.6;\r\n}\r\n\r\n.conditions-list {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 20px;\r\n}\r\n\r\n.conditions-list li {\r\n  background: var(--white);\r\n  color: var(--main-blue);\r\n  padding: 40px;\r\n  border-radius: 20px;\r\n  border: 1px solid rgba(0, 0, 0, 0.07);\r\n}\r\n\r\n.conditions-list li img {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.conditions-list li h3 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n.start-invest-form {\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.start-invest-form h2 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.start-invest-form p {\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.start-invest-form-wrapper {\r\n  background-image: linear-gradient(90deg,var(--gradient-A),var(--gradient-B));\r\n  padding: 70px;\r\n  color: white;\r\n  border-radius: 20px;\r\n}\r\n\r\n.start-invest-form-wrapper form {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.start-invest-form-wrapper form button {\r\n  padding: 0 35px;\r\n  border-radius: 20px;\r\n  border: 1px solid white;\r\n  color: white;\r\n  outline: none;\r\n  font-family: inherit;\r\n  background: none;\r\n  cursor: pointer;\r\n  font-weight: 700;\r\n}\r\n\r\n.start-invest-form-wrapper input {\r\n  border-radius: 20px;\r\n  padding: 15px;\r\n  border: none;\r\n  outline: none;\r\n  width: 30%;\r\n}\r\n\r\nfooter {\r\n  padding-bottom: 50px;\r\n  background: white;\r\n  color: var(--main-blue);\r\n}\r\n\r\n.top-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-bottom: 30px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n\r\n.top-row ul {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.bottom-row {\r\n  padding-top: 30px;\r\n  display: grid;\r\n  gap: 30px;\r\n  grid-template-columns: 28% 1fr max-content;\r\n}\r\n\r\n.bottom-row h3 {\r\n  font-size: 18px;\r\n  margin-bottom: 35px;\r\n}\r\n\r\n.first-column {\r\n  align-self: center;\r\n}\r\n\r\n.first-column a {\r\n  display: inline-block;\r\n  margin-top: 50px;\r\n}\r\n\r\n.first-column p {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.contacts {\r\n  justify-self: center;\r\n}\r\n\r\n.contacts p {\r\n  font-size: clamp(1.4rem, 1rem + 1.45vw, 2.5rem);\r\n}\r\n\r\n.contacts p:nth-child(2) {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.mobile-menu {\r\n  position: absolute;\r\n  top: -110px;\r\n  left: 0;\r\n  width: 100%;\r\n  background: rgba(0, 0, 0, 1);\r\n  padding: 34px;\r\n  font-weight: 700;\r\n  transition: 0.35s ease all;\r\n}\r\n\r\n.wrap{\r\n  width: 100%;\r\n  height: auto;\r\n  max-width: 60%;\r\n  background-color: transparent;\r\n  margin: 0 auto;\r\n}\r\n\r\n.sp {\r\n  width:100%;\r\n  background-color:teal;\r\n  margin:0 auto;\r\n  text-align:center;\r\n  font-size:30px;\r\n  color:#ffffff;\r\n}\r\n\r\n.quote {\r\n  font-size:clamp(0.8rem, 1.4rem + 2.58vw, 5rem);\r\n  line-height: 1;\r\n  color:white;\r\n  font-weight: 700;\r\n  text-align:center;\r\n  overflow:hidden;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.split-line {\r\n  overflow: hidden;\r\n}\r\n\r\n.aki__line:last-child .aki_wrapper:last-child .aki__char:nth-child(5),\r\n.aki__line:last-child .aki_wrapper:last-child .aki__char:nth-child(4),\r\n.aki__line:last-child .aki_wrapper:last-child .aki__char:nth-child(3),\r\n.aki__line:last-child .aki_wrapper:last-child .aki__char:nth-child(2),\r\n.aki__line:last-child .aki_wrapper:last-child .aki__char:nth-child(1) {\r\n  color: var(--gradient-B);\r\n}\r\n\r\n.mobile-menu-open {\r\n  top: 0;\r\n}\r\n\r\n.mobile-menu ul {\r\n  display: flex;\r\n  gap: 35px;\r\n  justify-content: center;\r\n}\r\n\r\n.up-page-button {\r\n  position: fixed;\r\n  bottom: 25px;\r\n  left: 25px;\r\n  background: rgba(182, 182, 182, 0.44);\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  transition: 0.5s ease all;\r\n\r\n}\r\n\r\n.up-page-button-show {\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.up-page-button img {\r\n  transform: rotateZ(-90deg);\r\n  width: 20px;\r\n  filter: invert(1);\r\n}\r\n\r\n/********************************** FORM **********************************/\r\n\r\n.navigation ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n\r\n.form {\r\n  color: white;\r\n}\r\n\r\n.quiz {\r\n  margin-bottom: 50px;\r\n  background-color: var(--dark-blue);\r\n  background-image:\r\n          radial-gradient(1700px 1200px, rgba(23,46,164,0.45) 20%, rgba(22,119,255,0) 45%);\r\n}\r\n\r\n.quiz > div {\r\n  padding: 45px 0;\r\n}\r\n\r\n.quiz h2 {\r\n  font-size: 34px;\r\n  margin-bottom: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.quiz fieldset {\r\n  border: none;\r\n}\r\n\r\n.form-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 170px 1fr;\r\n  background-color: rgba(255, 255, 255, 0.1);\r\n  color: var(--white);\r\n  padding: 50px 40px;\r\n  margin-bottom: 70px;\r\n  border-radius: 20px;\r\n  border: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.form-wrapper h3 {\r\n  margin-bottom: 35px;\r\n  font-size: 34px;\r\n}\r\n\r\n.form-wrapper form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 40px 0 40px 40px;\r\n  position: relative;\r\n}\r\n\r\n.question {\r\n  text-align: center;\r\n}\r\n\r\n.mobile-questions {\r\n  display: none;\r\n}\r\n\r\n.questions {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding-right: 15px;\r\n  border-right: 1px solid rgba(255, 255, 255, 0.2);\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.questions li span {\r\n  display: none;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  color: white;\r\n  padding: 7px;\r\n  border-radius: 50%;\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n\r\n.success-question {\r\n  font-weight: 700;\r\n  color: var(--gradient-A);\r\n}\r\n\r\n.active-question {\r\n  font-weight: 700;\r\n  color: white;\r\n}\r\n\r\n.inputs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 50% 50%;\r\n  gap: 5px;\r\n  margin-top: auto;\r\n  /*height: calc(100% - 80px);*/\r\n}\r\n\r\n.inputs-wrapper > div {\r\n  background: rgba(255, 255, 255, 0.2);\r\n  box-shadow: 0 0 7px 5px rgba(0, 0, 0, 0.05);\r\n  color: white;\r\n  padding: 15px;\r\n  border-radius: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease all;\r\n}\r\n\r\n.inputs-wrapper > div input {\r\n  margin-right: 15px;\r\n  transition: 0.5s ease all;\r\n}\r\n\r\n.inputs-wrapper > div:has(input[type=radio]:checked)  {\r\n  /*background-image: linear-gradient(45deg,var(--gradient-B),var(--gradient-A));*/\r\n  background-color: var(--gradient-B);\r\n  transition: 0.5s ease all;\r\n}\r\n\r\n.inputs-wrapper input[type=text] {\r\n  padding: 25px;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 20px;\r\n}\r\n\r\n.inputs-wrapper > div label {\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.error-message {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 40px;\r\n  display: block;\r\n  margin-top: 35px;\r\n  color: #ff6060;\r\n  opacity: 0;\r\n  transition: 0.35s ease all;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n.back-button-hide {\r\n  display: none;\r\n}\r\n\r\n.back-button-show {\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n@keyframes float {\r\n  0% {\r\n    transform: translatey(0px);\r\n  }\r\n  50% {\r\n    transform: translatey(-30px);\r\n  }\r\n  100% {\r\n    transform: translatey(0px);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    box-shadow: 0px 0px 0px 0px rgba(121,87,255,0.25);\r\n  }\r\n  70% {\r\n    box-shadow: 0px 0px 20px 5px rgba(121,87,255,0.5);\r\n  }\r\n  100% {\r\n    box-shadow: 0px 0px 40px 10px rgba(121,87,255,1);\r\n  }\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://landing-page/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://landing-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://landing-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://landing-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://landing-page/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://landing-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://landing-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://landing-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://landing-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://landing-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://landing-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hamburger */ \"./src/hamburger.js\");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hamburger__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst questionElement = document.querySelector(\".question\");\nconst backButtonElement = document.querySelector(\".back-button\");\nconst nextButtonElement = document.querySelector(\".next-button\");\nconst questionListItems = document.querySelectorAll(\".questions li\");\nconst errorMessage = document.querySelector(\".error-message\");\n\nconst mobileQuestionCount = document.querySelector(\".mobile-questions span\");\n\nlet currentQuestion = 0;\n\nconst user_answers = {};\n\nconst QUIZ = [\n  {\n    question: \"Каковы ваши инвестиционные цели?\",\n    answers: [\n      \"Финансовая стабильность, пассивный доход, минимизация рисков.\",\n      \"Фокус на рост через акции, недвижимость и управляемый риск.\",\n      \"Прирост капитала через экологичные проекты и инновации.\",\n      \"Стабильный доход от дивидендов и надежные инвестиции.\",\n    ],\n  },\n  {\n    question: \"Какой у вас опыт с инвестициями?\",\n    answers: [\n      \"Опытный: акции, облигации, недвижимость, крипто.\",\n      \"Новичок: активное обучение.\",\n      \"Средний уровень: разносторонние инвестиции.\",\n      \"Специализация: секторные глубокие знания.\",\n    ],\n  },\n  {\n    question:\n      \"Был ли у вас опыт сотрудничества с компаниями на партнерской основе?\",\n    answers: [\n      \"Профи в партнерстве: стратегические альянсы.\",\n      \"Опыт в сотрудничестве: координация проектов.\",\n      \"Начальный опыт: успешное взаимодействие.\",\n      \"Новичок: открыт к партнерству.\",\n    ],\n  },\n  {\n    question: \"Какую сумму вы планируете инвестировать?\",\n    answers: [\n      \"Целевые инвестиции: рассчитанный риск и анализ.\",\n      \"Гибкий средний вклад: корректируемый под обстоятельства.\",\n      \"Старт с минимума: потенциал для наращивания.\",\n      \"Значительные инвестиции: основанные на стабильности и целях.\",\n    ],\n  },\n  {\n    question: \"Как часто вы планируете отслеживать свои инвестиции?\",\n    answers: [\n      \"Ежедневный мониторинг для оперативного реагирования на рынок.\",\n      \"Еженедельная проверка для сбалансированного управления.\",\n      \"Ежемесячное отслеживание для стратегического фокуса.\",\n      \"Квартальный обзор для долгосрочной стратегии.\",\n    ],\n  },\n  {\n    question: \"Как часто планируете выводить девиденды?\",\n    answers: [\n      \"Реинвестирование: ускорение капитального роста.\",\n      \"Еженедельный вывод: дополнительный доход.\",\n      \"Месячные дивиденды: баланс роста и дохода.\",\n      \"Гибкий вывод: адаптация к финансам и рынку.\",\n    ],\n  },\n  {\n    question: \"У вас был опыт пользования криптокошельками?\",\n    answers: [\n      \"Активный пользователь: криптокошельки и безопасность.\",\n      \"Умеренный опыт: осторожное использование.\",\n      \"Основы знакомы: ограниченный практический опыт.\",\n      \"Новичок: открыт к обучению и использованию.\",\n    ],\n  },\n  {\n    question: \"В чем вы больше всего экспертны?\",\n    answers: [\n      \"Финансовый эксперт: анализ и управление портфелями.\",\n      \"Технологический специалист: программирование и инновации.\",\n      \"Стратегическое управление: планирование и проекты.\",\n      \"Маркетинговый эксперт: стратегии и брендинг. \",\n    ],\n  },\n];\n\nconst contactInputs = () => {\n  const optionsContainer = document.querySelector(\".inputs-wrapper\");\n  const inputPhone = document.createElement(\"input\");\n  const inputName = document.createElement(\"input\");\n  const inputEmail = document.createElement(\"input\");\n  const inputMessenger = document.createElement(\"input\");\n\n  inputPhone.type = \"text\";\n  inputName.type = \"text\";\n  inputMessenger.type = \"text\";\n  inputEmail.type = \"text\";\n  inputPhone.id = \"phone\";\n  inputName.id = \"name\";\n  inputMessenger.id = \"messenger\";\n  inputEmail.id = \"email\";\n  inputPhone.placeholder = \"Ваш номер телефона\";\n  inputName.placeholder = \"Ваше имя\";\n  inputEmail.placeholder = \"Ваш email\";\n  inputMessenger.placeholder = \"Профиль в мессенджере\";\n\n  optionsContainer.appendChild(inputName);\n  optionsContainer.appendChild(inputPhone);\n  optionsContainer.appendChild(inputEmail);\n  optionsContainer.appendChild(inputMessenger);\n};\n\nconst displayStep = (step) => {\n  const optionsContainer = document.querySelector(\".inputs-wrapper\");\n  optionsContainer.innerHTML = \"\";\n\n  if (step < QUIZ.length) {\n    questionElement.innerHTML = QUIZ[step].question;\n\n    QUIZ[step].answers.forEach((answer) => {\n      const divContainer = document.createElement(\"div\");\n\n      const label = document.createElement(\"label\");\n      const radioButton = document.createElement(\"input\");\n      radioButton.type = \"radio\";\n      radioButton.name = \"answer\";\n      radioButton.value = answer;\n\n      label.appendChild(radioButton);\n      label.appendChild(document.createTextNode(answer));\n      divContainer.appendChild(label);\n      optionsContainer.appendChild(divContainer);\n    });\n\n    if (user_answers[step] !== undefined) {\n      document.querySelector(\n        `input[name=\"answer\"][value=\"${user_answers[step]}\"]`\n      ).checked = true;\n    }\n\n    console.log(user_answers, \"user_answers\");\n    console.log(user_answers[step - 1], \"user_answers[step - 1]\");\n  } else {\n    document.querySelector(\".question\").innerHTML =\n      \"Укажите в форме, пожалуйста, свои контактные данные\";\n\n    contactInputs();\n  }\n\n  if (step !== 0) {\n    backButtonElement.className = \"back-button button back-button-show\";\n  } else {\n    backButtonElement.className = \"back-button back-button-hide\";\n  }\n\n  mobileQuestionCount.innerHTML = step + 1;\n\n  if (user_answers[step - 1] !== undefined) {\n    questionListItems[step - 1].className = \"success-question\";\n  }\n\n  questionListItems[currentQuestion].className = \"active-question\";\n};\n\ndisplayStep(currentQuestion);\n\nbackButtonElement.addEventListener(\"click\", () => {\n  const selectedOption = document.querySelector('input[name=\"answer\"]:checked');\n  if (selectedOption) {\n    user_answers[currentQuestion] = selectedOption.value;\n  }\n\n  if (currentQuestion > 0) {\n    questionListItems[currentQuestion].className = \"\";\n    currentQuestion--;\n    displayStep(currentQuestion);\n  }\n});\n\nnextButtonElement.addEventListener(\"click\", () => {\n  if (currentQuestion < QUIZ.length) {\n    const selectedOption = document.querySelector(\n      'input[name=\"answer\"]:checked'\n    );\n    if (!selectedOption) {\n      errorMessage.style.opacity = \"1\";\n      return;\n    } else {\n      user_answers[currentQuestion] = selectedOption.value;\n      errorMessage.style.opacity = \"0\";\n    }\n  }\n\n  if (currentQuestion < QUIZ.length) {\n    currentQuestion++;\n    displayStep(currentQuestion);\n  } else if (currentQuestion === QUIZ.length) {\n    const contactInfo = document.getElementById(\"phone\").value;\n    if (!contactInfo) {\n      alert(\"Пожалуйста, введите вашу контактную информацию.\");\n      return;\n    }\n    user_answers[\"contactInfo\"] = contactInfo;\n    currentQuestion++;\n    console.log(\"Опрос завершен\");\n    console.log(user_answers);\n  }\n});\n\n\n//# sourceURL=webpack://landing-page/./src/form.js?");

/***/ }),

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ (() => {

eval("const hamburger = document.querySelector(\".hamburger\");\nconst mobileMenu = document.querySelector(\".mobile-menu\");\n\nlet menuIsOpen = false;\n\nhamburger.addEventListener(\"click\", () => {\n  if (menuIsOpen) {\n    mobileMenu.className = \"mobile-menu\";\n    hamburger.className = \"hamburger\";\n  } else {\n    mobileMenu.className = \"mobile-menu mobile-menu-open\";\n    hamburger.className = \"hamburger hamburger-open\";\n  }\n\n  menuIsOpen = !menuIsOpen;\n});\n\n\n//# sourceURL=webpack://landing-page/./src/hamburger.js?");

/***/ }),

/***/ "./src/assets/fonts/PTSans-Bold.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/PTSans-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"610bc32a7e32c292ce59.ttf\";\n\n//# sourceURL=webpack://landing-page/./src/assets/fonts/PTSans-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/PTSans-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/PTSans-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"77e92507394e2309d837.ttf\";\n\n//# sourceURL=webpack://landing-page/./src/assets/fonts/PTSans-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"form": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/form.js");
/******/ 	
/******/ })()
;