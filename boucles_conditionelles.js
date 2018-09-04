var i;

for(i = 5; i > 0; i = i - 1){                                           // --> Pour i allant de 5 à 0 avec un pas de -1 faire ...
    console.log("Cette boucle va tourner encore " + i + " fois.");
}

i = 5;
var j = 0;
while(i==5){        // --> Tant que i est égale à 5 cette boucle tournera
   j++;
   if(j==4){
       i = 0;
   } 
}

// /!\ L'instruction break permet d'arrêter une boucle
// /!\ L'instruction continue permet de sauter le reste de la boucle en cours et de commencer la suivante