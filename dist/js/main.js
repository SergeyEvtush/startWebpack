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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 may 2023');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__.form1)();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__.form2)();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_6__.form3)();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('.portfolio-content','.portfolio-item');\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/animation.js":
/*!******************************!*\
  !*** ./modules/animation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateRight: () => (/* binding */ animateRight),\n/* harmony export */   animationMoveLeft: () => (/* binding */ animationMoveLeft)\n/* harmony export */ });\nconst animationMoveLeft = (classElement, startValue, speed,el) => {\r\n\t\r\n\tconst element = document.querySelector(classElement);\r\n\tel.style.display = \"block\";\r\n\tconst elemWidth = element.getBoundingClientRect();\r\n\tconst windowWidth = window.innerWidth;\r\n\telement.style.left = startValue+'px';\r\n\t\r\n\t\r\n\tlet idAnimation;\r\n\tlet count = 0;\r\n\tconst animate = () => {\r\n\t\tcount+=speed;\r\n\t\tidAnimation = requestAnimationFrame(animate);\r\n\t\tif (count < (windowWidth-elemWidth.width)/2) {\r\n\t\t\telement.style.left = count + `px`;\r\n\t\t\t\r\n\t\t}\r\n\t\telse {\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t} \r\n\t};\r\n\tanimate();\r\n};\r\n\r\nconst animateRight = (classElement,speed,el) => {\r\n\tconst element = document.querySelector(classElement);\r\n\tlet idAnimation;\r\n\tlet count = element.getBoundingClientRect().left;\r\n\r\n\tconst addDisplayNone = (ell) => {\r\n\t\tell.style.display = \"none\";\r\n\t}\r\n\t\r\n\tconst animate = () => {\r\n\t\tcount = count - speed;\r\n\t\tidAnimation = requestAnimationFrame(animate);\r\n\t\tif (count > 0) {\r\n\t\t\telement.style.left = count + `px`;\r\n\t\t}\r\n\t\tif (count <= 0) {\r\n\t\t\taddDisplayNone(el);\r\n\t\t\telement.style.left = \"0px\";\r\n\t\t\tcancelAnimationFrame(idAnimation);\r\n\t\t}\r\n\t};\r\n\tanimate();\r\n\t\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./modules/animation.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/functions */ \"./modules/functions.js\");\n\r\n\r\nconst calculator = (price=100) => {\r\n\tconst calcBlock = document.querySelector('.calc-block'),\r\n\t calcType = calcBlock.querySelector('.calc-type'),\r\n\t calcSquare = calcBlock.querySelector('.calc-square'),\r\n\t calcCount = calcBlock.querySelector('.calc-count'),\r\n\t calcDay = calcBlock.querySelector('.calc-day'),\r\n\t calcInput = calcBlock.querySelectorAll('input.calc-item'),\r\n\t total = calcBlock.querySelector('#total');\r\n\r\n\t\r\n\t\r\n\tconst coutCalc = () => {\r\n\t\tconst calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n\t\tconst calcSquareValue = +calcSquare.value;\r\n\t\tlet idInterval;\r\n\t\tlet startValue = 0;\r\n\t\tlet totalValue = 0;\r\n\t\tlet countCalcValue = 1;\r\n\t\tlet calDayValue = 1;\r\n\t\tif (calcCount.value > 1) { \r\n\t\t\tcountCalcValue += +calcCount.value / 10;\r\n\t\t}\r\n\t\tif (calcDay.value&&calcDay.value < 5) { \r\n\t\t\tcalDayValue = 2;\r\n\t\t} else if (calcDay.value&&calcDay.value < 10) {\r\n\t\t\tcalDayValue = 1.5;\r\n\t\t }\r\n\t\tif (calcType.value && calcSquare.value&&calcCount.value&&calcDay.value) {\r\n\t\t\ttotalValue = price * calcTypeValue * calcSquareValue * countCalcValue * calDayValue;\r\n\t\t\t\tconsole.log(totalValue);\r\n\t\t\t\t\r\n\t\t\r\n\t\t} else { \r\n\t\t\ttotalValue = 0;\r\n\t\t}\r\n\t\tidInterval=setInterval(() => {\r\n\t\t\tif (startValue < totalValue) {\r\n\t\t\t\tif (totalValue > 50000) {\r\n\t\t\t\t\tstartValue += 10;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tstartValue+=5;\r\n\t\t\t\t }\r\n\t\t\t\t\r\n\t\t\t\ttotal.textContent = startValue;\r\n\t\t\t} else { \r\n\t\t\t\tclearInterval(idInterval);\r\n\t\t\t}\r\n\t\t}, 1);\r\n\t\t\r\n\t\t\r\n\t};\r\n\r\n\tcalcInput.forEach(el => {\r\n\t\tel.addEventListener('input', (e) => { \r\n\t\t\te.preventDefault();\r\n\t\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isNumber)(el);\r\n\t\t});\r\n\t});\r\n\t\r\n\r\n\tcalcBlock.addEventListener('input', (e) => { \r\n\t\tconst target = e.target;\r\n\t\tif (target === calcType || target === calcSquare ||\r\n\t\t\ttarget === calcCount || target === calcDay) {\r\n\t\t\tcoutCalc();\r\n\t\t }\r\n\t\t\r\n\t});\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/dots.js":
/*!*************************!*\
  !*** ./modules/dots.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDots = () => {\r\n\tconst portfolioDot = document.querySelector('.portfolio-dots');\r\n\tconst portfolioItems = document.querySelectorAll('.portfolio-item');\r\n\t\r\n\r\n\tconst createElem = () => {\r\n\t\tconst el = document.createElement('li');\r\n\t\treturn el;\r\n\t}\r\n\tconst appendClass = (elem, classElem) => {\r\n\t\telem.classList.add(classElem);\r\n\t}\r\n\tconst createDotsCollection = (sliders, parentDots) => {\r\n\t\tsliders.forEach((el, index) => {\r\n\t\t\tconst dot = createElem();\r\n\t\t\tif (index === 0) {\r\n\t\t\t\tappendClass(dot, 'dot');\r\n\t\t\t\tappendClass(dot, 'dot-active');\r\n\r\n\t\t\t} else {\r\n\t\t\t\tappendClass(dot, 'dot');\r\n\t\t\t}\r\n\t\t\tparentDots.append(dot);\r\n\t\t});\r\n\t\t\r\n\t};\r\n\tcreateDotsCollection(portfolioItems, portfolioDot);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDots);\n\n//# sourceURL=webpack:///./modules/dots.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   form1: () => (/* binding */ form1),\n/* harmony export */   form2: () => (/* binding */ form2),\n/* harmony export */   form3: () => (/* binding */ form3)\n/* harmony export */ });\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/functions */ \"./modules/functions.js\");\n\r\n\r\n\r\nconst form1 = () => { \r\n\tconst form = document.querySelector('#form1');\r\n\tconst user = document.querySelector('#form1-name');\r\n\tconst email = document.querySelector('#form1-email');\r\n\tconst phone = document.querySelector('#form1-phone');\r\n\r\n\tform.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isFullName)(user);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isEmail)(email);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isNumber)(phone);\r\n\t\t\r\n\t });\r\n\r\n\r\n}\r\nconst form2 = () => { \r\n\tconst form = document.querySelector('#form2');\r\n\tconst user = document.querySelector('#form2-name');\r\n\tconst email = document.querySelector('#form2-email');\r\n\tconst phone = document.querySelector('#form2-phone');\r\n\tconst message = document.querySelector('#form2-message');\r\n\r\n\tform.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isFullName)(user);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isEmail)(email);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isNumber)(phone);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isRus)(message);\r\n\t });\r\n\r\n}\r\nconst form3 = () => {\r\n\tconst form = document.querySelector('#form3');\r\n\tconst user = document.querySelector('#form3-name');\r\n\tconst email = document.querySelector('#form3-email');\r\n\tconst phone = document.querySelector('#form3-phone');\r\n\r\n\tform.addEventListener('submit', (e) => {\r\n\t\te.preventDefault();\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isFullName)(user);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isEmail)(email);\r\n\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isNumber)(phone);\r\n\t\t\r\n\t});\r\n};\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/functions.js":
