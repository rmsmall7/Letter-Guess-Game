// An array of values for the computer to randomly choose from. 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables are set to track guessed letters, guesses remaining, wins, losses. 
var guessedLetters = [];
var guesses = 10;
var wins = 0;
var losses = 0;
var answer;

//Display the starting score on the webpage
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;

function computerGuess() {
  // Computer randomly chooses a value from the array above.
  answer = alphabet[Math.floor(Math.random() * alphabet.length)];
  // For testing purposes, we can see the computer's choice in the console.
  console.log(answer);
  return answer;
}

computerGuess();

// when the user hits a key ....
document.onkeypress = function (event) {
  var userGuess = event.key;

  // if the key pressed is the same as the value.....
  if (answer === userGuess) {

    // Go up one number on the wins variable.                    
    wins++;

    //Display the new number of wins on page.
    document.getElementById("wins").innerHTML = wins;

    //reset the array
    guessedLetters = [];

    //reset the guess counter
    guesses = 10;

    //Display winning message on screen.
    document.getElementById("message").innerHTML = "<h2>You win! The letter was " + answer + ". <br /> Guess what letter I'm thinking of now.</h2>";
  
    // Generate random letter again. 
    computerGuess();

  }

  // if the key pressed is NOT the same as the value.....
  else {

    // reduce value of remaining guesses by 1.
    guesses--;

    //Display the new number of guesses on page.
    document.getElementById("guesses").innerHTML = guesses;

    // Store the guess into the guessedLetters array.
    guessedLetters.push(userGuess);

    //Displays guessedLetters on page.
    document.getElementById("guessedLetters").innerHTML = guessedLetters;

    //Display winning message on screen.
    document.getElementById("message").innerHTML = "<h2>Nope! Keep Trying! <br /> Guess Again.</h2>";

  }


  // When there are no remaining guesses, then increment on the losses variable.
  if (guesses === 0) {

    //reset the array
    guessedLetters = [];

    //reset the guess counter
    guesses = 10;

    // increments losses
    losses++;

    // displays the score
    document.getElementById("losses").innerHTML = losses;

    //Display winning message on screen.
    document.getElementById("message").innerHTML = "<h2>The letter was " + answer + ". You lose! <br /> Guess what letter I'm thinking of now.</h2>";

    // Generate random letter again
    computerGuess();
  }

}