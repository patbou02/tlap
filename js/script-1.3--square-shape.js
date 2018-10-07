"use strict";

// Shared functions in js/_shared.js file
let userInput = prompt("Please enter one character (letter, number or symbol)"),
    dimension = parseInt(prompt("Please enter a dimension"));

function createSquare() {
  console.info("=== 1.2 - Full Square === (single console.log - one for entire shape)");
  console.info("page 27 - Output Patterns: A Square");

  Shared.validateUserInput(userInput);
  Shared.validateDimension(dimension);

  let square = "";

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      square += userInput;
    }
    square += globalVars.lineBreak;
  }
  return console.log(square);
}

createSquare();