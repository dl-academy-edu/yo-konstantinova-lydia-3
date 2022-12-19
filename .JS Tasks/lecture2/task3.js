// 3. Написать программу, которая будет получать число и его степень, с помощью цикла for возвести число в степень.
// 4. Написать проверку, для программ 1-3, чтобы если пользователь вводил неверные данные, например слово вместо числа, то должно вывестись сообщение об ошибке.

let userNum =  prompt("Введите любое число");
let powerCount = prompt("Введите степень, в которую хотите возвести число");
let userNumPowered;

if (isNaN(userNum) || isNaN(powerCount)) {
    console.log("Ошибка: пожалуйста, введите число");
} else{
    for (userNumPowered = 1; userNumPowered <= powerCount; powerCount++) {
        userNumPowered = userNum ** powerCount;
    }
    console.log(userNumPowered);
}
