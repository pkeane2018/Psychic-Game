var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var guessnum = 9;
var lossnum = 0;
var winnum = 0;

document.onkeyup = function (event) {
    var win = false;
    var letter = alphabet[Math.floor(Math.random()*26)];
    var newguess = event.key;
    var newguess = newguess.toLowerCase();
    if (win === false && guessnum > 0 && newguess !== letter) {
        guessnum = parseInt(guessnum) - 1;
        document.
        var foo = document.createTextNode("placeholder");
        document.getElementById(foo).innerHTML = newguess;
        document.getElementById("guesses").appendChild("sky");
        console.log(guessnum);
        return guessnum;

    }  else if (win === false && guessnum > 0 && newguess === letter) {
                win = true
                console.log(win);
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
