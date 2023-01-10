import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, next, prev, classActive, animate, autoPlay) {
        super(container, next, prev, classActive, animate, autoPlay);
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

    filterAnArray(value) {
        delete this.slides[value];
        this.slides = this.slides.filter(elem => elem !== undefined);
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
        let paused = setInterval(() => this.nextSLide(), 5000);

        [this.container, this.next.parentNode].forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                clearTimeout(paused);
            });

            elem.addEventListener('mouseleave', () => {
                paused = setInterval(() => this.nextSLide(), 5000);
            });
        });
    }

    init() {
        try {

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
        } catch(e){}
    }
}