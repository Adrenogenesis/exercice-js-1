/*
      demander un nombre entre 1 et 100 tant que nbVisiteur est différent de nbAleatoire
      si le nbVisiteur et inferieur à nbAleatoire
      affiche c'est plus

      si le nbVisiteur et superieur à nbAleatoire
      affiche c'est moins
*/


var nbAleatoire;
var nbVisiteur;
var nbcoup = 0;

nbAleatoire = random();


 while(nbVisiteur != nbAleatoire) {
       
       nbcoup++;
       console.log("nb de coup",nbcoup);
      nbVisiteur = parseInt(prompt("Entrez un chiffre max"));
      if (nbVisiteur < nbAleatoire){ 
            console.log("C'est plus ");
     }
     else if (nbVisiteur > nbAleatoire){ 
           console.log("C'est moins ");
     }
     else{ 
           console.log("C'est juste ");
      }
 }

 function random(min, max) 
 {
      min = 0;
      max = parseInt(prompt("entrez un chiffre max de 1 à 100"));

     return Math.floor(Math.random() * (max - min + 1) ) + min;
 }


    