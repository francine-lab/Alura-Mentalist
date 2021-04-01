var MAX_ATTEMPTS = 3;
var UPPER_LIMIT = 11;
var score = 0;
var matches = 0;

// Function to start a game
function myFunction() {

  // Select values randomly
  var secretNumber = parseInt(Math.random() * UPPER_LIMIT);

  // Number of attempts
  var attempt = MAX_ATTEMPTS;

  // Get answers from the user
  var play = document.getElementById("myBtn");

  // Keep trying until the last attempt
  while (attempt > 0) {
    var kick = parseInt(prompt("Type a number between 0 and 10"));
    if (secretNumber == kick) {
      alert("Correctly!");
      score++;
      document.getElementById("score-value").innerHTML = score;
      attempt -= MAX_ATTEMPTS;
    } else if (secretNumber > kick) {
      alert("The secret number is bigger...");
    } else if (secretNumber < kick) {
      alert("The secret number is smaller...");
    } 
    attempt--;
  }

  // Tell the user when he lost the game
  if (kick != secretNumber) {
    alert("Sorry. Best lucky next time. The secret number was: " + secretNumber);
  }

  // How many matches
  matches++;
  document.getElementById("matches-value").innerHTML = matches;
}