       // Creative variables
       var wins = 0;
       var losses = 0;
       var guessesLeft = 10;
       var lettersGuessed = [];


       var winsText = document.getElementById("wins");
       var lossesText = document.getElementById("losses");
       var GuessLeftText = document.getElementById("Left");
       var GuessesText = document.getElementById("Guesses");


       var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       var RandomLetter = alpha[Math.floor(Math.random() * alpha.length)]
           // Create random letter generator for computer pick
           // Create click command for user guess and comparison to computer guess



       // }

       // }

       document.onkeypress = function(event) {
           var userGuess = event.key;
           lettersGuessed.push(userGuess)





           if (userGuess === RandomLetter) {
               wins++;
               guessesLeft = 10;
               lettersGuessed = []
               restart();


           } else {
               guessesLeft--;

           }
           if (guessesLeft === 0) {
               losses++;
               guessesLeft = 10;
               lettersGuessed = []
               restart();

           }



           winsText.textContent = "wins: " + wins;
           lossesText.textContent = "losses: " + losses;
           GuessesText.textContent = "Guesses so far: " + lettersGuessed;
           GuessLeftText.textContent = "Guesses Left: " + guessesLeft;

       }

       function restart() {


           if (losses > 10) {
               losses = 0, wins = 0;
           }
           if (wins > 10) {
               losses = 0, wins = 0;
           }


       }