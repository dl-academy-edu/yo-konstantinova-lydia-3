const signIn = document.forms.signIn;
const email = signIn.querySelector("input[type=email]");
const password = signIn.querySelector("input[type=password]");
const errorCreator = (message) => {
    let messageErrorContainer = document.createElement("div");
    messageErrorContainer.classList.add("invalid-message--email");
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
const register = document.forms.register;
const registerEmail = register.querySelector("input[type=email");

let errors = {
    email: "Please enter a valid email address (your entry is not in the format 'somebody@example.com')",
    empty: "This field is required",
};

signIn.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value.length <= 0) {
        setErrorText(email, errors.empty);
    } else if (!email.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)) {
        setErrorText(email, errors.email);
    } 
    if (password.value.length <=0) {
        setErrorText(password, errors.empty);
    }
})
signIn.removeEventListener("submit");