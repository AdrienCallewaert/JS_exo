const readlineSync = require("readline-sync");

let len = new Number(readlineSync.question('lenght > rectangle : '));
let wid = new Number(readlineSync.question('width > rectangle : '));

calcSurface(len,wid);

function calcSurface(length,width) {
    let surface = length*width;
    console.log('Surface is : '+surface);
}


/*  calcSurface; l'utuilisateur entre la longeur et largeur du rectangle.
    Ensuite les deux valeur sont multiplier et la consol affiche le résulat  */