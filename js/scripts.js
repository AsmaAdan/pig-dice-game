$("#newGame").click(function(event){
        event.preventDefault();
        $("#slide").show();
});

var score= [0,0];
var gamePlay=true;
//var setInterva(function () {

//

if (totalScore === 100)
   alert("The game has been won!");

function roll (){
var a= document.getElementById("dice1");
//var b= document.getElementById("dice2");
var c= Math.floor(Math.random()*6)+1;
//var d= Math.floor(Math.random()*6)+1;
dice1.innerHTML = c;
//dice2.innerHTML = d;
current.innerHTML=c
}

//function scores (currentScore, initialScore) {
  //this.currentScore =

//}
