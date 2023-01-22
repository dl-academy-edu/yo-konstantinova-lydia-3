//прелоадер
const mainLoader = document.querySelector(".preloader--js");

const showLoader = () => {
    loaderCount++;
    mainLoader.classList.remove("hidden");
    mainLoader.classList.add("not-hidden");
}
const hideLoader = () => {
    loaderCount--;
    if (loaderCount <= 0) {
        mainLoader.classList.add("hidden");
        mainLoader.classList.remove("not-hidden");
        loaderCount = 0;
    }
}

let loaderCount = 0;

//кнопка скролла
const scrollBtn = document.querySelector(".scroll-btn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1500) {
        scrollBtn.classList.remove("hidden");
    } else {
        scrollBtn.classList.add("hidden");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
});

//закрытие модалок с помощью escape

function closeModalByEsc (modal) {
        modal.classList.remove("modal");
        modal.classList.add("hidden");
}

// функции для валидация и обращения к бэку

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

const removeValidInput = (input) => {
    input.classList.remove("modal__form__input--valid");
}

const BASE_SERVER_PATH = "https://academy.directlinedev.com"; //ссылка на сервер

function sendRequest({url, method = "GET", headers, body = null}) {
    return fetch(BASE_SERVER_PATH + url + "?v=0.0.1", {
        method,
        headers, 
        body,
    });
}

function errorFormHandler(errors, form) {
    Object.keys(errors).forEach((key) => {
        const messageError = errors[key];
        const input = form.elements[key];
        setErrorText(input, messageError);
    })
}

//перерисовка хедера 
const logOutButton = document.querySelector(".log-out-to-show--js");
const isLogin = localStorage.getItem("token");

if(isLogin) rerendeLinks();

function rerendeLinks() {
    const signInButton = document.querySelector(".sign-in-to-hide--js");
    const registerButton = document.querySelector(".register-to-hide--js");
    const profileButton = document.querySelector(".profile-to-show--js");
    const logOutButton = document.querySelector(".log-out-to-show--js");

    if(isLogin) {
        signInButton.classList.add("hidden");
        registerButton.classList.add("hidden");
        profileButton.classList.remove("hidden");
        logOutButton.classList.remove("hidden");
    } else {
        signInButton.classList.remove("hidden");
        registerButton.classList.remove("hidden");
        profileButton.classList.add("hidden");
        logOutButton.classList.add("hidden");
    }
}

//выход из аккаунта:

logOutButton.addEventListener("click", () => {
    rerendeLinks();
    localStorage.removeItem("token");
})
