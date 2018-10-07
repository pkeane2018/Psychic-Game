var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
        var newguess = event.key;
        var newguess = newguess.toLowerCase();
        var lossnum = document.getElementById("losses").textContent;
        var winnum = document.getElementById("wins").textContent;
        var guessnum = 9;
        var win = false;
        while (win === false && guessnum > 0) {
            for (var i = 0; i < alphabet.length; i++) { 
                if (newguess === alphabet[i] && newguess !== letter) { 
                    var foo = document.createTextNode("placeholder text");
                    var boo = document.createElement("p");
                    boo.appendChild(foo);
                    foo.setAttribute = ("id", "sky");
                    document.getElementById("sky").innerHTML = newguess," ";
                    document.getElementById("guesses").appendChild("sky");
                }  else if (newguess === letter) {
                    win = true;
                }
            }
        }
            
        if (win === true) {
                winnum = winnum + 1;
                getElementbyID("wins".textContent = winnum);
                alert("You Win!")
                var letter = alphabet[Math.floor(Math.random()*26)];
                document.getElementById("guessesleft") = 9;
                document.getElemenntById("guesses") = " ";
                var win = false;
        }
            
        if (guessnum === 0) {
                lossnum = lossnum + 1;
                getElementbyID("losses".textContent = lossnum);
                var letter = alphabet[Math.floor(Math.random()*26)];
                document.getElementById("guessesleft") = 9;
                document.getElemenntById("guesses") = " ";
                var win = false;
        }
    }
    


console.log(newguess);
console.log(lossnum);
console.log(winnum);
console.log(guessnum);
console.log(win);