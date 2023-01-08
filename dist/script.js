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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider/slider-main */ "./src/js/modules/slider/slider-main.js");
/* harmony import */ var _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider/slider-mini */ "./src/js/modules/slider/slider-mini.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");



window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    buttons: '.next',
    container: '.page'
  });
  slider.render();
  const showUpSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev',
    classActive: 'card-active',
    animate: true
  });
  showUpSlider.init();
  const modulesSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    classActive: 'card-active',
    animate: true,
    autoPlay: true
  });
  modulesSlider.init();
  const feedSlider = new _modules_slider_slider_mini__WEBPACK_IMPORTED_MODULE_1__["default"]({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    classActive: 'feed__item-active'
  });
  feedSlider.init();
  const player = new _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"]('.showup .play', '.overlay');
  player.init();
});

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoPlayer; });
class VideoPlayer {
  constructor(triggers, popup) {
    this.buttons = document.querySelectorAll(triggers);
    this.popup = document.querySelector(popup);
    this.close = this.popup.querySelector('.close');
  }
  bindTriggers() {
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        if (document.querySelector('iframe#frame')) {
          this.popup.style.display = 'flex';
        } else {
          const path = button.getAttribute('data-url');
          this.createPlayer(path);
        }
      });
    });
  }
  bindCloseButton() {
    this.close.addEventListener('click', () => {
      this.popup.style.display = 'none';
      this.player.stopVideo();
    });
  }
  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: url
    });
    console.log(this.player);
    this.popup.style.display = 'flex';
  }
  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.bindTriggers();
    this.bindCloseButton();
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-main.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-main.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(buttons) {
    super(buttons);
  }
  showSlides(whichSlide) {
    if (whichSlide > this.slides.length) {
      this.slideIndex = 1;
    }
    if (whichSlide < 1) {
      this.slideIndex = this.slides.length;
    }
    try {
      if (whichSlide === 3) {
        this.hanson.style.cssText = `
                    height: 0px;
                    opacity: 0;
                    bottom: -170px;
                `;
        setTimeout(() => {
          this.hanson.style.cssText = `
                    transition: 1s all;
                    height: 164px;
                    opacity: 1;
                    bottom: 0px;
                    `;
        }, 3000);
      }
    } catch (e) {}
    Array.from(this.slides).forEach(slide => {
      slide.style.display = 'none';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
  }
  plusSlides(whichSlide) {
    this.showSlides(this.slideIndex += whichSlide);
  }
  render() {
    try {
      this.hanson = document.querySelector('.hanson');
    } catch (e) {}
    this.buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.plusSlides(1);
      });
      button.parentNode.previousElementSibling.addEventListener('click', event => {
        event.preventDefault();
        this.showSlides(this.slideIndex = 1);
      });
    });
    this.showSlides(this.slideIndex);
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider-mini.js":
/*!**********************************************!*\
  !*** ./src/js/modules/slider/slider-mini.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MiniSlider; });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/slider/slider.js");

class MiniSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(container, next, prev, classActive, animate, autoPlay) {
    super(container, next, prev, classActive, animate, autoPlay);
  }
  filterAnArray(value) {
    delete this.slides[value];
    this.slides = this.slides.filter(elem => elem !== undefined);
  }
  decorizeSlides() {
    Array.from(this.slides).forEach(slide => {
      slide.classList.remove(this.classActive);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }
    });
    this.slides[0].classList.add(this.classActive);
    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }
  nextSLide() {
    this.container.appendChild(this.slides[0]);
    this.slides.push(this.slides[0]);
    this.filterAnArray(0);
    this.decorizeSlides();
  }
  bindTriggers() {
    this.next.addEventListener('click', () => this.nextSLide());
    this.prev.addEventListener('click', () => {
      const active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.slides.unshift(active);
      this.filterAnArray(this.slides.length - 1);
      this.decorizeSlides();
    });
  }
  hoverToStopAutoPlay() {
    let paused = setInterval(() => this.nextSLide(), 1000);
    [this.container, this.next.parentNode].forEach(elem => {
      elem.addEventListener('mouseenter', () => {
        clearTimeout(paused);
      });
    });
    [this.container, this.next.parentNode].forEach(elem => {
      elem.addEventListener('mouseleave', () => {
        paused = setInterval(() => this.nextSLide(), 1000);
      });
    });
  }
  init() {
    this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
    this.bindTriggers();
    this.decorizeSlides();
    if (this.autoPlay) {
      this.hoverToStopAutoPlay();
    }
  }
}

/***/ }),

/***/ "./src/js/modules/slider/slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/slider/slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
class Slider {
  constructor() {
    let {
      container = null,
      buttons = null,
      next = null,
      prev = null,
      classActive = null,
      animate,
      autoPlay
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.container = document.querySelector(container);
    this.slides = Array.from(this.container.children).filter(elem => elem.tagName !== 'BUTTON');
    this.buttons = document.querySelectorAll(buttons);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.classActive = classActive;
    this.animate = animate;
    this.autoPlay = autoPlay;
    this.slideIndex = 1;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map