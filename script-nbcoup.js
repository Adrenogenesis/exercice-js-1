/*
      demander un nombre entre 1 et 100 tant que nbVisiteur est différent de nbAleatoire
      si le nbVisiteur et inferieur à nbAleatoire
      affiche c'est plus

      si le nbVisiteur et superieur à nbAleatoire
      affiche c'est moins
      1 cp laclasse etc...
      limiter le nombre de coups
      laisser l'utilisateur choisir le nombre de coups
      définir le nb de coups en fonction du chiffre choisi 100:10cp 500:20cp
*/

var nbAleatoire;
var nbVisiteur;
var nbcoup = 0;
var nbcoupmax = 0;
//var nbcoup = Math.min(Math.max(parseInt(nbcoup), 1), 5);

nbAleatoire = random();
// nbcoupmax = nbcoupmaxfn();
nbcoupmax = parseInt(prompt("Entrez nb coups"));
//   function nbcoupmaxfn() {
//       nbcoupmax = parseInt(prompt("Entrez nb coups"));
//        if (nbcoup === nbcoupmax) {
//              break;
//         }
//         else {
//          return "continue";
//         }
//       }
    


 while(nbVisiteur != nbAleatoire) {
      // nbcoupmax = parseInt(prompt("Entrez nb coups"));
       nbcoup++;
       console.log("nb de coup",nbcoup);
     
      nbVisiteur = parseInt(prompt("Entrez un chiffre max"));
       if (nbcoup === nbcoupmax) {
             break;
        }
       else if (nbVisiteur < nbAleatoire){ 
             console.log("C'est plus ");
         }
        else if (nbVisiteur > nbAleatoire){ 
           console.log("C'est moins ");
         }else if (1 <= nbcoup && nbcoup <= 3){
            console.log("C'est très bien ! ");

         } 
            else{ 
                  console.log("C'est juste ");

      }
 }

 function random(min, max) 
 {
      min = 0;
      max = parseInt(prompt("entrez un chiffre max de 1 à 10"));

     return Math.floor(Math.random() * (max - min + 1) ) + min;
 }


   