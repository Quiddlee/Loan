import animations from "./animations";

export default class VideoPlayer {
    constructor(triggers, popup) {
        this.buttons = document.querySelectorAll(triggers);
        this.popup = document.querySelector(popup);
        this.close = this.popup.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    bindTriggers() {
        this.buttons.forEach((button, i) => {
            try {
                const blockedElem = button.closest('.module__video-item').nextElementSibling;

                if (i % 2 === 0) {
                    blockedElem.setAttribute('data-disabled', 'true');
                }
            } catch(e){}

            button.addEventListener('click', () => {
                    if (!button.closest('.module__video-item') || button.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                        this.activeBtn = button;

                        animations.popupFadeIn(this.popup);
                        animations.popupContentScaleIn(this.popup.firstElementChild);

                        if (document.querySelector('iframe#frame')) {
                            this.popup.style.display = 'flex';
                            setTimeout(() => {
                                if (this.path !== button.getAttribute('data-url')) {
                                    this.path = button.getAttribute('data-url');
                                    this.player.loadVideoById({videoId: this.path});
                                }
                            }, 290);

                        }
                        else {
                            this.path = button.getAttribute('data-url');
                            this.createPlayer(this.path);
                        }
                    }
            });
        });
    }

    bindCloseButton(element, afterClickTimeout = null) {
        const closePopup = () => {
            animations.popupFadeOut(this.popup);
            animations.popupContentScaleOut(this.popup.firstElementChild);

            setTimeout(() => {
                this.popup.style.display = 'none';
            }, 340);

            this.player.stopVideo();

            element.removeEventListener('click', closePopup);
            this.bindCloseButton(element, 500);
        }

        setTimeout(() => {
            element.addEventListener('click', closePopup);
        }, afterClickTimeout);
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });

        this.popup.style.display = 'flex';
    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

            if (state.data === 0) {
                if (blockedElem.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElem.querySelector('.play__circle').classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedElem.querySelector('.play__circle').appendChild(playBtn);
                    blockedElem.querySelector('.play__text').textContent = 'play video';
                    blockedElem.querySelector('.play__circle').classList.remove('attention');
                    blockedElem.style.opacity = 1;
                    blockedElem.style.filter = 'none';

                    blockedElem.setAttribute('data-disabled', 'false');
                }
            }
        } catch(e){}
    }

    init() {
        if (this.buttons.length > 0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.bindTriggers();
            this.bindCloseButton(this.close);
            this.bindCloseButton(this.popup);
        }
    }
}