import animations from "./animations";

export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);
        this.messages = {
            success: "Thanks! We'll contact you soon!",
            failure: "Something went wrong...",
            loading: "Loading...",
        }
        this.path = 'assets/question.php';
    }

    bindPostData(form) {
        form.addEventListener('submit', (event) => {
             event.preventDefault();

             const message = this.sayThanks(form, this.messages.loading);
             animations.loading(message);

             const formData = new FormData(form);
             this.postData(this.path, formData)
                 .then(data => {
                    console.log(data);
                    this.message = this.sayThanks(form, this.messages.success, this.message);
                 })
                .catch(() => {
                    this.message = this.sayThanks(form, this.messages.success, this.message);
                    // this.message = this.sayThanks(form, this.messages.failure, this.message);
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
            margin-top: 26px;
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

    validateMailInput(input) {
        input.addEventListener('keypress', (event) => {
            let timerId = null;

            if (event.key.match(/[^a-z 0-9 @ \.]/gi)) {
                event.preventDefault();

                input.style.border = '1.5px solid red';
                timerId = setTimeout(() => input.style.border = '', 5000);
            }
            else {
                input.style.border = '';
                clearTimeout(timerId);
            }
        });
    }

    initMask() {
        const setCursorPosition = (position, element) => {
            element.focus();

            if (element.setSelectionRange) {
                element.setSelectionRange(position, position);
            }

            if (element.createTextRange) {
                const range = element.createTextRange();
                range.collapse(true);
                range.moveEnd('character', position);
                range.moveStart('character', position);
                range.select();
            }
        };

        function createMask(event) {
            const matrix = '+1 (___) ___-__ __';
            const deffault = matrix.replace(/\D/g, '');
            let value = this.value.replace(/\D/g, '');
            let i = 0;

            if (deffault.length >= value.length || +value[0] !== +matrix[1]) value = deffault;

            this.value = matrix.replace(/./g, function(number) {
                return /[_\d]/.test(number) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : number;
            });

            if (event.type === 'blur') {
                if (this.value.length === 2) this.value = '';
            }

            if (event.type === 'focus') {
                setCursorPosition(this.value.length, this);
            }
        }

        const inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    init() {
        this.forms.forEach(form => {
            this.input = form.querySelector('[name="email"]');
            this.validateMailInput(this.input);
            this.bindPostData(form)
        });

        this.initMask();
    }
}