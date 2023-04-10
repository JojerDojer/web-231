/*
============================================
; Title: davidson-number-game.js
; Author: John Davidson
; Date: 04/07/2023
; Description: The JavaScript page for WEB-231 assignment 4.2.
;============================================
*/

// Generates a random number between 1 and 10.
const rnd = Math.floor((Math.random() * 10) + 1)

function chkGuess() {
  const guess = document.getElementById('userEntry').value //Captures the user's input from the HTML userEntry class.
  let results = document.getElementById('results') //Assigns a TBD response to the HTML results div.

  const msgLessThan = "The number is less than"
  const msgGreaterThan = "The number is greater than"
  const msgCongrats = "Congratulations! You picked the correct number!"

//Compares the user's numeric input to the random generated number and displays the results of the game to the HTML results div.
  if (guess > rnd) {
    results.innerHTML = msgLessThan + " " + guess + "."
  } else if (guess < rnd) {
    results.innerHTML = msgGreaterThan + " " + guess + "."
  } else {
    results.innerHTML = msgCongrats
  }

}
