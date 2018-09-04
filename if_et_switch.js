if(confirm("Voulez vous continuer ?")){                     // Ouvre une popup qui demande une validation
    console.log("Vous avez décidé de continuer");           // S'affiche si l'utilisateur a cliqué sur OK
}
else{                                                       // Sinon
    console.log("Vous avez décidé de ne pas continuer");    // S'affiche si l'utilisateur a cliquer sur annuler
}

var a = 5;
var b = 3;
if(a + b == 8){
    console.log("La vérification est bonne : 5 + 3 est bien égal à 8")
}

if(a<b && a+b == 8){            // --> && permet de faire passer deux vérifications dans une condition, les deux doivent être bonne
    console.log("OK");
}

if(a<b || a+b == 8){            // --> || permet de faire passer deux vérifications dans une condition, au moins l'une des deux doit être bonne
    console.log("OK");
}

var faux = false;
if(!faux){                                      // --> ! Permet de demander l'inverse de ce qui le suit
    console.log("Pas pas vrai c'est vrai")
}

var variable = "test";
switch(variable){
    case "toto":
        console.log("Ne rentrera pas car variable = test et non toto");
        break; //--> Pour quitter le switch
    case "test":
        console.log("Ce message s'affiche car la variable variable est égale à test");
        break;
    default:
        console.log("Ce message s'affiche si aucun des précéddents test n'est valide.")
}

