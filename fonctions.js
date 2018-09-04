// Ce code affichera Bonjour Eric.

function DireBonjour(nom){
    return "Bonjour " + nom + ".";
}
console.log(DireBonjour("Eric"));

// --------------------------------------\\

// Ce code affichera Au revoir Eric.

var DireAurevoir = function(nom)
{
    return "Au revoir " + nom + ".";
}
console.log(DireAurevoir("Eric"));

// --------------------------------------\\

// Ce code permet d'afficher 'Finis !' après 5 secondes d'attente.

var callback = function() {
    console.log("Finis !");
}

setTimeout(callback, 5000);
