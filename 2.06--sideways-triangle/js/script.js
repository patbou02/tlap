"use strict";

// Shared functions in ../shared/_shared.js file
let userInput = prompt("Please enter one character (letter, number or symbol)"),
    dimension = parseInt(prompt("Please enter a dimension"));

function sidewaysTriangle() {
  console.log("=== 2.06 - Sideways Triangle ===");
  console.info("page 29 - Output Patterns: Sideways Triangle");

  Shared.validateUserInput(userInput);
  Shared.validateDimension(dimension);

  let triangle = "";

  for (let i = 1; i < dimension + 1; i++) {
    if (i <= Math.floor(dimension / 2)) {
      for (let j = 0; j < i; j++) {
        triangle += userInput;
      }
    } else if (i >= Math.ceil(dimension / 2) + 1) {
      for (let k = 0; k < ((dimension + 1) - i); k++) {
        triangle += userInput;
      }
    } else {
      for (let l = 0; l < i; l++) {
        triangle += userInput;
      }
    }
    // prevents an extra line is added after the sideways triangle
    (i < dimension) ? triangle += globalVars.lineBreak : triangle += "";
  }
  return console.log(triangle);
}

sidewaysTriangle();


//TODO: create version of above function with triangle pointing in the opposite direction.