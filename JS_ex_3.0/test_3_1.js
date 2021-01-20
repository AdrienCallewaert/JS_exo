const readlineSync = require("readline-sync");
let Array1 = [1, 2, 3, 4, 5];
let Array2 = [100, 101, 102];
let low = +"0";
let high = +"0";

for (let index = 0; index < Array1.length; index++) {
    low += Array1[index];
}

for (let index = 0; index < Array2.length; index++) {
    high += Array2[index];
}

console.log(low);
console.log(high);