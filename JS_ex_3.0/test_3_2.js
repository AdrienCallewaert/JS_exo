const readlineSync = require("readline-sync");

let tab = [1, 2, 3, 4, 5];
let tab2 = [100, 101, 102];

  function numAverage(a) {
    var b = a.length,
        c = 0, i,
        result = 0;
    for (i = 0; i < b; i++){
      c += Number(a[i]);
    }
    result = c/b;
    console.log(result);
    
  }

numAverage(tab);
numAverage(tab2);


/*function compteur() {
    for (var compte = 1; ; compte++) {  // boucle infinie
        console.log(compte + "A"); // jusqu'à 5
          if (compte === 5) {
            return;
          }
          console.log(compte + "B");  // jusqu'à 4
        }
      console.log(compte + "C");  // cette instruction n'est jamais utilisée
    }
    
    compteur();
    
    // Résultat dans la console :
    // 1A
    // 1B
    // 2A
    // 2B
    // 3A
    // 3B
    // 4A
    // 4B
    // 5A
    */