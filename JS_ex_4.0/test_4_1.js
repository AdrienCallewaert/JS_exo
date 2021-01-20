const readlineSync = require("readline-sync");

let len = new Number(readlineSync.question('lenght > rectangle : '));
let wid = new Number(readlineSync.question('width > rectangle : '));

calcSurface(len,wid);

function calcSurface(length,width) {
    let surface = length*width;
    console.log('Surface is : '+surface);
}
