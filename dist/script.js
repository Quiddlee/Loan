/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ \"./src/js/modules/slider/slider-main.js\");\n/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ \"./src/js/modules/slider/slider-mini.js\");\n/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ \"./src/js/modules/playVideo.js\");\n/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/difference */ \"./src/js/modules/difference.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./src/js/modules/forms.js\");\n/* harmony import */ var _modules_showInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showInfo */ \"./src/js/modules/showInfo.js\");\n/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/download */ \"./src/js/modules/download.js\");\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    buttons: '.next',\n    container: '.page'\n  });\n  slider.render();\n  const modulePageSlider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    buttons: '.sidecontrol__controls .next',\n    container: '.moduleapp'\n  }, '.nextmodule', '.prevmodule');\n  modulePageSlider.render();\n  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    container: '.showup__content-slider',\n    next: '.showup__next',\n    prev: '.showup__prev',\n    classActive: 'card-active',\n    animate: true\n  });\n  showUpSlider.init();\n  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    container: '.modules__content-slider',\n    next: '.modules__info-btns .slick-next',\n    prev: '.modules__info-btns .slick-prev',\n    classActive: 'card-active',\n    animate: true,\n    autoPlay: true\n  });\n  modulesSlider.init();\n  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    container: '.feed__slider',\n    next: '.feed__slider .slick-next',\n    prev: '.feed__slider .slick-prev',\n    classActive: 'feed__item-active'\n  });\n  feedSlider.init();\n  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.showup .play', '.overlay').init();\n  new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.module__video-item .play', '.overlay').init();\n  new _modules_difference__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.officerold', '.officernew', '.officer__card-item').init();\n  new _modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('.form').init();\n  new _modules_showInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('.plus').init();\n  new _modules_download__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('.download').init();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Difference; });\nclass Difference {\n  constructor(oldOfficer, newOfficer, cards) {\n    try {\n      this.oldOfficer = document.querySelector(oldOfficer);\n      this.newOfficer = document.querySelector(newOfficer);\n      this.oldCards = this.oldOfficer.querySelectorAll(cards);\n      this.newCards = this.newOfficer.querySelectorAll(cards);\n      this.oldCounter = 0;\n      this.newCounter = 0;\n    } catch (e) {}\n  }\n  bindTriggers(container, cards, counter) {\n    container.querySelector('.plus').addEventListener('click', () => {\n      cards[counter].style.display = 'flex';\n      counter++;\n      if (counter === cards.length - 1) {\n        cards[cards.length - 1].remove();\n      }\n    });\n  }\n  hideItems() {\n    [this.oldCards, this.newCards].forEach(elem => {\n      elem.forEach((card, i, arr) => {\n        if (i !== arr.length - 1) {\n          card.style.display = 'none';\n        }\n      });\n    });\n  }\n  init() {\n    try {\n      this.hideItems();\n      this.bindTriggers(this.oldOfficer, this.oldCards, this.oldCounter);\n      this.bindTriggers(this.newOfficer, this.newCards, this.newCounter);\n    } catch (e) {}\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/difference.js?");

/***/ }),

