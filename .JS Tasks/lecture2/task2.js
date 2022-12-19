// Написать программу, которая будет получать число и с помощью цикла while считать его факториал.

let userNum =  prompt("Введите любое число");
let factorial = 1;
let count = 1;


if (userNum < 0 || isNaN(userNum)) {
  console.log("Ошибка: пожалуйста, введите положительное число");
} else {
  while (count <= userNum) {
    factorial *= count;
    count++;
  }
  console.log(factorial);
};
