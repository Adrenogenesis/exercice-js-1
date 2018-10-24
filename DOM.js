/*
      DOM
      shi-fu-mi
      mobile-first
      button effet hover
      vous / ia et nouvelle partie
*/
// vchoix = joint([Fpierre,Ffeuille,Fciseaux]);

 imgAleatoire = FchoixOrdi();
 choixFeuille = Ffeuille();
 choixCiseaux = Fciseaux();
 choixPierre = Fpierre();


 
 function Fpierre() {  
       
       document.getElementById("pierre");
       console.log("choix pierre");
       return("pierre");
      }
        

  function Ffeuille() {  
    document.getElementById("feuille");
    console.log("choix feuille");
    return("feuille");
}


function Fciseaux() {  
     document.getElementById("ciseaux");
    console.log("choix ciseaux");
    return("ciseaux");
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
             
       console.log("random",choixOrdi);
       return(choixOrdi);
 }



 function vouschoix() {
    if (choixFeuille == imgAleatoire || choixCiseaux == imgAleatoire || choixPierre == imgAleatoire){
    // alert("gagné !");
    console.log("gagné");
   }else if (choixFeuille != imgAleatoire || choixCiseaux != imgAleatoire || choixPierre != imgAleatoire){
        // alert("perdu!");
        console.log("perdu");
    }
  }