/***/ "./src/js/modules/download.js":
/*!************************************!*\
  !*** ./src/js/modules/download.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Download; });\nclass Download {\n  constructor(triggers) {\n    this.triggers = document.querySelectorAll(triggers);\n    this.path = 'assets/img/mainbg.jpg';\n  }\n  downloadItem(path) {\n    const element = document.createElement('a');\n    element.setAttribute('href', path);\n    element.setAttribute('download', 'nice_picture');\n    element.style.display = 'none';\n    document.body.appendChild(element);\n    element.click();\n    document.body.removeChild(element);\n  }\n  init() {\n    this.triggers.forEach(elem => {\n      elem.addEventListener('click', () => {\n        this.downloadItem(this.path);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/download.js?");

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Form; });\nclass Form {\n  constructor(forms) {\n    this.forms = document.querySelectorAll(forms);\n    this.messages = {\n      success: \"Thanks! We'll contact you soon!\",\n      failure: \"Something went wrong...\",\n      loading: \"Loading...\"\n    };\n    this.path = 'assets/question.php';\n  }\n  bindPostData(form) {\n    form.addEventListener('submit', event => {\n      event.preventDefault();\n      const message = this.sayThanks(form, this.messages.loading);\n      message.animate([{\n        opacity: 1\n      }, {\n        opacity: 0.1\n      }, {\n        opacity: 1\n      }], {\n        duration: 3000,\n        iterations: Infinity\n      });\n      const formData = new FormData(form);\n      this.postData(this.path, formData).then(data => {\n        console.log(data);\n        this.message = this.sayThanks(form, this.messages.success, this.message);\n      }).catch(() => {\n        this.message = this.sayThanks(form, this.messages.failure, this.message);\n      }).finally(() => {\n        form.reset();\n        this.classTimeoutId = setTimeout(() => {\n          this.message.classList.remove('fadeIn');\n          this.message.classList.add('fadeOut');\n        }, 3000);\n        this.prevElemTimeoutId = setTimeout(() => {\n          this.message.remove();\n        }, 4000);\n      });\n    });\n  }\n  sayThanks(form, message) {\n    let prevElem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n    try {\n      clearInterval(this.prevElemTimeoutId);\n      clearInterval(this.classTimeoutId);\n      this.message.remove();\n      prevElem.remove();\n    } catch (e) {}\n    this.message = document.createElement('div');\n    this.message.style.cssText = `\n            margin-top: 15px;\n            font-size: 18px;\n        `;\n    this.message.textContent = message;\n    this.message.classList.add('animated', 'fadeIn');\n    form.appendChild(this.message);\n    return this.message;\n  }\n  async postData(url, data) {\n    const res = await fetch(url, {\n      method: 'POST',\n      body: data\n    });\n    if (!res.ok) {\n      throw new Error(`Could not fetch ${url}, status: ${res.status}`);\n    }\n    return await res.text();\n  }\n  validateMailInput(input) {\n    input.addEventListener('keypress', event => {\n      let timerId = null;\n      if (event.key.match(/[^a-z 0-9 @ \\.]/gi)) {\n        event.preventDefault();\n        input.style.border = '1.5px solid red';\n        timerId = setTimeout(() => input.style.border = '', 5000);\n      } else {\n        input.style.border = '';\n        clearTimeout(timerId);\n      }\n    });\n  }\n  initMask() {\n    const setCursorPosition = (position, element) => {\n      element.focus();\n      if (element.setSelectionRange) {\n        element.setSelectionRange(position, position);\n      }\n      if (element.createTextRange) {\n        const range = element.createTextRange();\n        range.collapse(true);\n        range.moveEnd('character', position);\n        range.moveStart('character', position);\n        range.select();\n      }\n    };\n    function createMask(event) {\n      const matrix = '+1 (___) ___-__ __';\n      const deffault = matrix.replace(/\\D/g, '');\n      let value = this.value.replace(/\\D/g, '');\n      let i = 0;\n      if (deffault.length >= value.length || +value[0] !== +matrix[1]) value = deffault;\n      this.value = matrix.replace(/./g, function (number) {\n        return /[_\\d]/.test(number) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : number;\n      });\n      if (event.type === 'blur') {\n        if (this.value.length === 2) this.value = '';\n      }\n      if (event.type === 'focus') {\n        setCursorPosition(this.value.length, this);\n      }\n    }\n    const inputs = document.querySelectorAll('[name=\"phone\"]');\n    inputs.forEach(input => {\n      input.addEventListener('input', createMask);\n      input.addEventListener('focus', createMask);\n      input.addEventListener('blur', createMask);\n    });\n  }\n  init() {\n    this.forms.forEach(form => {\n      this.input = form.querySelector('[name=\"email\"]');\n      this.validateMailInput(this.input);\n      this.bindPostData(form);\n    });\n    this.initMask();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/forms.js?");

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoPlayer; });\nclass VideoPlayer {\n  constructor(triggers, popup) {\n    this.buttons = document.querySelectorAll(triggers);\n    this.popup = document.querySelector(popup);\n    this.close = this.popup.querySelector('.close');\n    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);\n  }\n  bindTriggers() {\n    this.buttons.forEach((button, i) => {\n      try {\n        const blockedElem = button.closest('.module__video-item').nextElementSibling;\n        if (i % 2 === 0) {\n          blockedElem.setAttribute('data-disabled', 'true');\n        }\n      } catch (e) {}\n      button.addEventListener('click', () => {\n        if (!button.closest('.module__video-item') || button.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {\n          this.activeBtn = button;\n          if (document.querySelector('iframe#frame')) {\n            this.popup.style.display = 'flex';\n            if (this.path !== button.getAttribute('data-url')) {\n              this.path = button.getAttribute('data-url');\n              this.player.loadVideoById({\n                videoId: this.path\n              });\n            }\n          } else {\n            this.path = button.getAttribute('data-url');\n            this.createPlayer(this.path);\n          }\n        }\n      });\n    });\n  }\n  bindCloseButton() {\n    this.close.addEventListener('click', () => {\n      this.popup.style.display = 'none';\n      this.player.stopVideo();\n    });\n  }\n  createPlayer(url) {\n    this.player = new YT.Player('frame', {\n      height: '100%',\n      width: '100%',\n      videoId: url,\n      events: {\n        'onStateChange': this.onPlayerStateChange\n      }\n    });\n    this.popup.style.display = 'flex';\n  }\n  onPlayerStateChange(state) {\n    try {\n      const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;\n      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);\n      if (state.data === 0) {\n        if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {\n          blockedElem.querySelector('.play__circle').classList.remove('closed');\n          blockedElem.querySelector('svg').remove();\n          blockedElem.querySelector('.play__circle').appendChild(playBtn);\n          blockedElem.querySelector('.play__text').textContent = 'play video';\n          blockedElem.querySelector('.play__circle').classList.remove('attention');\n          blockedElem.style.opacity = 1;\n          blockedElem.style.filter = 'none';\n          blockedElem.setAttribute('data-disabled', 'false');\n        }\n      }\n    } catch (e) {}\n  }\n  init() {\n    if (this.buttons.length > 0) {\n      const tag = document.createElement('script');\n      tag.src = \"https://www.youtube.com/iframe_api\";\n      const firstScriptTag = document.getElementsByTagName('script')[0];\n      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\n      this.bindTriggers();\n      this.bindCloseButton();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/playVideo.js?");

/***/ }),

