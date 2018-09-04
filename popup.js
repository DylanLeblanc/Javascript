// Il y a trois types de Pop-Up possible

confirm("Bonjour !");               // --> Boîte de dialogue de validation (OK ou annuler)
prompt("Comment allez vous ?");     // --> Boîte de dialogue avec un champs texte
alert("Attention !!");              // --> Boîte de dialogue d'alerte avec juste un bouton ok

//Ce code permet d'afficher ce qu'a entré l'utilisateur dans la Pop-up
var boite = prompt("Entrez un nombre : ");
console.log(boite);