/*
  Title: payroll.js
  Author: John Davidson
  Date: 03/25/2023
  Description: JavaScript page for WEB-231 assignment 2.2.
*/

//Declaring variables for employee record one information.
const beethovenFirstName = "Ludwig"
const beethovenLastName = "Beethoven"
const beethovenAddress = "505 main street"
const beethovenHireDate = new Date().toLocaleDateString('en-US')
const beethovenPayRate = 18.9.toFixed(1)

//Declaring variables for employee record two information.
const bachFirstName = "Johann"
const bachLastName = "Bach"
const bachAddress = "512 main street"
const bachHireDate = new Date().toLocaleDateString('en-US')
const bachPayRate = 25.5.toFixed(1)

//Declaring variables for employee record three information.
const mozartFirstName = "Wolfgang"
const mozartLastName = "Mozart"
const mozartAddress = "600 main street"
const mozartHireDate = new Date().toLocaleDateString('en-US')
const mozartPayRate = 50.1.toFixed(1)

//Assigning Employee record one information for html ul lists.
document.getElementById("beethoven-firstName").innerHTML = beethovenFirstName
document.getElementById("beethoven-lastName").innerHTML = beethovenLastName
document.getElementById("beethoven-address").innerHTML = beethovenAddress
document.getElementById("beethoven-hireDate").innerHTML = beethovenHireDate
document.getElementById("beethoven-payRate").innerHTML = beethovenPayRate

//Assigning Employee record two information for html ul lists.
document.getElementById("bach-firstName").innerHTML = bachFirstName
document.getElementById("bach-lastName").innerHTML = bachLastName
document.getElementById("bach-address").innerHTML = bachAddress
document.getElementById("bach-hireDate").innerHTML = bachHireDate
document.getElementById("bach-payRate").innerHTML = bachPayRate

//Assigning Employee record three information for html ul lists.
document.getElementById("mozart-firstName").innerHTML = mozartFirstName
document.getElementById("mozart-lastName").innerHTML = mozartLastName
document.getElementById("mozart-address").innerHTML = mozartAddress
document.getElementById("mozart-hireDate").innerHTML = mozartHireDate
document.getElementById("mozart-payRate").innerHTML = mozartPayRate
