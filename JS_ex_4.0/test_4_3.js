const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('number of dice : '));

function multiRand(n){
    let finalTab = new Array;
    //boucle d'insertion random
    for (let j = 0;j < n;j++){
        temp = rand10();
        finalTab.push(temp);
    }
    return finalTab;
}
    //random
    function rand10(){
        return 1 + Math.floor(Math.random() * 10);
}
    

console.log(multiRand(n));

    /* chaque nombre random est stoqué en fin de tableau */