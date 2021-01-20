const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question('number of dice : '));
let sumTab = 0;
let finalTab = new Array;

function multiRand(n){
    //boucle d'insertion random
    for (let j = 0;j < n;j++){
        temp = rand10();
        finalTab.push(temp);
    }
    return finalTab;
}
    //list random
    console.log(multiRand(n));

    //random
    function rand10(){
        return 1 + Math.floor(Math.random() * 10);
    }

    // moyenne
function average(n) {
    for (let k = 0;k < finalTab.length; k++){
        sumTab = new Number(sumTab+finalTab[k]);
        aveTab = sumTab/finalTab.length;
    }
    return aveTab;
}

console.log(average(finalTab));


    //min
function min(n) {
    mini = Math.min.apply(null,finalTab);
    return mini;
}

console.log('min : '+min(finalTab));


    // max
function max(n) {
    maxi = Math.max.apply(null,finalTab);
    return maxi;
}

console.log('max : '+max(finalTab));