/*!******************************!*\
  !*** ./modules/functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNameOfBlock: () => (/* binding */ getNameOfBlock),\n/* harmony export */   isEmail: () => (/* binding */ isEmail),\n/* harmony export */   isError: () => (/* binding */ isError),\n/* harmony export */   isFullName: () => (/* binding */ isFullName),\n/* harmony export */   isNumber: () => (/* binding */ isNumber),\n/* harmony export */   isRus: () => (/* binding */ isRus),\n/* harmony export */   scrollingToView: () => (/* binding */ scrollingToView)\n/* harmony export */ });\nconst getNameOfBlock = (link) => {\r\n\tconst hrefLink = link.href;\r\n\tconst res = hrefLink.split('#').pop();\r\n\treturn res;\r\n}\r\n\r\nconst isFullName = (elem) => {\r\n\tif (/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел\r\n\t\t\r\n\t\tisError(elem, false);\r\n\t} else {\r\n\t\t\r\n\t\tisError(elem, true);\r\n\t\r\n\t}\r\n}\r\n\r\nconst isEmail=(elem) => {\r\n\r\n\tif (/^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/g.test(elem.value)&&elem.value!=='') { //валидация на ввод email\r\n\t\tisError(elem, false);\r\n\t} else { \r\n\t\tisError(elem, true);\r\n\t\t\r\n\t}\r\n }\r\n\r\nconst isNumber = (elem) => {\r\n\t\r\n\tif (!/[^\\d]/g.test(elem.value)&&elem.value!=='') { //валидация на ввод только чисел\r\n\t\tisError(elem, false);\r\n\t} else { \r\n\t\tisError(elem, true);\r\n\t}\r\n}\r\n \r\nconst isRus = (elem) => {\r\n\tif (!/[^а-яА-Я]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только кирилицы\r\n\t\tisError(elem, false);\r\n\t} else { \r\n\t\tisError(elem, true);\r\n\t}\r\n}\r\n \r\nconst isError = (elem, bool) => {\r\n\tconst message = {\r\n\t\terrorMessage: \"bad validation\",\r\n\t\tsuccesMessage: \"good validation\"\r\n\t};\r\n\r\n\tif (bool === true) {\r\n\t\telem.classList.add('iserror');\r\n\t\telem.value = message.errorMessage;\r\n\t\tsetTimeout(()=>{elem.value = ''}, 1000);\r\n\t\tconsole.log(message.errorMessage);\r\n\t\treturn true;\r\n\t} else {\r\n\t\tif (elem.classList.contains('iserror')) {\r\n\t\t\telem.classList.remove('iserror');\r\n\t\t\tconsole.log(message.succesMessage);\r\n\t\t}\r\n\t\tconsole.log(message.succesMessage);\r\n\t\treturn false;\r\n\t}\r\n};\r\n\r\nconst scrollingToView = (targetElement,scrollOptions) => {\r\n\tconst elem = document.querySelector(`#${getNameOfBlock(targetElement)}`)\r\n\telem.scrollIntoView(scrollOptions);//\r\n }\n\n//# sourceURL=webpack:///./modules/functions.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/functions */ \"./modules/functions.js\");\n\r\n\r\nconst menu = () => {\r\n\tconst menu = document.querySelector('menu');\r\n\tconst menuItems = menu.querySelectorAll('ul>li>a');\r\n\tconst main = document.querySelector('main');\r\n\t\r\n\t\r\n\tconst handleMenu = () => {\r\n\t\tmenu.classList.toggle('active-menu');\r\n\t};\r\n\tmain.addEventListener('click', (e) => {\r\n\t\tconst target = e.target;\r\n\t\tif (menu.classList.contains('active-menu')) { \r\n\t\t\thandleMenu();\r\n\t\t}\r\n\t\tif (target.closest('.menu')) { \r\n\t\t\thandleMenu();\r\n\t\t}\r\n\t\tif (target.closest('a')) { \r\n\t\t\te.preventDefault();\r\n\t\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.scrollingToView)(target.parentElement, { behavior: \"smooth\" });\r\n\t\t}\r\n\t});\r\n\tmenu.addEventListener('click', (e) => { \r\n\t\te.preventDefault();\r\n\t\tconst target = e.target;\r\n\t\tif (target.closest('.active-menu')&&target!==menu) { \r\n\t\t\tif (!target.classList.contains('close-btn') && target.hasAttribute('href')) {\r\n\t\t\t\t(0,_modules_functions__WEBPACK_IMPORTED_MODULE_0__.scrollingToView)(target, { behavior: \"smooth\" });\r\n\t\t\t\thandleMenu();\r\n\t\t\t}\r\n\t\t\tif (target.classList.contains('close-btn')) {\r\n\t\t\t\thandleMenu();\r\n\t\t\t }\r\n\t\t}\r\n\t\t\r\n\t});\r\n\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/animation */ \"./modules/animation.js\");\n\r\n\r\n\r\nconst modal = () => {\r\n\tconst buttons = document.querySelectorAll('.popup-btn');\r\n\tconst modal = document.querySelector('.popup');\r\n\tconst screenWidth=window.innerWidth;\r\n\t\r\n\tbuttons.forEach(el => {\r\n\t\tel.addEventListener('click', () => {\r\n\t\t\t\r\n\t\t\tif (screenWidth > 768) {\r\n\t\t\t\t(0,_modules_animation__WEBPACK_IMPORTED_MODULE_0__.animationMoveLeft)('.popup-content', 0, 10,modal);\r\n\t\t\t} else { \r\n\t\t\t\tmodal.style.display = \"block\";\r\n\t\t\t}\r\n\t\t\t\r\n\t\t });\r\n\t});\r\n\r\n\tmodal.addEventListener('click', (e) => { \r\n\t\tconst target = e.target;\r\n\t\tif (!e.target.closest('.popup-content')||target.classList.contains('popup-close')) { \r\n\t\t\tif (screenWidth > 768) {\r\n\t\t\t\t(0,_modules_animation__WEBPACK_IMPORTED_MODULE_0__.animateRight)('.popup-content', 10, modal);\r\n\t\t\t} else { \r\n\t\t\t\tmodal.style.display = \"none\";\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t});\r\n\t\r\n };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../modules/dots */ \"./modules/dots.js\");\n\r\n\r\n\r\nconst slider = (sliderBlockClass, slidesClass) => {\r\n\t\r\n\t(0,_modules_dots__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tconst sliderBlock = document.querySelector(sliderBlockClass);\r\n\tconst slides = sliderBlock.querySelectorAll(slidesClass);\r\n\tconst dots =  sliderBlock.querySelectorAll('.dot');\r\n\tconst timeInterval = 2000;\r\n\tconst activeSliderClass = 'portfolio-item-active';\r\n\tconst dotsActiveClass = 'dot-active';\r\n\tlet currentSlide = 0;\r\n\tlet interval;\r\n\r\n\r\n\r\n\tconst prevSlide = (elems,index,strClass) => { \r\n\t\telems[index].classList.remove(strClass);\r\n\t};\r\n\r\n\tconst nextSlide = (elems,index,strClass) => { \r\n\t\telems[index].classList.add(strClass);\r\n\t};\r\n\r\n\tconst startSlide = (time = 1500) => {\r\n\t\t\t\t\t\r\n\t\tinterval=setInterval(autoSlide,time);\r\n\t };\r\n\r\n\tconst autoSlide = () => {\r\n\t\tprevSlide(slides,currentSlide,activeSliderClass);\r\n\t\tprevSlide(dots,currentSlide,dotsActiveClass);\r\n\t\tcurrentSlide++;\r\n\t\tif (currentSlide >= slides.length) { \r\n\t\t\tcurrentSlide = 0;\r\n\t\t}\r\n\t\tnextSlide(slides,currentSlide,activeSliderClass);\r\n\t\tnextSlide(dots,currentSlide,dotsActiveClass);\r\n\t};\r\n\t\r\n\tconst stopSlide = () => {\r\n\t\tclearInterval(interval);\r\n\t};\r\n\tconst createSlider = () => {\r\n\r\n\t\tsliderBlock.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tconst target = e.target;\r\n\t\t\tif (!target.matches('.dot,.portfolio-btn')) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tprevSlide(slides, currentSlide, activeSliderClass);\r\n\t\t\tprevSlide(dots, currentSlide, dotsActiveClass);\r\n\t\t\tif (target.matches('#arrow-right')) {\r\n\t\t\t\tcurrentSlide++;\r\n\t\t\t}\r\n\t\t\telse if (target.matches('#arrow-left')) {\r\n\t\t\t\tcurrentSlide--;\r\n\t\t\t}\r\n\t\t\telse if (target.classList.contains('dot')) {\r\n\t\t\t\tdots.forEach((el, index) => {\r\n\t\t\t\t\tif (target === el) {\r\n\t\t\t\t\t\tcurrentSlide = index;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\tif (currentSlide >= slides.length) {\r\n\t\t\t\tcurrentSlide = 0;\r\n\t\t\t}\r\n\t\t\tif (currentSlide < 0) {\r\n\t\t\t\tcurrentSlide = slides.length - 1;\r\n\t\t\t}\r\n\t\t\tnextSlide(slides, currentSlide, activeSliderClass);\r\n\t\t\tnextSlide(dots, currentSlide, dotsActiveClass);\r\n\t\t});\r\n\t\tsliderBlock.addEventListener('mouseenter', (e) => {\r\n\t\t\tif (e.target.matches('.dot,.portfolio-btn')) {\r\n\t\t\t\tstopSlide();\r\n\t\t\t}\r\n\t\t}, true);\r\n\t\tsliderBlock.addEventListener('mouseleave', (e) => {\r\n\t\t\tif (e.target.matches('.dot,.portfolio-btn')) {\r\n\t\t\t\tstartSlide(timeInterval);\r\n\t\t\t}\r\n\t\t}, true);\r\n\t\tstartSlide(timeInterval);\r\n\t};\r\n\t\r\n\tif (sliderBlock === null || sliderBlock === \"undefined\" || slides === null || slides === \"undefined\"||slides.length===0) {\r\n\t\tconsole.log(sliderBlock);\r\n\t\tconsole.log(slides);\r\n\t\treturn\r\n\t} else {\r\n\t\tcreateSlider();\r\n\t }\r\n\t\t\t\t\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\tconst tabContent = document.querySelectorAll('.service-tab');\r\n\tconst tabPanel = document.querySelector('.service-header');\r\n\tconst tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n\ttabPanel.addEventListener('click', (e) => { \r\n\t\tconst target = e.target;\r\n\r\n\t\tif (target.closest('.service-header-tab')) {\r\n\t\t\tconst tabsBtn = target.closest('.service-header-tab');\r\n\t\t\ttabs.forEach((tab, index) => {\r\n\t\t\t\tif (tab === tabsBtn) {\r\n\t\t\t\t\ttab.classList.add('active');\r\n\t\t\t\t\ttabContent[index].classList.remove('d-none');\r\n\t\t\t\t} else { \r\n\t\t\t\t\ttabContent[index].classList.add('d-none');\r\n\t\t\t\t\ttab.classList.remove('active');\r\n\t\t\t\t}\r\n\t\t\t });\r\n\t\t }\r\n\t});\r\n\r\n\r\n };\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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