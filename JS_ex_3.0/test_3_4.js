const readlineSync = require("readline-sync");

let tab = [6,23,24,44,2];
let min = Math.min.apply(null,tab);
let max = Math.max.apply(null,tab);

console.log('min '+min);
console.log('max '+max);