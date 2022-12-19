// Создайте счетчик, который будет принимать шаг счетчика. То есть ваш counterCreator должен принимать аргумент step и изменять index на step. Step должен иметь значение по умолчанию 2. Изначально index равен 0.

function counterCreator (step = 2) {
    let index = 0;
    return function () {
        index += step;
        return index;
    };
}

let myCounter1 = counterCreator(-1);
console.log(myCounter1());
console.log(myCounter1());

let myCounter2 = counterCreator(4);
console.log(myCounter2());
console.log(myCounter2());

let myCounter3 = counterCreator();
console.log(myCounter3());
console.log(myCounter3());