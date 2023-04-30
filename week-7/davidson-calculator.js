/*
============================================
; Title: davidson-calculator.js
; Author: John Davidson
; Date: 04/29/2023
; Description: The JavaScript page for WEB-231 assignment 7.2.
;============================================
*/

/* A function that performs a multiplication calculation while also checking for
   error entries in the text input fields.
*/
function multiply(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw Error ('Inputs must be numbers.')
  }
  if (isNaN(num1) || isNaN(num2)) {
    throw Error ('Inputs must be numbers.')
  }
  return num1 * num2
}

/* A function that performs a division calculation while also checking for
   error entries in the text input fields. Values must be of the type 'number' and
   cannot be 0.
*/
function divide(num3, num4) {
  if (typeof num3 !== 'number' || typeof num4 !== 'number') {
    throw Error ('Inputs must be numbers.')
  }
  if (isNaN(num3) || isNaN(num4)) {
    throw Error ('Inputs must be numbers.')
  }
  if (num3 === 0 || num4 === 0) {
    throw Error('Cannot divide by zero.')
  }
  return num3 / num4
}

/* This function retrieves two separate values from the text input fields and converts
   the values to numbers to multiply them.
*/
function displayMultiplyResults() {
  const num1 = parseFloat(document.getElementById('mulEntry1').value)
  const num2 = parseFloat(document.getElementById('mulEntry2').value)

  /* Try statement that uses the multiply() function to calculate the two values,
     then assigning the result to the 'mul-results' ID.
  */
  try {
    const sum = multiply(num1, num2)
    let results = document.getElementById('mul-results')
    results.innerHTML = num1 + ' * ' + num2 + '= ' + sum
  }
  catch(err) {
    alert(err)

  }

}
/* This function retrieves two separate values from the text input fields and converts
   the values to numbers to divide them.
*/
function displayDivideResults() {
  const num3 = parseFloat(document.getElementById('divEntry1').value)
  const num4 = parseFloat(document.getElementById('divEntry2').value)

  /* Try statement that uses the divide() function to calculate the two values,
     then assigning the result to the 'div-results' ID.
  */
  try {
    const sum = divide(num3, num4)
    let results = document.getElementById('div-results')
    results.innerHTML = num3 + ' / ' + num4 + '= ' + sum
  }
  catch(err) {
    alert(err)

  }

}
