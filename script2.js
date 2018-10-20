// console.log("Bonjour !");

// var a;

// console.log(a)

// a= 'bonjour le monde';

// console.log(a);

// a="j'aime coder";

// var b;


// b="Et je ne me lasse pas";

// console.log(a+b);

// var a=1;

// var b=2;


// var c =a + b;

// console.log(c);

// var a;
// var b;
// var c;
// a=30;
// b=4;
// c= a + b
// console.log(c);
// c= a - b;
// console.log(c);
// c= a / b;
// console.log(c);
// c= a * b;
// console.log(c);
// c = a % b;
// console.log(c);

// a = 12;
// a= a+5;
// a= a+5;
// console.log(a);

// a++;

// console.log(a);

//  var a;
//  var b;

//  a = 10;
//  b = 25;

//  function add() {
//    //var c;
//    // c="ch";
//    console.log(a+b);
//   // console.log(c);
   
// };

// // console.log(c);
// add();

// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // expected output: 2
// }

// console.log(x);
// // expected output: 2

// function x() {
//     y = 1;   // Throws a ReferenceError in strict mode
//     var z = 2;
//   }
  
//   x();
  
//   console.log(y); // logs "1" 
// //   console.log(z); // Throws a ReferenceError: z is not defined outside x

//  var a;
// var b;
//  var c;
//  var d;
// var e;
//  var f;


// a = prompt("b?", "000");
// b = parseInt(prompt("a?","000"));

// console.clear;

// // function 

// // var c;

// // console.log(c);
// add();

// console.log(typeof(12));
// console.log(typeof(12.5));
// console.log(typeof("12"));
// console.log(typeof(new Array(12, 12.5)));
// console.log(typeof(true));
// console.log(typeof(add()));


// a = prompt("Quel âge avez-vous ?") ;


 //c = 2018


//  b = c-a;

// e = prompt("De quelle année désirez-vous connaître votre âge ?") ;

//g = e-b
// // console.log(g);
// b = parseInt(prompt(c-a));
// h = parseInt(prompt(g));

// // f = c-b;
// // console.log(f);

// // e = parseInt(prompt(f));

// // var nombre1 = prompt(' Quel âge avez-vous ?');
// // var nombre2 = prompt('De quelle année désirez-vous connaître votre âge ?');

// // // on convertit en nombres decimaux et on calcule
// // var resultat = parseFloat(nombre1) - parseFloat(nombre2);
// // // alert("Vous êtes né à cet date" + resultat);
// // var resultat1 = parseFloat(resultat) - parseFloat(nombre2);
// // alert("Vous êtes né à cet date" + resultat1);---------------------------------------------------

// var age;
// var anneeDeNaissance;
// var anneeFictive;
// var ageFictif;

// age = parseInt(prompt("Quel age avez vous ?","18"));
// anneeDeNaissance = 2018 - age;
// console.log("Vous ètes né en " + anneeDeNaissance);
// anneeFictive = parseInt(prompt("En quelle année voulez vous être projeté ?", "1982"));
// ageFictif = anneeFictive - anneeDeNaissance;
// console.log("En " + anneeFictive + " vous aurriez " + ageFictif + "an(s).");

// console.log(1==1);
// console.log(1=="1");
// console.log(1==="1");
// console.log(1<=2);
// console.log(1>=2);
// console.log(1>2);
// console.log(1<2);
// console.log(1!=2);
// console.log(1!=1);
// console.log(1!=="1");

// console.log(true&&true);
// console.log(1==1 && 1<2);

// console.log(true&&false);
// console.log(1==1 && 1>2);

// console.log(true || false);
// console.log(1==1 || 1>2);

// console.log(false || false);
// console.log(1!=1 || 1>2 );

// // Conditions



// var a = 5;
// var b = 5;

// if (a==b){

//     console.log("les chiffres sont égaux")
// }else{
//     console.log("Les chiffres sont égaux")
// }



// // Les chiffres sont égaux 
// var a = 5;
// var b = 12;


// if (a==b) {
//     console.log("les chiffres sont égaux")


// }else{
//     console.log("Les chiffres sont inégaux")
// }

// var age;
// age = parseInt(prompt("Quel age avez vous ?","18"));

// if (age<18){
//     console.log("Vous êtes mineur")

// }else{
//     console.log("Vous êtes majeur")
// }

// var a = 5;
// var b = 6;
// var c = 7;

//  if (a==b){

