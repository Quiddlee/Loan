export default class BindNextPageButtons {
    constructor(buttons) {
        this.btns = document.querySelectorAll(buttons);
    }

    bindBtns() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                 window.location.replace('modules.html');
            });
        });
    }

    init() {
        this.bindBtns();
    }
}