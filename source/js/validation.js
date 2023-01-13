// общие функции

const errorCreator = (message) => {
    let messageErrorContainer = document.createElement("div");
    messageErrorContainer.classList.add("invalid-message");
    messageErrorContainer.innerText = message;
    return messageErrorContainer;
}
const setErrorText = (input, errorMessage) => {
    input.classList.remove("modal__form__input--valid");
    const error = errorCreator(errorMessage);
    input.classList.add("modal__form__input--invalid");
    input.insertAdjacentElement("afterend", error);
    input.addEventListener("input", () => {
        error.remove();
        input.classList.remove("modal__form__input--invalid");
    })
}

const showValidInput = (input) => {
    input.classList.add("modal__form__input--valid");
}

//валидация формы входа//

(() => {
    const signIn = document.forms.signIn;
    
    signIn.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const email = signIn.elements.email;
        const password = signIn.elements.password;
        let error = {};

        if (email.value.length <= 0) {
            error.email = "This field is required";
        } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
            error.email = `Please enter a valid email address (your entry is not in the format "somebody@example.com")`;
        } else {
            showValidInput(email);
        }
        if (password.value.length <= 0) {
            error.password = "This field is required";
        } else {
            showValidInput(password);
        }

        if (Object.keys(error).length) {
            Object.keys(error).forEach((key) => {
                const messageError = error[key];
                const input = signIn.elements[key];
                setErrorText(input, messageError);
            })
            return;
        } else {
            console.log("Submitted");
            const data = {
                email: email.value,
                password: password.value
            }
            console.log(data);
        }
        
    })
})();

//валидация формы регистрации

(() => {
    const register = document.forms.register;

    register.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = register.elements.registerEmail;
        const name = register.elements.registerName;
        const surname = register.elements.surname;
        const password = register.elements.registerPassword;
        const repeatPassword = register.elements.repeatPassword;
        const location = register.elements.location;
        const age = register.elements.age;

        let error = {};

        if (email.value.length <= 0) {
            error.registerEmail = "This field is required";
        } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
            error.registerEmail = `Please enter a valid email address (your entry is not in the format "somebody@example.com")`;
        } else {
            showValidInput(email);
        }

        if (password.value.length <= 0) {
            error.registerPassword = "This field is required";
        } else if (password.value.length > 0 && password.value.length < 4) {
            error.registerPassword = "This passward is too short";
        } else {
            showValidInput(password);
        }

        if (name.value.length <= 0) {
            error.registerName = "This field is required";
        } else {
            showValidInput(name);
        }

        if (surname.value.length <= 0) {
            error.surname = "This field is required";
        } else {
            showValidInput(surname);
        }

        if (password.value !== repeatPassword.value) {
            error.repeatPassword = "The password doesn't match";
        } else if (repeatPassword.value.length <=0) {
            error.repeatPassword = "This field is required";
        } else {
            showValidInput(repeatPassword);
        }
        

        if (location.value.length <= 0) {
            error.location = "This field is required";
        } else {
            showValidInput(location);
        }

        if (age.value.length <= 0) {
            error.age = "This field is required";
        } else if (age.value <= 15) {
            error.age = "You must be 16 or older to register"
        } else {
            showValidInput(age);
        }

        if (Object.keys(error).length) {
            Object.keys(error).forEach((key) => {
                const messageError = error[key];
                const input = register.elements[key];
                setErrorText(input, messageError);
            })
            return;
        } else {
            console.log("Submitted");
            const data = {
                email: email.value,
                password: password.value,
                repeatPassword: repeatPassword.value,
                name: name.value,
                surname: surname.value,
                location: location.value,
                age: age.value
            }
            console.log(data);
        }

    })
})();

//валидация формы отправки сообщения

(() => {
    const messageForm = document.forms.message;

    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let error = {};

        const name = messageForm.elements.name;
        const subject = messageForm.elements.subject;
        const email = messageForm.elements.email;
        const phone = messageForm.elements.phone;
        const message = messageForm.elements.message;

        if (name.value.length <= 0) {
            error.name = "This field is required";
        } else {
            showValidInput(name);
        }

        if (subject.value.length <= 0) {
            error.subject = "This field is required";
        } else {
            showValidInput(subject);
        }

        if (email.value.length <= 0) {
            error.email = "This field is required";
        } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
            error.email = `Please enter a valid email address (your entry is not in the format "somebody@example.com")`;
        } else {
            showValidInput(email);
        }

        if (phone.value.length <= 0) {
            error.phone = "This field is required";
        } else if (!phone.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
            error.phone = `Please enter a valid phone (your entry is not in the format "+7 XXX XXX XX XX)"`;
        } else {
            showValidInput(phone);
        }

        if (Object.keys(error).length) {
            Object.keys(error).forEach((key) => {
                const messageError = error[key];
                const input = messageForm.elements[key];
                setErrorText(input, messageError);
            })
            return;
        } else {
            showValidInput(message);
            console.log("Submitted");
            const data = {
                name: name.value,
                subject: subject.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            }
            console.log(data);
        }

    })
})();