var a = 1;
var b = 2;
var c = a + b;

console.log(a + "+" + b + "=" + c);

// /!\ On peut utiliser l'opérateur "+" pour des additions mais aussi pour 
// concaténer des variables de type string ou nombre + string ou string + nombre

c = a - b; // --> Soustraction d'opérateur
c = a * b; // --> Multiplication d'opérateur
c = a / b; // --> Division d'opérateur
c = a % b; // --> Permet d'obtenir le module (reste) de la division euclidienne entre 'a' et 'b'

// a = a + b peut s'ecrire a += b , celà fonctionne avec les 4 autres opérateurs

console.log(Math.abs(-5)); // --> Affiche la valeur absolue de -5
console.log(Math.exp(3)); // --> Affiche l'exponentielle de 3
console.log(Math.pow(3, 4)); // --> Affiche le résultat de 3à la puissance 4
console.log(Math.floor(6.9)); // --> Affiche l'arrondie inferieur de 6.9 càd 6
console.log(Math.random); // --> Affiche un nombre aléatoir entre 0 et 1
