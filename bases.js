// Déclaration de variable

var nombre = 7;  	    // --> Déclare un nombre
var text = "Un texte";	// --> Déclare une chaîne de caractère
var bool = true;	    // --> Déclare un boolean (true/false)

//Affichage de texte et de variable

console.log("Voici le contenu des variables créées : ");    // --> Pour afficher un texte
console.log("nombre : " + nombre);                          // --> Affiche la variable "nombre"
console.log("text : " + text);                              // --> Affiche la variable "text"
console.log("bool : " + bool);                              // --> Affiche la variable "bool"

// /!\ Si on essaie de 'print' une variable à laquelle on a pas donné de valeur, le programme 'printera' undefined.
// /!\ On peut donner la valeur 'null' à une variable, celà signifie qu'elle est vide.

var tableau_1 = [1, 2, 3];          // --> Déclare un tableau d'entier
var tableau_2 = new Array(1, 2, 3); // --> Le même tableau déclaré d'une autre façon
tableau_1[2] = 8;                   // --> Assigne de la valeur 8 à la troisième case du tableau

console.log(tableau_1[0]);          // --> Affichage de la première case du tableau "tableau_1"
console.log(tableau_1);             // --> Affichage de toutes les valeurs du tableau "tableau_1" ainsi que de sa taille et de son prototype

tableau_1.push(4);                  // --> Ajoute une nouvelle case au tableau "tableau_1" qui contient la valeur 4
tableau_2.pop();                    // --> Supprime de la dernière case du tableau "tableau_2"
tableau_2.unshift(0);               // --> Ajoute une nouvelle case au début du tableau "tableau_2" qui contient la valeur 0

console.log(tableau_1.splice(1, 2));    // --> Affiche deux valeurs du tableaux à partie de la deuxième case (1 -> case 2)