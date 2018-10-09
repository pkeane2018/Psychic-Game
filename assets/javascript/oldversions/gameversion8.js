var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
    var guessnum = 9;
    var win = false;
    var letter = alphabet[Math.floor(Math.random()*26)];
    var lossnum = 0;
    var winnum = 0;
    var newguess = event.key;
    var newguess = newguess.toLowerCase();
    var foo = " ";

    for (guessnum = 9; guess > 0; i--) {
        if (win == false && newguess !== letter) {

            
        } 


    }
    if (win === false && guessnum > 0 && newguess !== letter) {
        guessnum = parseInt(guessnum) - 1;
        foo += newguess;
        document.getElementById("guesses").innerHTML = foo += newguess;
        document.getElementById("guessesleft").innerHTML = guessnum;
        return guessnum;

    }  else if (win === false && guessnum > 0 && newguess === letter) {
                win = true;
            }
                          
    else if (win === true) {
                winnum = parseInt(winnum) + 1;
                document.getElementById("wins").textContent = winnum;
                alert("You Win!")
                var letter = alphabet[Math.floor(Math.random()*26)];
                document.getElementById("guessesleft").innerHTML = 9;
                document.getElementById("guesses").innerHTML = " ";
                guessnum = 9;
                var win = false;
        }
            
    else if (guessnum === 0) {
                lossnum = parseInt(lossnum) + 1;
                document.getElementById("losses").textContent = lossnum;
                var letter = alphabet[Math.floor(Math.random()*26)];
                document.getElementById("guessesleft").innerHTML = 9;
                document.getElementById("guesses").innerHTML = " ";
                guessnum = 9;
                var win = false;
        }
     
}
