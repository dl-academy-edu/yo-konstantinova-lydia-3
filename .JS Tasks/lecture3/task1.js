// Используя рекурсию, попросите пользователя ввести возраст, если он больше 18, то покажите сообщение об успехе, если меньше, то запустите функцию снова.

let userAge = Number(prompt("Введите свой возраст"));

function getAge (userAge) {
    if (userAge >= 18) {
        return ("Успешно введено");
    } else {
        let userAge = prompt("Пожалуйста, попробуйте еще раз");
        return getAge(userAge);
    }
}

alert(getAge(userAge));