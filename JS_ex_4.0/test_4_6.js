const readlineSync = require("readline-sync");
let num = new Number(readlineSync.question('Enter a number : '));

function factorial(nb) {
    if (nb == 0) {
        return 1;
    }
    return nb * factorial(nb - 1);
}
console.log(factorial(num));