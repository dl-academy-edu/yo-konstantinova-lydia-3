const signInModal = document.querySelector(".sign-in-modal-js");
const openSignInModal = document.querySelector(".sign-in-modal-btn-js");
const closeSignInModal = document.querySelectorAll(".modal__close-btn")[0];

const openModal = function () {
    signInModal.classList.remove("hidden");
    signInModal.classList.add("modal");
};

const closeModal = function () {
    signInModal.classList.remove("modal");
    signInModal.classList.add("hidden");
};

openSignInModal.addEventListener("click", openModal);
closeSignInModal.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModalByEsc(signInModal);
});

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
            errorFormHandler(error, signIn);
            return;
        } else {
            console.log("Submitted");
            const data = {
                email: email.value,
                password: password.value
            }
            console.log(data);
            showLoader();
            sendRequest({
                method: "POST", 
                url: "/api/users/login",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.userId);
                rerendeLinks();
                closeModal();    
            })
            .catch(err => {
                if(err._message) {
                    alert(err._message);
                }
                errorFormHandler(err.errors, signIn);
            })
            .finally(
                hideLoader()
            )
        }
    })
})();
