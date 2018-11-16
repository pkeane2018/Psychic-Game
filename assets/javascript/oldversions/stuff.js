var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = false;
var letter = alphabet[Math.floor(Math.random()*26)];

console.log(win);
console.log(letter);

window.onload = function() {

var guessnum = 9;
var winnum = 0;
var lossnum = 0;

console.log(win);
console.log(letter);

document.onkeyup = guess;

function guess(event) {

    console.log(guessnum);
    console.log(winnum);
    console.log(lossnum);
    console.log(win);
    console.log(letter);

    }

}