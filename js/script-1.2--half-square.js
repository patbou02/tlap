"use strict";

// Shared functions in js/_shared.js file
let userInput = prompt("Please enter one character (letter, number or symbol)"),
    dimension = parseInt(prompt("Please enter a dimension"));

function createHalfASquareBackwardsA() {
  console.info("=== 1.3a - Half of a Square REVERSED - BIG to SMALL === (white space first then character after)");
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

function createHalfASquareBackwardsB() {
  console.info("=== 1.3b - Half of a Square REVERSED - SMALL to BIG === (white space first then character after)");
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