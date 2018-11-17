var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

window.onload = function() {

var guessnum = 9;
var winnum = 0;
var lossnum = 0;

var win = false;
var letter = alphabet[Math.floor(Math.random()*25)];

console.log(win);
console.log(letter);

document.onkeyup = guess;

function guess(event) {

    console.log(win);
    console.log(letter);

    var newguess = event.key;
    var newguess = newguess.toLowerCase();
    console.log(newguess);
    if (win === false && guessnum > 0 && newguess !== letter ) {
        guessnum = parseInt(guessnum) - 1;
        var foo = " " + document.getElementById("guesses").innerHTML;
        document.getElementById("guesses").innerHTML = foo += newguess + ", ";
        document.getElementById("guessesleft").innerHTML = guessnum;
        console.log(guessnum);
        return guessnum;

    }  else if (win === false && guessnum > 0 && newguess === letter) {
                win = true
                console.log(win);
                winnum = parseInt(winnum) + 1;
                console.log(winnum);
                document.getElementById("wins").textContent = winnum;
                alert("You Win!")
                letter = alphabet[Math.floor(Math.random()*25)];
                console.log(letter);
                document.getElementById("guessesleft").innerHTML = 9;
                document.getElementById("guesses").innerHTML = " ";
                guessnum = 9;
                console.log(guessnum);
                win = false;
                console.log(win);
        }
            
    else if (guessnum === 0) {
                lossnum = parseInt(lossnum) + 1;
                console.log(lossnum);
                document.getElementById("losses").textContent = lossnum;
                letter = alphabet[Math.floor(Math.random()*25)];
                console.log(letter);
                document.getElementById("guessesleft").innerHTML = 9;
                document.getElementById("guesses").innerHTML = " ";
                guessnum = 9;
                console.log(guessnum);
                win = false;
                console.log(win);
        }
   }


}

