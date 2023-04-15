/*
============================================
; Title: davidson-sequence-game.js
; Author: John Davidson
; Date: 04/15/2023
; Description: The JavaScript page for WEB-231 assignment 5.2.
;============================================
*/

function displaySequence() {
  const choice = document.getElementById('userSelect').value // Captures the value from the userSelect ID.
  let results = document.getElementById('results') // Variable containing the HTML location of the results ID.

  // Switch statement that executes a specified loop based on the user's number type selection within HTML.
  switch (choice) {
    case 'numbers':
      let index = 0
      let txtNumSequence = ""

      // A while loop that builds a comma delimited string of numbers 1-10.
      while (index < 11) {
        txtNumSequence += index + ", ";
        index++;
      }

      // Displays the results of the loop to the results ID in HTML.
      results.innerHTML = txtNumSequence.slice(0, -2);
        break;

    case 'even':
      let evenNumber = 0
      let txtEvenSequence = ""

      // A do...while loop that builds a comma delimited string of even numbers 0-20.
      do {
        txtEvenSequence += evenNumber + ", ";
        evenNumber+=2;
      }
      while (evenNumber < 22);

      // Displays the results of the loop to the results ID in HTML.
      results.innerHTML = txtEvenSequence.slice(0, -2);
      break;

    case 'odd':
      let txtOddSequence = ""

      // A for loop that builds a comma delimited string of odd numbers 1-19.
      for (let i = 1; i < 20; i += 2) {
        txtOddSequence += i + ", ";
      }

      // Displays the results of the loop to the results ID in HTML.
      results.innerHTML = txtOddSequence.slice(0, -2);
      break;

    // Alerts the user with a message if no option in the game is selected.
    default:
      alert('Invalid selection, please try again.')
  }
}
