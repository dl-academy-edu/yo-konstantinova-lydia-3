//функция открытия и закрытия модального окна

const BASE_SERVER_PATH = "https://academy.directlinedev.com"; //ссылка на сервер

function sendRequest({url, method = "GET", headers, body = null}) {
    return fetch(BASE_SERVER_PATH + url + "?v=1.0.0", {
        method,
        headers, 
        body,
    });
}

//////validation code////////


let registerForm;
let loaderRegister;

function register(e) {
    e.preventDefault();
    loaderRegister.classlist.remove("hidden");

    //формирование объекта
    let data = {};
    data.email = registerForm.email.value;
    data.age = +registerForm.age.value;
    data.name = registerForm.name.value;/// и т.д., все данные формы

    sendRequest({
        url: "/api/users",
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => 
        response.json()
        )
    .then(response => {
        if(response.success) {
            //отключаем модалку
            alert(`Пользователь зарегистрировался с id ${response.data.id} & email ${response.data.emil} успешно`)
            registerForm.reset();
        } else {
            throw response;
        }
    })
    .catch(err => {
        clearErrors(registerForm);
        errorFormHandler(err.errors, registerForm)//выводим ошибки
    })
    .finally(() => {
        //отключить лоадер
    })
}

registerForm.addEventListener("submit", register);