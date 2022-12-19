// Напишите 4 чистые функции, add (сложение 2 чисел), subtract (вычитание из первого аргумента второго), divide (деление первого аргумента на второй) и miltiply (умножение). В комментариях напишите, почему эти функции чистые.

function add (numOne, numTwo) {
    return numOne + numTwo;
}

function subtract (numOne, numTwo) {
    return numOne - numTwo;
}

function divide (numOne, numTwo) {
    return numOne / numTwo;
}

function multiply (numOne, numTwo) {
    return numOne * numTwo;
}

// функции чистые, т.к. они не имеют побочных эффектов и не изменяют состояние приложения (ничего не выводят на экран), с одинаковыми аргументами всегда возвращают одинаковое значение, не испопльзуют глобальные переменные.