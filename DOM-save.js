/*
      DOM
      shi-fu-mi
      mobile-first
      button effet hover
      vous / ia et nouvelle partie
*/



// var consoleLine = "<p class=\"console-line\"></p>";

//  function vous() {
    
 
//         document.getElementById("pierre");
//        document.getElementById("feuille");
//         document.getElementById("ciseaux");
//         if (pierre == true){
//             console.log("pierre")
//         }
//  }


//  vchoix = vous();
//  ordiChoix = FchoixOrdi();
// var x = document.getElementById("pierre");
// var x = document.getElementById("feuille");
// var x = document.getElementById("ciseaux");

// x.addEventListener("click", Fpierre);
// x.addEventListener("click", Ffeuille);
// x.addEventListener("click", Fciseaux);
var scortO = 0;
var scortU = 0;

 nbAleatoire = FchoixOrdi();
 choixUtilisateur = Ffeuille();
// fci = Fciseaux();
// function joint(a){var b;return b=a[a.length-1],a.pop(),a=a.length>1?joint(a):a[0],function(){b.apply(new a)}}

// vchoix = joint([Fpierre,Ffeuille,Fciseaux]);

// vchoix = Fpierre();
// vchoix = Ffeuille();

 
 function Fpierre() {  
       
       document.getElementById("pierre");
       console.log("pierre");
      }
        

  function Ffeuille() {  
    document.getElementById("feuille");
    console.log("feuille");
}


function Fciseaux() {  
     document.getElementById("ciseaux");
    console.log("ciseaux");
}



   function FchoixOrdi() {
    var choixOrdi = Math.floor(Math.random() * 51);

      if (choixOrdi < 20) {
           choixOrdi = "pierre";
       }
       else if(choixOrdi > 20 && choixOrdi < 40) {
           choixOrdi = "feuille";
       }
       else if(choixOrdi > 40) {
           choixOrdi = "ciseaux";
        }
             
       console.log(choixOrdi);
 }



 function vouschoix() {
    if (vchoix == nbAleatoire ){
    alert("gagné !");
   }else if (vchoix != nbAleatoire){
        alert("perdu!")

    }
  }

//    function comparer(nbAleatoire, choixUtilisateur) {
 
//     if(choixUtilisateur == nbAleatoire) {
//         //afficheur.sendMessage("Il y a égalité.</br>L'ordinateur a choisi " + choixOrdi);
//         console.log("ggggg");
//     }
//     else if((choixUtilisateur == "pierre" && nbAleatoire == "ciseaux") || (choixUtilisateur == "feuille" && nbAleatoire == "pierre") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "feuille")) {
//        // afficheur.sendMessage("Vous avez gagné.</br>L'ordinateur a choisi " + choixOrdi);
//         scortU++;
//     }
//     else if((_choixUtilisateur == "feuille" && nbAleatoire == "ciseaux") || (choixUtilisateur == "piere" && nbAleatoire == "feuille") || (_choixUtilisateur == "ciseaux" && _choixOrdi == "pierre")) {
//        // afficheur.sendMessage("Vous avez perdu.</br>L'ordinateur a choisi " + choixOrdi);
//         scortO++;
//     }

// }
