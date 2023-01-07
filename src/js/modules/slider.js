export default class Slider {
    constructor(page, buttons) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.buttons = document.querySelectorAll(buttons);
        this.slideIndex = 1;
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
                }, 3000)
            }
        } catch(e) {}

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
        } catch(e) {}

        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.plusSlides(1);
            });

            button.parentNode.previousElementSibling.addEventListener('click', (event) => {
                 event.preventDefault();
                 this.showSlides(this.slideIndex = 1);
            });
        });

        this.showSlides(this.slideIndex);
    }
}