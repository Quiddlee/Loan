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
        container.querySelector('.plus').addEventListener('click', () => {
            cards[counter].style.display = 'flex';
            counter++;

            if (counter === cards.length - 1) {
                cards[cards.length - 1].remove();
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