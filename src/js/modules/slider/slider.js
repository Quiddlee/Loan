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
        try {
            this.slides = Array.from(this.container.children).filter(elem => elem.tagName !== 'BUTTON');
        } catch(e){}
        this.buttons = document.querySelectorAll(buttons);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.classActive = classActive;
        this.animate = animate;
        this.autoPlay = autoPlay;
        this.slideIndex = 1;
    }
}