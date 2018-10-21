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


function nb_aleatoire(min, max)
{
     var nb = min + (max-min+1)*Math.random();
     return Math.floor(nb);
}

var nb = nb_aleatoire(1, 100);  // nb a deviner
var cpt = 0;    // nb de coups
var saisie;
var msg = 'Le nombre à deviner est compris entre 1 et 100.';

do
{
     saisie = prompt(msg);
     cpt++;
     // message a afficher au prochain tour :
     if(saisie > nb)
          msg = "C'est moins";
     else
          msg = "C'est plus";
}
while(saisie != nb);

alert("Bravo, tu as gagne en " + cpt + " coups !");
