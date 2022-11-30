var randonNumber1 = Math.floor(Math.random() *6) + 1; //1-6

var randomDiceImage = "dice" + randonNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource);
 

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//if player wins
if (randonNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Wins! 🎲";
}
else if (randomNumber2 > randonNumber1){
    document.querySelector("h1").innerHTML = "🎲 Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "🎲 Draw! 🎲";
}