import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(buttons, nextBtns, prevBtns) {
        super(buttons);
        this.nextBtns = document.querySelectorAll(nextBtns);
        this.prevBtns = document.querySelectorAll(prevBtns);
        console.log(nextBtns, prevBtns);
        console.log(this.container);
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

    asideBtns(buttons, index) {
        console.log(buttons);
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(index);
            });
        });
    }

    render() {
        if (this.container) {
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

            // this.asideBtns(this.prevBtns, -1);
            // this.asideBtns(this.nextBtns, 1);

            // document.querySelectorAll('.prevmodule').forEach(elem => {
            //     elem.addEventListener('click', () => {
            //         this.plusSlides(-1);
            //     });
            // });

        }
    }
}