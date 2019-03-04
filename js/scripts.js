$("#newGame").click(function(event){
        event.preventDefault();
        $("#slide").show();
});

var gamePlay=true;
var totalScore=[now + current];
var score= [0];
var now=[0];
var a=[1,2,3,4,5,6]

function roll (){
var b = document.getElementById("dice1");
var c= a[Math.floor(Math.random()*6)];
var d= score.unshift(c);
var e= now.unshift(c);
dice1.innerHTML = c;
current.innerHTML=score.unshift(a);
total.innerHTML= c + d;


if (c === 1) {
    alert("Sorry, you rolled a one!");
    current.innerHTML=0;
    total.innerHTML= 0;
    score=[0];
    next.innerHTML=score.unshift(a);
    result.innerHTML= c + d;

  }
if (score=== 100) {
    alert("you are a winner");
     rollBtn.attr("disabled", "disabled");
  }
  function hold(){
    return total + current
  }
}
