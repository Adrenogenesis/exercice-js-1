/*
      DOM
div 250x250 plus background click 500x500 reclick 250x250 
      clicker objet 
*/

// var laDivision = document.getElementById("ok");

//  var x = document.getElementById("btn");
//  var isActivate = false;

//         x.addEventListener("click", myFunction);
//         x.addEventListener("mouseout", myFunctionb);


// function myFunction() {
//         document.getElementById("btn").style.height = '500px';
//         document.getElementById("btn").style.width = '500px';
          
//       }

//       function myFunctionb() {
//             document.getElementById("btn").style.height = '250px';
//             document.getElementById("btn").style.width = '250px';
//            }

//var isActivated = false;
//rose.addEventListener("click",
//     function (){
//         if (isActivated === false) {
//             rose.style.backgroundColor = "red";
//             rose.style.width = "500px";
//             rose.style.height = "500px";
//             isActivated = true;
//         } else {
//             rose.style.backgroundColor = "deeppink";
//             rose.style.width = "250px";
//             rose.style.height = "250px";
//             isActivated = false;
//         }
//     }
// );






// function Choice () {
//       var redbox = document.getElementById("redbox");

//       var jaune = document.getElementById("jaune");
//       var bleu = document.getElementById("bleu");
//       var style = document.getElementById("style");
//       var del = document.getElementById("del");
//       var init = document.getElementById("init");
      
  
//       if (yes.clicked == true) {
//           x.style.backgroundColor = 'jaune';
//         x.style.width = '500px';
//      } else if (no.clicked == true) {
//          x.style.backgroundColor = "green";
//      } else {
//          x.style.backgroundColor = "purple";
//      };
//   };
  
//   Choice ();

// function Choice() {
//       document.getElementById("redbox").style.backgroundColor = "yellow";
//       document.getElementById("redbox").style.backgroundColor = "blue";
//       document.getElementById("redbox").style.height = "300px";
//       document.getElementById("redbox").style.width = "300px";
// }

// var redbox = document.getElementById("redbox");

// var jaune = document.getElementById("jaune");
// var bleu = document.getElementById("bleu");
// var style = document.getElementById("style");
// var del = document.getElementById("del");
// var init = document.getElementById("init");
// var isActivated = false;

// redbox.addEventListener("click",
//     function (){
     
//         if (isActivated === false) {
//            rose.style.backgroundColor = "red";
//             rose.style.width = "500px";
//            rose.style.height = "500px";
//             isActivated = true;
//        } else {
//            rose.style.backgroundColor = "deeppink";
//            rose.style.width = "250px";
//             rose.style.height = "250px";
//            isActivated = false;
//         }
//     }
// );

// function btnYellow() {
//       document.getElementById("redbox").style.backgroundColor = "yellow";
// }

// function btnBlue() {
//       document.getElementById("redbox").style.backgroundColor = "black";
// }
// function btnDel() {
//       document.getElementById("redbox").style.backgroundColor = "yellow";
// }

// function btnReset() {
//       document.getElementById("redbox").style.backgroundColor = "yellow";
// }
var isActivated = false;
var box = document.getElementById("box");

function changeColor(color){
      var elem = document.getElementById("box");
      elem.style.backgroundColor =color;
  }


  function btnStyle() {
          if (isActivated === false) {
                        box.style.width = "300px";
                        box.style.height = "300px";
                        isActivated = true;
                   } else {
                        box.style.width = "350px";
                        box.style.height = "350px";
                        isActivated = false;
                  }
            }


 function btnDel() {
    box.style.visibility = "hidden";
     
   }

    function btnReset() {
          location.reload();
  }


// https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_add_many2


// grow.addEvenListener("click", function() {
// if (theSquare<500 && theSquareSize>0) {
//       theSquareSize += 50;
// }else{
//       theSquareSize = 100 ;
// }

// theSquare.style.width = theSquare + "px";
// theSquare.style.marginLeft = "_" + theSquare/2 +"px";

// setTimeout(function(){
// theSquare.style.width = theSquare + "px";
// theSquare.style.marginLeft = "_" + theSquare/2 +"px";
//  },2000

//  )