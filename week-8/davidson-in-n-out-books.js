/*
============================================
; Title: davidson-in-n-out-books.js
; Author: John Davidson
; Date: 05/07/2023
; Description: The JavaScript page for WEB-231 assignment 8.2.
;============================================
*/

//Three object literals with book properties for isbn, title, and pages.
const bookOne = {
  isbn: "0765365278",
  title: "The Way of Kings",
  pages: 1007
}

const bookTwo = {
  isbn: "0441013597",
  title: "Dune",
  pages: 896
}

const bookThree = {
  isbn: "0451524934",
  title: "1984",
  pages: 328
}

//Three object literals with author properties for name and genre.
const authorOne = {
  name: "Brandon Sanderson",
  genre: "Fantasy, Science fiction"
}

const authorTwo = {
  name: "George R. R. Martin",
  genre: "Fantasy, Horror, Science fiction"
}

const authorThree = {
  name: "Frank Herbert",
  genre: "Science fiction"
}

// A function that builds a table in the 'results' div and presents data from the 6 object literals.
function display() {
  const choice = document.getElementById('userSelect').value // Captures the value from the userSelect ID.
  let results = document.getElementById('results') // Variable containing the HTML location of the results ID.

  // A switch statement containing 2 cases for 'books and 'authors'.
  switch (choice) {
    case 'books':

      // This variable creates a table within the results card to display the "Top 3 Favorite Books" selection.
      let tblBooks = `
        <h3>Top 3 Favorite Books</h3>
        <table class="table">
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>${bookOne.isbn}</td>
            <td>${bookOne.title}</td>
            <td>${bookOne.pages}</td>
          </tr>
          <tr>
            <td>${bookTwo.isbn}</td>
            <td>${bookTwo.title}</td>
            <td>${bookTwo.pages}</td>
          </tr>
          <tr>
            <td>${bookThree.isbn}</td>
            <td>${bookThree.title}</td>
            <td>${bookThree.pages}</td>
          </tr>
          </tbody>
        <table>`


      results.innerHTML = tblBooks
      break;

      case 'authors':

        // This variable creates a table within the results card to display the "Top 3 Favorite Authors" selection.
        let tblAuthors = `
        <h3>Top 3 Favorite Authors</h3>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>${authorOne.name}</td>
            <td>${authorOne.genre}</td>
          </tr>
          <tr>
            <td>${authorTwo.name}</td>
            <td>${authorTwo.genre}</td>
          </tr>
          <tr>
            <td>${authorThree.name}</td>
            <td>${authorThree.genre}</td>
          </tr>
          </tbody>
        <table>`

        results.innerHTML = tblAuthors
        break;

        default:
        alert('Invalid selection, please try again!')
  }
}

