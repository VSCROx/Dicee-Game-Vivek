
//Generate random number between 1 to 6
var randomNumber1 = Math.random()*6 + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random()*6 + 1;
randomNumber2 = Math.floor(randomNumber2);

// Changing image w.r.t random number generated
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src","images/dice"+randomNumber1+".png");

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src","images/dice"+randomNumber2+".png");

//Result
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆Player 1 Wins!";    
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🏆";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}