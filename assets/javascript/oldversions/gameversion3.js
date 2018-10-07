var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
        var newguess = event.key;
        var newguess = newguess.toLowerCase();
        var lossnum = document.getElementById("losses").textContent;
        var winnum = document.getElementById("wins").textContent;
        var guessnum = 9;
        var win = false;
        var letter = alphabet[Math.floor(Math.random()*26)];
        while (win === false && guessnum > 0) {
                if (newguess != letter) { 
                    var foo = " ";
                    foo += newguess;
                    guessnum = guessnum - 1;
                    document.getElementById("guesses").innerHTML = foo;
                }  else if (newguess === letter) {
                    win = true;
                }
           
        }
            
        if (win === true) {
                winnum = parseInt(winnum) + 1;
                document.getElementById("wins").textContent = winnum;
                alert("You Win!")
                var letter = alphabet[Math.floor(Math.random()*26)];
                document.getElementById("guessesleft").innerHTML = 9;
                document.getElementById("guesses").innerHTML = " ";
                guessnum = 9;
                var win = false;
        }
            
        if (guessnum === 0) {
                lossnum = parseInt(lossnum) + 1;
                document.getElementById("losses").textContent = lossnum;
                var letter = alphabet[Math.floor(Math.random()*26)];
                document.getElementById("guessesleft").innerHTML = 9;
                document.getElementById("guesses").innerHTML = " ";
                guessnum = 9;
                var win = false;
        }
    }
    

console.log(lossnum);
console.log(winnum);
console.log(guessnum);
console.log(win);
console.log(newguess);