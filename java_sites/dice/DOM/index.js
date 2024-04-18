const NUMS = [1, 2, 3, 4, 5, 6]

var diceOne = document.querySelectorAll("img")[0];
var diceTwo = document.querySelectorAll("img")[1];


function dieRollOne() {
  
    var n = Math.floor(Math.random()*NUMS.length) + 1;

    if (n === 1) {
        diceOne.setAttribute("src", "./images/dice1.png");
    } else if (n === 2) {
        diceOne.setAttribute("src", "./images/dice2.png");
    } else if (n === 3) {
        diceOne.setAttribute("src", "./images/dice3.png");
    } else if (n === 4) {
        diceOne.setAttribute("src", "./images/dice4.png");
    } else if (n === 5) {
        diceOne.setAttribute("src", "./images/dice5.png");
    } else {
        diceOne.setAttribute("src", "./images/dice6.png");
    }
}


function dieRollTwo() {

    var n = Math.floor(Math.random()*NUMS.length) + 1;

    if (n === 1) {
        diceTwo.setAttribute("src", "./images/dice1.png");
    } else if (n === 2) {
        diceTwo.setAttribute("src", "./images/dice2.png");
    } else if (n === 3) {
        diceTwo.setAttribute("src", "./images/dice3.png");
    } else if (n === 4) {
        diceTwo.setAttribute("src", "./images/dice4.png");
    } else if (n === 5) {
        diceTwo.setAttribute("src", "./images/dice5.png");
    } else {
        diceTwo.setAttribute("src", "./images/dice6.png");
    }
}
