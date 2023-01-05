let openMenu = document.querySelector(".header-mob-js");
let openMenuBtn = document.querySelector(".heading-section__menu-btn");
let closeMenu = document.querySelector(".header-mob__close-btn");
let signInModal = document.querySelector(".sign-in-modal-js");
let openSignInModal = document.querySelector(".sign-in-modal-btn-js");
let closeSignInModal = document.querySelectorAll(".modal__close-btn")[0];
let registerModal = document.querySelector(".register-modal-js");
let openRegisterModal = document.querySelector(".register_modal-btn-js");
let closeRegisterModal = document.querySelectorAll(".modal__close-btn")[1];
let checkbox = document.querySelectorAll(".cb-js")[0];
let formBtn = document.querySelectorAll(".btn-register-js")[0];
let checkboxLabel = document.querySelectorAll(".cb-label-js")[0];
let openMessageModal = document.querySelector(".msg-btn-js");
let messageModal = document.querySelector(".message-modal-js");
let closeMessageModal = document.querySelector(".modal__close-btn--msg");
let checkboxMessage = document.querySelectorAll(".cb-js")[1];
let formBtnMessage = document.querySelectorAll(".btn-register-js")[1];
let checkboxLabelMessage = document.querySelectorAll(".cb-label-js")[1];
let scrollBtn = document.querySelector(".scroll-btn");


const openModal = function () {
    signInModal.classList.remove("hidden");
    signInModal.classList.add("modal");
};

const closeModal = function () {
    signInModal.classList.remove("modal");
    signInModal.classList.add("hidden");
};


openMenuBtn.addEventListener("click", function() {
    openMenu.classList.add("header-mob");
});

closeMenu.addEventListener("click", function() {
    openMenu.classList.remove("header-mob");
});

window.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        signInModal.classList.remove("modal");
        signInModal.classList.add("hidden");
        registerModal.classList.remove("modal");
        registerModal.classList.add("hidden");
        messageModal.classList.remove("modal");
        messageModal.classList.add("hidden");
    }
});

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

openSignInModal.addEventListener("click", openModal);
closeSignInModal.addEventListener("click", closeModal);

openRegisterModal.addEventListener("click", function() {
    registerModal.classList.remove("hidden");
    registerModal.classList.add("modal");
});

closeRegisterModal.addEventListener("click", function() {
    registerModal.classList.remove("modal");
    registerModal.classList.add("hidden");
});

checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
        formBtn.removeAttribute("disabled");
        checkboxLabel.classList.remove("modal__form__checkbox-wrap__label-disabled");
    } else {
        formBtn.setAttribute("diasbled");
    }
});

checkboxMessage.addEventListener("click", function() {
    if (checkboxMessage.checked) {
        formBtnMessage.removeAttribute("disabled");
        checkboxLabelMessage.classList.remove("modal__form__checkbox-wrap__label-disabled");
    } else {
        formBtnMessage.setAttribute("diasbled");
    }
});

openMessageModal.addEventListener("click", function() {
    messageModal.classList.remove("hidden");
    messageModal.classList.add("modal");
});

closeMessageModal.addEventListener("click", function() {
    messageModal.classList.remove("modal");
    messageModal.classList.add("hidden");
});

// валидация форм

// (function() {
//     const signInForm = document.forms.signIn;
//     const email = signIn.querySelector("input[type=email]");
//     const password = signIn.querySelector("input[type=password");

//     signInForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         if (isEmailCorrect(email.value)) {
//             const data = {
//                 email: email.value,
//                 password: password.value,
//             };
//             console.log(data);
//         } else {
//             const errorCreator = (message) => {
//                 let messageErrorContainer = document.createElement("div");
//                 messageErrorContainer.classList.add("invalid-message--email");
//                 messageErrorContainer.innerText = message;
//                 return messageErrorContainer;
//             }
//             const insertAfterElement = document.getElementById("sign-in-email");
//             insertAfterElement.insertAdjacentElement("afterend", errorCreator('Please enter a valid email address (your entry is not in the format "somebody@example.com")'));
//         }
//     })
// })();

// function isEmailCorrect(email) {
//     return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
// }

// function isPhoneCorrect(phone) {
//     return phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/);
// }