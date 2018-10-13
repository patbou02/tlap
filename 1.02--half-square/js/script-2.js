"use strict";

// Shared functions in js/_shared.js file

function createHalfASquareBackwardsB() {
  console.info("=== 1.02 - Half of a Square - SMALL to BIG === (white space first then character after)");
  console.info("page 26 - Output Patterns: Half a Square");

  Shared.validateUserInput(userInput);
  Shared.validateDimension(dimension);

  let halfSquareB = "";

  for (let i = 1; i <= dimension; i++) {
    for (let j = 1; j <= dimension - i; j++) {
      halfSquareB += " ";
    }
    for (let k = 0; k < i; k++) {
      halfSquareB += userInput;
    }
    halfSquareB += globalVars.lineBreak;
  }
  return console.log(halfSquareB);
}

createHalfASquareBackwardsB();