/*
============================================
; Title: davidson-bookstore.js
; Author: John Davidson
; Date: 04/23/2023
; Description: The JavaScript page for WEB-231 assignment 6.2.
;============================================
*/

const books = ['The Way of Kings', 'Dune', '1984']
const authors = ['Brandon Sanderson', 'George R. R. Martin', 'Frank Herbert']
const publishers = ['Penguin Random House', 'Chilton Books', 'Simon & Schuster']

authors.sort() // Sorts the indexes of the authors array in ascending order.

publishers.sort().reverse() // Sorts the indexes of the publishers array in descending order.




function display() {
  const choice = document.getElementById('userSelect').value // Captures the value from the userSelect ID.
  let results = document.getElementById('results') // Variable containing the HTML location of the results ID.

  // Switch statement that executes a specified loop based on the user's selection within HTML.
  switch (choice) {
    case 'books':

      // This variable creates a table within the results card to display the books selection.
      let tblBooks = `
        <h3>Books Listing</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `
      // A For loop that gathers the properties of the books array and assigns them to the td element.
      for (let i = 0; i < books.length; i++) {
        tblBooks += `
          <tr>
            <td>${books[i]}</td>
          </tr>
        `
      }
      tblBooks += `</tbody><table>`
      results.innerHTML = tblBooks
      break;

      case 'authors':

        // This variable creates a table within the results card to display the authors selection.
        let tblAuthors = `
          <h3>Authors Listing</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
        `

        authors.sort()

        // A For loop that gathers the properties of the authors array and assigns them to the td element.
        for (let i = 0; i < authors.length; i++) {
          tblAuthors += `
            <tr>
              <td>${authors[i]}</td>
            </tr>
          `
        }
        tblAuthors += `</tbody><table>`
        results.innerHTML = tblAuthors
        break;

        case 'publishers':

          // This variable creates a table within the results card to display the publishers selection.
          let tblPublishers = `
            <h3>Publishers Listing</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody>
          `

          // A For loop that gathers the properties of the publishers array and assigns them to the td element.
          for (let i = 0; i < publishers.length; i++) {
            tblPublishers += `
              <tr>
                <td>${publishers[i]}</td>
              </tr>
            `
          }
          tblPublishers += `</tbody><table>`
          results.innerHTML = tblPublishers
          break;

        default:
        alert('Invalid selection, please try again!')



  }
}
