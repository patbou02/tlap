"use strict";

// Shared functions in js/_shared.js file

function createHalfASquareBackwardsA() {
  console.info("=== 1.02 - Half of a Square - BIG to SMALL === (white space first then character after)");
  console.info("page 26 - Output Patterns: Half a Square");

  Shared.validateUserInput(userInput);
  Shared.validateDimension(dimension);

  let halfSquareA = "";

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < i; j++) {
      halfSquareA += " ";
    }
    for (let k = 0; k < dimension - i; k++) {
      halfSquareA += userInput;
    }
    halfSquareA += globalVars.lineBreak;
  }
  return console.log(halfSquareA);
}

createHalfASquareBackwardsA();