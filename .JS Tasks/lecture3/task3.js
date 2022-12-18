// Написать функцию addCreator

function addCreator (numOne){
    return function (numTwo) {
        return numOne + numTwo;
    }
}

console.log(addCreator(1)(3));

const add = addCreator(5);

console.log(add(5)); 
