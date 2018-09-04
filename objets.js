var ObjetVide = {}; // --> Permet de créer un objet vide
var animal = {      // --> Permet de créer un objet nommer animal
    espece : "chien",  // --> espece est une caractéristique de l'objet animal
    puce : true,
    age : 10
}

animal.nom = "Beethoven"; // --> Permet d'ajouter la caractéristique nom à l'objet animal

for (var caracteristique in animal){                        // --> Permet de faire la liste de toutes les caractéristiques de l'objet animal
    if (animal.hasOwnProperty(caracteristique)){
        console.log("La caractéristique " + caracteristique + " de l'animal est " + animal[caracteristique]);
    }
}

// On peut aussi créer un objet de cette façon

function personne(nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
}   

var personnage = new personne("Dylan", "Leblanc")