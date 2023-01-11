const animations = {
    cardsIn(element) {
        element.animate([
            {
                bottom: '5px',
                height: '40px',
                opacity: 0
            },
            {
                bottom: '1px',
                height: '80px',
                opacity: 1
            },
            {
                bottom: 0,
                height: '83px'
            }
        ], {
            duration: 500
        });
    },
    cardsDown(element) {
        element.animate([
            {
                bottom: '50px',
                height: '73px'
            },
            {
                height: '60px'
            },
            {
                bottom: '3px',
                height: '79px'
            },
            {
                bottom: 0,
                height: '83px'
            }
        ], {
            duration: 500
        });
    },
    cardsOut(element) {
        element.animate([
            {
                bottom: '50px',
                height: '83px',
                opacity: 1
            },
            {
                bottom: '50px',
                opacity: 0
            },
            {
                bottom: '50px',
                height: '40px',
                opacity: 0
            }
        ], {
            duration: 200
        });
    },
    btnPress(element) {
        element.animate([
                {scale: 1},
                {scale: 0.8},
                {scale: 1}
            ], {
                duration: 300
            });
    },
    loading(element) {
        element.animate([
            {opacity: 1},
            {opacity: 0.1},
            {opacity: 1}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    },
    popupFadeIn(element) {
        element.animate([
            {
                opacity: 0
            },
            {
                opacity: 0.8
            },
            {
                opacity: 1
            }
        ], {
            duration: 300
        });
    },
    popupContentScaleIn(element) {
        element.animate([
            {
                scale: 1.1
            },
            {
                scale: 1.02
            },
            {
                scale: 1
            }
        ], {
            duration: 300
        });
    },
    popupFadeOut(element) {
        element.animate([
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ], {
            duration: 350
        });
    },
    popupContentScaleOut(element) {
        element.animate([
            {
                scale: 1
            },
            {
                scale: 1.15
            },
            {
                scale: 1.3
            }
        ], {
            duration: 350
        });
    },
};

export default animations;