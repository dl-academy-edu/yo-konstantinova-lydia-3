//валидация формы входа//

const errorCreator = (message) => {
    let messageErrorContainer = document.createElement("div");
    messageErrorContainer.classList.add("invalid-message");
    messageErrorContainer.innerText = message;
    return messageErrorContainer;
}
const setErrorText = (input, errorMessage) => {
    const error = errorCreator(errorMessage);
    input.classList.add("modal__form__input--invalid");
    input.insertAdjacentElement("afterend", error);
    input.addEventListener("input", () => {
        error.remove();
        input.classList.remove("modal__form__input--invalid");
    })
}

let error = {
    empty: "This field is required",
    email: "Please enter a valid email address (your entry is not in the format 'somebody@example.com')",
    surname: "Please enter your surname",
    password: "This password is too short, please try again",
    repeat: "The password doesn't match. Please try again",
    phone: "Please enter a valid phone (your entry is not in the format'+7 XXX XXX XX XX)'"
};

(() => {
    const signIn = document.forms.signIn;
    const email = signIn.querySelector("input[type=email]");
    const password = signIn.querySelector("input[type=password]");

    signIn.addEventListener("submit", (e) => {
        e.preventDefault();
        if (email.value.length <= 0) {
            setErrorText(email, error.empty);
        } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
            setErrorText(email, error.email);
        } 
        if (password.value.length <=0) {
            setErrorText(password, error.empty);
        }
    })
})();

// валидация формы регистрации//

(() => {
    const register = document.forms.register;

    register.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = register.elements.registerEmail;
        const name = register.elements.registerName;
        const surname = register.elements.surname;
        const password = register.elements.password;
        const repeatPassword = register.elements.repeatPassword;
        const location = register.elements.location;
        const age = register.elements.age;

        if (email.value.length <= 0) {
            setErrorText(email, error.empty);
        } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
            setErrorText(email, error.email);
        } 
        if (password.value.length <=0) {
            setErrorText(password, error.empty);
        } else if (password.value.length <= 6) {
            setErrorText(password, error.password);
        }
        if (name.value.length <= 0) {
            setErrorText(name, error.empty);
        }
        if (surname.value.length <=0) {
            setErrorText(surname, error.empty);
        } else if (surname.value.length >=0 && surname.value.length <=2) {
            setErrorText(surname, error.surname);
        }
        if (password.value !== repeatPassword.value) {
            setErrorText(repeatPassword, error.repeat);
        } else if (repeatPassword.value <=0) {
            setErrorText(repeatPassword, error.empty);
        }
        if (location.value <= 0) {
            setErrorText(location, error.empty);
        }
        if (age.value <= 0) {
            setErrorText(age, error.empty);
        }

        const data = {
            email: email.value,
            password: password.value,
            name: name.value,
            surname: surname.value,
            location: location.value,
            age: age.value,
        }
        console.log(data);
    })
})();

// валидация формы отправки сообщения//

(() => {
    const messageForm = document.forms.message;

    messageForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = messageForm.elements.name;
        const subject = messageForm.elements.subject;
        const email = messageForm.elements.email;
        const phone = messageForm.elements.phone;

        if (email.value.length <= 0) {
            setErrorText(email, error.empty);
        } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
            setErrorText(email, error.email);
        } 
        if (name.value.length <= 0) {
            setErrorText(name, error.empty);
        }
        if (subject.value.length <= 0) {
            setErrorText(subject, error.empty);
        }
        if (phone.value.length <= 0) {
            setErrorText(phone, error.empty);
        } else if (!phone.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
            setErrorText(phone, error.phone);
        } 
    })
})();