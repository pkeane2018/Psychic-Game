var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function restart () {
    var letter = alphabet[Math.floor(Math.random()*26)];
    document.getElementbyId("guessesleft") = 9;
    document.getElemenntbyId("guesses") = " ";
    var win = false;
}
   
document.onkeyup = function Game(event) {
    var newguess = event.key;
    var newguess = newguess.toLowerCase();
    var lossnum = doument.getElemenntbyId("losses").textContent;
    var winnum = document.getElementbyID("wins").textContent;
    while (win === false && guessnum > 0) {
        for (var i = 0; i < alphabet.length; i++) { 
            if (newguess === alphabet[i] && newguess !== letter) { 
                document.getElementById("guesses").appendChild(newguess);
            }  else if (newguess === letter) {
                win = true;
            }
        }
    }
        
    if (win === true) {
            winnum = winnum + 1;
            getElementbyID("wins".textContent = winnum);
            alert("You Win!")
            reset();
    }
        
    if (guessnum === 0) {
            lossnum = lossnum + 1;
            getElementbyID("losses".textContent = lossnum);
            reset();
    }
}

document.onkeyup = Game(event);