//   console.log("a et b sont égaux")
//  }else if(a == c){
//      console.log("a et c sont égaux")
//  }else if (b == c){
//      console.log("a et c sont égaux")
//  }else{
//      console.log("Tous les chiffres sont différents")
//  }


 //60

//  var age;
//  age = parseInt(prompt("Quel age avez vous ?","18"));

//  if (age<18){
//      console.log("Vous êtes mineur")

//  }else if (age>60){
//      console.log("Vous êtes trop vieux")
//  }else{
//    console.log("Vous êtes majeur")
//  }

//  if (age < 18)
// {
// console.log("Vous êtes mineur");
// }
// else if (age >= 18 && age < 60)
// {
// console.log("Vous êtes mageur et jeune");
// }
// else
// {
// console.log("Vous êtes vieux, prenez donc votre retraître !");
// }

//1 et 100 trop grand trop petit

// chiffre = parseInt(prompt("Entrez un chiffre ?","0"));

// function myFunction() {
//     var x = Math.floor((Math.random() * 100) + 1);
//     document.getElementById("demo").innerHTML = x;
// }

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// /**
//  * Returns a random integer between min (inclusive) and max (inclusive)
//  * Using Math.round() will give you a non-uniform distribution!
//  */
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//----------------------------------------
// for (i=0; i<=100; i=i+1){
      
//    console.log(i);
//    if (i == 6){
//       break;
//    } 
//  }


// var i = 0;

// // var x;
// // x = prompt("Entrez un chiffre")


//  while (i<=100, x!=i) {
//     console.log(i);
//        i++;
//  }



// if (x == i) {
//         console.log("bingo !");
// } else{
       // console.log("Recommence !")
 //}

//----------
//  var text = "";
//------------------------------------

//random

// for (i = 0; i < 10; i++) {
//       var score = Math.floor(Math.random()*10);
//       console.log(score);
//       }

//---------------------------------------------

// var i = 0;

// var x;
// x = prompt("Entrez un chiffre");

//  //var i = Math.floor((Math.random() * 100) + 1);

//  for (var i = 0; i < 100; i++) {
//      var count = 0;
//      var loopEnd = Math.floor(Math.random() * 100 + 1);
//      for (var j = 0; j < Math.floor(Math.random() * 100); j++) {
//            count++;
//      }
//       console.log(count);
//   }
// //  var score = Math.floor(Math.random()*100);
// //  while (i < 100) {
     
// //         console.log(i);
// //    i++;
   
// //  }

 

// var x;

// var i = Math.floor((Math.random() * 100) + 1);

// x = prompt("Entrez un chiffre");

//  while (i<=100) {
      
//       if (x == count){
//             break;
            
//       }
        
//      }
 


// function randomNumber() {

//       var randNum = Math.floor(Math.random() * (100)) + 1;
  
//       return randNum;
  
//   }
  
//   function logRandomNumber() {
  
//       var randNum = randomNumber();
  
//       if(randNum == x) { 
  
//           console.log('hello');
  
//       }
  
//   }
  
//   logRandomNumber();

//   while (randNum < 100) {
     
     
//       randNum++;
//    }
   
  

//   if (x == r) {
//                  console.log("C'est le bon chiffre !");
//    }


//   else if (x < 50){
//          console.log("C'est trop petit !");
//    }

//    if (x != randNum){
     
//       console.log("C'est trop grand !");
//   }

//    else if(count >= 100){
//       console.log("100!!!")

//    }
  
//------------------------------------------
//  var i = 0;
//  var x;
//  x = prompt("Entrez un chiffre")



//  while (i < 100) {
//    if (x == i) {
//      break;
//     console.log("bingo !");
//   }else{
//        console.log("Recommence !")
// // }
//   i = i + 1;
// }



// expected output: 3

// function add(x,y){
//       console.log(x+y);
// }

// add(5,6);

// var a = 6;
// var b = 7;

// add(a,b);

//----------------------------------------------------------------------------------------------

// var number = (function ask() {
//       var n = prompt('Number from 1 to 100:');
//       return isNaN(n) || +n > 100 || +n < 1 ? ask() : n;
//     }());

//------------------------------------------------------------------------------------------

 

//  for (i=0; i<=100; i++){
      
//     console.log(i);
   
//   }

//   while (i == 100) {

//   }

// var chiffreAleatoires;
// var chiffreUtilisteur;
// var victoire = false;


// chiffreAleatoires = Math.round(Math.random()*100);

// while (victoire){

//       chiffreUtilisteur = parseInt(prompt"n")
// }



Math.floor(Math.random() * 100);
