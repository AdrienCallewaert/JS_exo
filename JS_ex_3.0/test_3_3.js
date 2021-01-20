const readlineSync = require("readline-sync");

let tab1 = [1,2,3,4,5];
let tab2 = new Array;

for (let i = 0;i < tab1.length; i++){
    tab2.push(tab1[i]);
}

console.log(tab1);
console.log(tab2);