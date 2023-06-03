/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 may 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/animation.js":
/*!******************************!*\
  !*** ./modules/animation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateRight: () => (/* binding */ animateRight),\n/* harmony export */   animationMoveLeft: () => (/* binding */ animationMoveLeft)\n/* harmony export */ });\nconst animationMoveLeft = (classElement, startValue, speed, stopValue, el) => {\r\n\t\r\n\tconst element = document.querySelector(classElement);\r\n\tel.style.display = \"block\";\r\n\t\r\n\telement.style.left = startValue+'px';\r\n\t\r\n\t\r\n\tlet idAnimation;\r\n\tlet count = 0;\r\n\tconst animate = () => {\r\n\t\tcount+=speed;\r\n\t\tidAnimation = requestAnimationFrame(animate);\r\n\t\tif (count < stopValue) {\r\n\t\t\telement.style.left = count + `px`;\r\n\t\t\t\r\n\t\t}\r\n\t\telse {\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t} \r\n\t};\r\n\tanimate();\r\n};\r\n\r\nconst animateRight = (classElement,speed,el) => {\r\n\tconst element = document.querySelector(classElement);\r\n\tlet idAnimation;\r\n\tlet count = element.getBoundingClientRect().left;\r\n\r\n\tconst addDisplayNone = (ell) => {\r\n\t\tell.style.display = \"none\";\r\n\t}\r\n\t\r\n\tconst animate = () => {\r\n\t\tcount = count - speed;\r\n\t\tidAnimation = requestAnimationFrame(animate);\r\n\t\tif (count > 0) {\r\n\t\t\telement.style.left = count + `px`;\r\n\t\t}\r\n\t\tif (count <= 0) {\r\n\t\t\taddDisplayNone(el);\r\n\t\t\telement.style.left = \"0px\";\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t}\r\n\t};\r\n\tanimate();\r\n\t\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/animation.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n\tconst menuBtn = document.querySelector('.menu');\r\n\tconst menu = document.querySelector('menu');\r\n\tconst closeBtn = menu.querySelector('.close-btn');\r\n\tconst menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n\tconst handleMenu = () => {\r\n\t\tmenu.classList.toggle('active-menu');\r\n\t};\r\n\r\n\tmenuBtn.addEventListener('click', handleMenu);\r\n\r\n\tcloseBtn.addEventListener('click', handleMenu);\r\n\r\n\tmenuItems.forEach((el) => el.addEventListener('click', handleMenu));\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/animation */ \"./modules/animation.js\");\n\r\n\r\n\r\nconst modal = () => {\r\n\tconst buttons = document.querySelectorAll('.popup-btn');\r\n\tconst modal = document.querySelector('.popup');\r\n\tconst popupClose = modal.querySelector('.popup-close');\r\n\tconst screenWidth=window.innerWidth;\r\n\t\r\n\t\r\n\r\n\r\n\t\r\n\tbuttons.forEach(el => {\r\n\t\tel.addEventListener('click', () => {\r\n\t\t\t\r\n\t\t\tif (screenWidth > 768) {\r\n\t\t\t\t(0,_modules_animation__WEBPACK_IMPORTED_MODULE_0__.animationMoveLeft)('.popup-content', 0, 10, 650, modal);\r\n\t\t\t} else { \r\n\t\t\t\tmodal.style.display = \"block\";\r\n\t\t\t}\r\n\t\t\t\r\n\t\t });\r\n\t});\r\n\tpopupClose.addEventListener('click', () => { \r\n\t\tif (screenWidth > 768) {\r\n\t\t\t(0,_modules_animation__WEBPACK_IMPORTED_MODULE_0__.animateRight)('.popup-content', 10, modal);\r\n\t\t} else { \r\n\t\t\tmodal.style.display = \"none\";\r\n\t\t}\r\n\t\t\r\n\t});\r\n };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadLine) => {\r\n\t/* console.log(deadLine); */\r\n\t\r\n\tconst timerHours = document.getElementById('timer-hours');\r\n\tconst timerMinutes = document.getElementById('timer-minutes');\r\n\tconst timerSeconds = document.getElementById('timer-seconds');\r\n\tconst timer = document.getElementById('timer');\r\n\tconst timerDays = document.createElement('span');\r\n\tconst dots = document.createElement('span');\r\n\r\n\tdots.innerText = ':';\r\n\ttimerDays.id = 'timer-days';\r\n\ttimer.insertAdjacentElement('afterbegin', dots);\r\n\ttimer.insertAdjacentElement('afterbegin', timerDays);\r\n\r\n\tconst getTimeRemaning = () => {\r\n\t\t\r\n\t\tconst dateStop = new Date(deadLine).getTime();\r\n\t\tconst dateNow = new Date().getTime();\r\n\t\t\r\n\t\tlet timeRemaining = (dateStop - dateNow) / 1000;\r\n\t\tlet days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n\t\tlet hours = (Math.floor(timeRemaining / 60 / 60)) % 24;\r\n\t\tlet minutes = (Math.floor(timeRemaining / 60)) % 60;\r\n\t\tlet seconds = Math.floor(timeRemaining % 60);\r\n\t\t\r\n\t\treturn {\r\n\t\t\ttimeRemaining,\r\n\t\t\tdays,\r\n\t\t\thours,\r\n\t\t\tminutes,\r\n\t\t\tseconds\r\n\t\t}\r\n\t\t\r\n\t};\r\n\r\n\tconst nullBeforeNumber = (number) => { \r\n\t\tif (number > 9) {\r\n\t\t\treturn number;\r\n\t\t} else { \r\n\t\t\treturn `0${number}`;\r\n\t\t}\r\n\t}\r\n\tconst returnNull = (number,elem) => {\r\n\t\tif (number <= 0) {\r\n\t\t\telem.innerText = '00';\r\n\t\t} else { \r\n\t\t\telem.textContent=nullBeforeNumber(number);\r\n\t\t}\r\n\t }\r\n\r\n\tconst updateClock = () => {\r\n\t\tlet getTime = getTimeRemaning();\r\n\t\t\r\n\t\t \t returnNull(getTime.days,timerDays);\r\n\t\t\t returnNull(getTime.hours,timerHours);\r\n\t\t\t returnNull(getTime.minutes,timerMinutes);\r\n\t\t\t returnNull(getTime.seconds,timerSeconds); \r\n\t\tconsole.log('new function');\r\n\t\t\r\n\t};\r\n\tconst setIntervalCock = () => {\r\n\t\tlet getTime = getTimeRemaning();\r\n\t\tlet idInterval = setInterval(updateClock, 1000);\r\n\t\tif (getTime.timeRemaining < 0) {\r\n\t\t\tclearInterval(idInterval);\r\n\t\t\tupdateClock();\r\n\t\t} \r\n\t};\r\n\tsetIntervalCock();\r\n\t\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;