const readlineSync = require("readline-sync");

function calcSurface() {
    let longueur = Number(inputLongueurRectangle.value);
    let largeur = Number(inputLargeurRectangle.value);
    
    let calcSurface = longueur * largeur;

    inputAireRectangle.value = calcSurface.toFixed(2);

    
    if(inputLongueurRectangle.value === '' ||  inputLargeurRectangle.value === '') {
        inputAireRectangle.value = '';
    }

}
