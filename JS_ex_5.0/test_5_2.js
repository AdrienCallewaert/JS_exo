const readlineSync = require("readline-sync");

let sondage = { name: '', years: '', cast: []};
let choix = '';
let n = 0;

//fonction Asktv
function askTvSeries() {
    sondage.name = readlineSync.question('Nom de votre serie :');
    sondage.year = new Number(readlineSync.question('date de votre serie :'));
    while (choix != '**') {
        choix = readlineSync.question('Nom de votre acteur. faites ** pour arrêter :');
        sondage.cast.push(choix);
    }
    sondage.cast.pop(n - 1);
    return sondage;
}

//fonction random
function randomizeCast(tabMbRand){
    for (let i = 0;i < sondage.cast.length; i++) {
        tabMbRand = sondage.cast.sort(() => Math.random() - 0.5);
        }
return tabMbRand;
}

console.log(askTvSeries());
console.log(randomizeCast(sondage.members));