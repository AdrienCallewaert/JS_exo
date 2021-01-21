const readlineSync = require("readline-sync");

let sondage = { name: '', years: '', cast: []};
let choix = '';


function askTvSeries() {
    sondage.name = readlineSync.question('Nom de votre serie :');
    sondage.year = new Number(readlineSync.question('date de votre serie :'));
    while (choix != '**') {
        choix = readlineSync.question('Nom de votre acteur. faites ** pour arrêter :');
        sondage.cast.push(choix);
    }

    return sondage;
}
console.log(JSON.stringify(askTvSeries()));