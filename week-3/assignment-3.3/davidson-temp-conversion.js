/*
============================================
; Title: davidson-temp-conversion.js
; Author: John Davidson
; Date: 04/01/2023
; Description: The JavaScript page for WEB-231 assignment 3.3.
;============================================
*/


function calcCelsius() {
  // Captures the value from the HTML input field.
  const fahrenheit = document.getElementById('userEntry').value

  //Converts the value from the input field into Celsius.
  const celsius = (fahrenheit - 32) / 1.8

  //Assigns the converted result to the innerHTML of the results div.
  document.getElementById('results').innerHTML = celsius.toFixed(2)
}
