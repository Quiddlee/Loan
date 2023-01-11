import animations from "./animations";

export default class Difference {
    constructor(oldOfficer, newOfficer, cards) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldCards = this.oldOfficer.querySelectorAll(cards);
            this.newCards = this.newOfficer.querySelectorAll(cards);
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e){}
    }

    bindTriggers(container, cards, counter) {
        const btn = container.querySelector('.plus');

        btn.addEventListener('click', () => {
            animations.btnPress(btn);

            if (counter !== cards.length - 1) {
                cards[counter].style.display = 'flex';
                animations.cardsIn(cards[counter]);
                animations.cardsDown(cards[cards.length - 1]);

                counter++;
            }

            if (counter === cards.length - 1) {
                animations.cardsOut(cards[cards.length - 1]);

                setTimeout(() => {
                    cards[cards.length - 1].remove();
                }, 190);
            }
        });
    }

    hideItems() {
        [this.oldCards, this.newCards].forEach(elem => {
            elem.forEach((card, i, arr) => {
                if (i !== arr.length - 1) {
                    card.style.display = 'none';
                }
            });
        });
    }

    init() {
        try {
            this.hideItems();
            this.bindTriggers(this.oldOfficer, this.oldCards, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newCards, this.newCounter);
        } catch(e){}
    }
}