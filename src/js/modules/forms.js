export default class Form {
    constructor(form, input) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.messages = {
            success: "Thanks! We'll contact you soon.",
            failure: "Something went wrong...",
            loading: "Loading...",
        }
    }

    postData(form) {
        form.addEventListener('submit', (event) => {
             event.preventDefault();

             this.load = this.sayThanks(form, this.messages.loading);

             const formData = new FormData(form);
             this.request('assets/question.php', formData)
                 .then(data => {
                    console.log(data);
                    this.sayThanks(form, this.messages.success, this.load);
                 })
                .catch(data => {
                    console.log(data);
                    this.sayThanks(form, this.messages.failure, this.load);
                })
                .finally(() => {
                   form.reset();
                });

        });
    }

    sayThanks(form, message, removeLoad = null) {
        if (removeLoad) this.load.remove();

        this.load = document.createElement('div');
        this.load.style.cssText = `
            margin-top: 15px;
            font-size: 15px;
        `;
        this.load.textContent = message;
        this.load.classList.add('animated', 'fadeIn');
        form.appendChild(this.load);

        setTimeout(() => {
            this.load.classList.remove('fadeIn');
            this.load.classList.add('fadeOut');
        }, 3000);

        setTimeout(() => {
            this.load.remove()
        }, 4000);

        return this.load;
    }

    async request(url, data) {
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
        this.postData(this.form);
        this.validateInput(this.input);
    }
}