/***/ "./src/js/modules/showInfo.js":
/*!************************************!*\
  !*** ./src/js/modules/showInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShowInfo; });\nclass ShowInfo {\n  constructor(triggers) {\n    this.triggers = document.querySelectorAll(triggers);\n  }\n  bindTriggers() {\n    this.triggers.forEach(elem => {\n      const content = elem.parentElement.nextElementSibling;\n      content.style.cssText = `\n                margin: 0;\n                position: relative;\n                display: block;\n                height: 0;\n                opacity: 0;\n                bottom: -10px;\n                overflow: hidden;\n            `;\n      elem.addEventListener('click', () => {\n        elem.animate([{\n          scale: 1\n        }, {\n          scale: 0.8\n        }, {\n          scale: 1\n        }], {\n          duration: 300\n        });\n        if (content.style.opacity === '0') {\n          content.style.cssText = `\n                        position: relative;\n                        display: block;\n                        height: 100px;\n                        opacity: 1;\n                        bottom: 0px;  \n                        overflow: visible;\n                    `;\n        } else {\n          content.style.cssText = `\n                        margin: 0;\n                        position: relative;\n                        display: block;\n                        height: 0px;\n                        opacity: 0;\n                        bottom: -10px;\n                        overflow: hidden;\n                    `;\n        }\n      });\n    });\n  }\n  init() {\n    this.bindTriggers();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/showInfo.js?");

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainSlider; });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/modules/slider/slider.js\");\n\nclass MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(buttons, nextBtns, prevBtns) {\n    super(buttons);\n    this.nextBtns = document.querySelectorAll(nextBtns);\n    this.prevBtns = document.querySelectorAll(prevBtns);\n  }\n  showSlides(whichSlide) {\n    if (whichSlide > this.slides.length) {\n      this.slideIndex = 1;\n    }\n    if (whichSlide < 1) {\n      this.slideIndex = this.slides.length;\n    }\n    try {\n      if (whichSlide === 3) {\n        this.hanson.style.cssText = `\n                    height: 0px;\n                    opacity: 0;\n                    bottom: -170px;\n                `;\n        setTimeout(() => {\n          this.hanson.style.cssText = `\n                    transition: 1s all;\n                    height: 164px;\n                    opacity: 1;\n                    bottom: 0px;\n                    `;\n        }, 3000);\n      }\n    } catch (e) {}\n    Array.from(this.slides).forEach(slide => {\n      slide.style.display = 'none';\n    });\n    this.slides[this.slideIndex - 1].style.display = 'block';\n  }\n  plusSlides(whichSlide) {\n    this.showSlides(this.slideIndex += whichSlide);\n  }\n  bindTringgers() {\n    this.buttons.forEach(button => {\n      button.addEventListener('click', () => {\n        this.plusSlides(1);\n      });\n      button.parentNode.previousElementSibling.addEventListener('click', event => {\n        event.preventDefault();\n        this.showSlides(this.slideIndex = 1);\n      });\n    });\n    [this.nextBtns, this.prevBtns].forEach((elem, i, arr) => {\n      let slide;\n      if (elem === arr[0]) slide = 1;else slide = -1;\n      elem.forEach(btn => {\n        btn.addEventListener('click', event => {\n          event.stopPropagation();\n          event.preventDefault();\n          this.plusSlides(slide);\n        });\n      });\n    });\n  }\n  render() {\n    if (this.container) {\n      try {\n        this.hanson = document.querySelector('.hanson');\n      } catch (e) {}\n      this.showSlides(this.slideIndex);\n      this.bindTringgers();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/slider/slider-main.js?");

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MiniSlider; });\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/js/modules/slider/slider.js\");\n\nclass MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(container, next, prev, classActive, animate, autoPlay) {\n    super(container, next, prev, classActive, animate, autoPlay);\n  }\n  decorizeSlides() {\n    Array.from(this.slides).forEach(slide => {\n      slide.classList.remove(this.classActive);\n      if (this.animate) {\n        slide.querySelector('.card__title').style.opacity = '0.4';\n        slide.querySelector('.card__controls-arrow').style.opacity = '0';\n      }\n    });\n    this.slides[0].classList.add(this.classActive);\n    if (this.animate) {\n      this.slides[0].querySelector('.card__title').style.opacity = '1';\n      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';\n    }\n  }\n  filterAnArray(value) {\n    delete this.slides[value];\n    this.slides = this.slides.filter(elem => elem !== undefined);\n  }\n  nextSLide() {\n    this.container.appendChild(this.slides[0]);\n    this.slides.push(this.slides[0]);\n    this.filterAnArray(0);\n    this.decorizeSlides();\n  }\n  bindTriggers() {\n    this.next.addEventListener('click', () => this.nextSLide());\n    this.prev.addEventListener('click', () => {\n      const active = this.slides[this.slides.length - 1];\n      this.container.insertBefore(active, this.slides[0]);\n      this.slides.unshift(active);\n      this.filterAnArray(this.slides.length - 1);\n      this.decorizeSlides();\n    });\n  }\n  hoverToStopAutoPlay() {\n    let paused = setInterval(() => this.nextSLide(), 5000);\n    [this.container, this.next.parentNode].forEach(elem => {\n      elem.addEventListener('mouseenter', () => {\n        clearTimeout(paused);\n      });\n      elem.addEventListener('mouseleave', () => {\n        paused = setInterval(() => this.nextSLide(), 5000);\n      });\n    });\n  }\n  init() {\n    try {\n      this.container.style.cssText = `\n            display: flex;\n            flex-wrap: wrap;\n            overflow: hidden;\n            align-items: flex-start;\n            `;\n      this.bindTriggers();\n      this.decorizeSlides();\n      if (this.autoPlay) {\n        this.hoverToStopAutoPlay();\n      }\n    } catch (e) {}\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/slider/slider-mini.js?");

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\nclass Slider {\n  constructor() {\n    let {\n      container = null,\n      buttons = null,\n      next = null,\n      prev = null,\n      classActive = null,\n      animate,\n      autoPlay\n    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.container = document.querySelector(container);\n    try {\n      this.slides = Array.from(this.container.children).filter(elem => elem.tagName !== 'BUTTON');\n    } catch (e) {}\n    this.buttons = document.querySelectorAll(buttons);\n    this.prev = document.querySelector(prev);\n    this.next = document.querySelector(next);\n    this.classActive = classActive;\n    this.animate = animate;\n    this.autoPlay = autoPlay;\n    this.slideIndex = 1;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/slider/slider.js?");

/***/ })

/******/ });