export default class Slider {
    constructor({container = null,
        buttons = null,
        next = null,
        prev = null,
        classActive = null,
        animate,
        autoPlay
    } = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.buttons = document.querySelectorAll(buttons);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.classActive = classActive;
        this.animate = animate;
        this.autoPlay = autoPlay;
        this.slideIndex = 1;
    }
}