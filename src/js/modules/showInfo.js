import animations from "./animations";

export default class ShowInfo {
    constructor(triggers) {
        this.triggers = document.querySelectorAll(triggers);
    }

    bindTriggers() {
        try {
            this.triggers.forEach(elem => {
                const content = elem.parentElement.nextElementSibling;
                content.style.cssText = `
                margin: 0;
                position: relative;
                display: block;
                height: 0;
                opacity: 0;
                bottom: -10px;
                overflow: hidden;
            `;

                elem.addEventListener('click', () => {
                    animations.btnPress(elem);

                    if (content.style.opacity === '0') {
                        content.style.cssText = `
                        position: relative;
                        display: block;
                        height: 100px;
                        opacity: 1;
                        bottom: 0px;  
                        overflow: visible;
                    `;
                    }
                    else {
                        content.style.cssText = `
                        margin: 0;
                        position: relative;
                        display: block;
                        height: 0px;
                        opacity: 0;
                        bottom: -10px;
                        overflow: hidden;
                    `;
                    }
                });
            });
        } catch(e){}
    }

    init() {
        this.bindTriggers();
    }
}