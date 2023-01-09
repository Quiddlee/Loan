export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.messages = {
            success: "Thanks! We'll contact you soon.",
            failure: "Something went wrong...",
            loading: "Loading...",
        }
    }

    bindPostData(form) {
        form.addEventListener('submit', (event) => {
             event.preventDefault();

             const message = this.sayThanks(form, this.messages.loading);
             message.animate([
                 {opacity: 1},
                 {opacity: 0.1},
                 {opacity: 1}
             ], {
                duration: 3000,
                iterations: Infinity
             });

             const formData = new FormData(form);
             this.postData('assets/question.php', formData)
                 .then(data => {
                    console.log(data);
                    this.message = this.sayThanks(form, this.messages.success, this.message);
                 })
                .catch(data => {
                    console.log(data);
                    this.message = this.sayThanks(form, this.messages.failure, this.message);
                })
                .finally(() => {
                    form.reset();
                    this.classTimeoutId = setTimeout(() => {
                        this.message.classList.remove('fadeIn');
                        this.message.classList.add('fadeOut');
                    }, 3000);

                    this.prevElemTimeoutId = setTimeout(() => {
                        this.message.remove();
                    }, 4000);
                });

        });
    }

    sayThanks(form, message, prevElem = null) {
        try {
            clearInterval(this.prevElemTimeoutId);
            clearInterval(this.classTimeoutId);
            this.message.remove();
            prevElem.remove();
        } catch(e) {}

        this.message = document.createElement('div');
        this.message.style.cssText = `
            margin-top: 15px;
            font-size: 18px;
        `;
        this.message.textContent = message;
        this.message.classList.add('animated', 'fadeIn');
        form.appendChild(this.message);

        return this.message;
    }

    async postData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.text();
    }

    validateInput(input) {
        input.addEventListener('input', () => {
            let timerId = null;

            if (input.value.match(/[а-я]/gi)) {
                input.style.border = '1.5px solid red';
                timerId = setTimeout(() => input.style.border = '', 5000);
            }
            else {
                input.style.border = '';
                clearTimeout(timerId);
            }

            input.value = input.value.replace(/[а-я]/gi, '');
        });
    }

    init() {
        this.forms.forEach(form => {
            this.input = form.querySelector('[name="email"]');
            this.validateInput(this.input);
            this.bindPostData(form)
        });
    }
}