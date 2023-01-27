//функция открытия и закрытия модального окна

function rerendeLinks() {
    const loginButton; // ссылка входа
    const registerButton;//ссылка регистрации
    const toProfile;//ссылка на профиль


    if(isLogin) {
//токен есть
loginButton.classList.add("hidden");
registerButton.classList.add("hidden");
toProfile.classList.remove("hidden");
    } else {
//токена нет
loginButton.classList.remove("hidden");
registerButton.classList.remove("hidden");
toProfile.classList.add("hidden");
    }
}

(function initLogin() {
    const modalLogin; // модалка
    const btnOpenModalLogin; // открыть модалку
    const btnCloseLogin; // закрыть модалку
    const loginModal; // сама форма

    const isLogin = localStorage.getItem("token");

    if(isLogin) rerendeLinks();

    const login = (e) => {
        e.preventDefault();
        let data = {};
        data.email = loginModal.email.value;
        data.password = loginModal.password.value;

        //validation


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
            console.log("Вы успешно вошли")
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.userId);
            rerendeLinks();
            //открытие закрытие модалки

        })
        .catch(err => {
            if(err._message) {
                alert(err._message);
            }
            clearErrors();
            errorFormHandler(err.errors, loginModal)
        })
    }

    loginModal.addEventListener("submit", login);
})();
