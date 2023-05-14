/*
============================================
; Title: davidson-dino-app.js
; Author: John Davidson
; Date: 05/14/2023
; Description: The JavaScript page for WEB-231 assignment 9.2.
;============================================
*/

// Gigantosaurus parent class that contains a name property and a method.
// Returns the name of the dinosaur and a string of its sounding noise.
class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }

  roar() {
    return this.name + ' says: rooooooar'
  }
}

//Tyrannosaurus subclass that contains a name property and a method.
// Returns the name of the dinosaur and a string of its sounding noise.
class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);

  }

  growl() {
    return this.name + ' says: groooooowl'
  }
}

//Velociraptor subclass that contains a name property and a method.
// Returns the name of the dinosaur and a string of its sounding noise.
class Velociraptor extends Tyrannosaurus{
  constructor(name) {
    super(name);
  }

  awk() {
    return this.name + ' says: awk awk awwwwwwk'
  }
}

// Creates 3 new objects from each dinosaur class.
const giga = new Gigantosaurus('Giga')
const rex = new Tyrannosaurus('Rex')
const raptor = new Velociraptor('Raptor')



// Function that is called when the submit button in the HTML document is clicked.
function display() {

  // Declares an empty variable to later contain the selected value.
  let radioSelection = ''

  // Variable that grabs the div 'results' that will later display the dinosaur sound.
  let results = document.getElementById('results')

  // Selects all of the input elements with the name attribute = "dinosaurs".
  const selection = document.querySelectorAll('input[name="dinosaurs"]')

  /* Loops through all the selected input elements and adds the value of the checked one
     to the radioSelection variable.
  */
  for (let choice of selection) {
    if (choice.checked) {
      radioSelection += choice.value
    }
  }

  /* Uses a switch statement to determine which dinosaur was selected and then displays
     the corresponding dinosaur noise to the 'results' card.
  */
  switch (radioSelection) {
    case 'giga':
      results.innerHTML = giga.roar()
      break;

    case 'rex':
      results.innerHTML = rex.growl()
      break;

    case 'raptor':
      results.innerHTML = raptor.awk()
      break;

    // If the submit button is clicked without a radio button selected, an alert message is sent.
    default:
      alert('Invalid selection, please try again!')
  }
}
