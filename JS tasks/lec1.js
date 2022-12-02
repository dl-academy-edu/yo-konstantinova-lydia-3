let bigInt = 989451215n;
let numberType = 24;
let stringType = "Lydia";
let booleanType = true;
let nullType = null;
let undefinedType = undefined;
let fullName = {
    name: "Lydia",
    surname: "Konstantinova",
}
let symbolType = Symbol("symbol");

console.log (Number(bigInt), String(bigInt), Boolean(bigInt));
console.log (Number(numberType), String(numberType), Boolean(numberType));
console.log (Number(stringType), String(stringType), Boolean(stringType));
console.log (Number(booleanType), String(booleanType), Boolean(booleanType));
console.log (Number(nullType), String(nullType), Boolean(nullType));
console.log (Number(undefinedType), String(undefinedType), Boolean(undefinedType));
console.log (Number(fullName), String(fullName), Boolean(fullName));
console.log (Number(symbolType), String(symbolType), Boolean(symbolType));