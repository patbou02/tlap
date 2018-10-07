"use strict";

// Shared functions in js/_shared.js file
let userInput = prompt("Please enter one character (letter, number or symbol)"),
    dimension = parseInt(prompt("Please enter a dimension"));

function createTriangleA() {
  console.info("=== 1.1a - Triangle or Half a Square === (multiple console.log - one per row)");
  console.info("page 26 - Output Patterns: Half a Square");

  Shared.validateUserInput(userInput);
  Shared.validateDimension(dimension);

  for (let i = 0; i < dimension; i++) {
    let triangleRow = "";
    for (let j = 0; j < dimension - i; j++) {
      triangleRow += userInput;
    }
    console.log(triangleRow);
  }
}

createTriangleA();

function createTriangleB() {
  console.info("=== 1.1b - Triangle or Half a Square === (single console.log - one for entire shape)");
  console.info("page 26 - Output Patterns: Half a Square");

  Shared.validateUserInput(userInput);
  Shared.validateDimension(dimension);

  let triangle = "";

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension - i; j++) {
      triangle += userInput;
    }
    triangle += globalVars.lineBreak;
  }
  return console.log(triangle);
}

createTriangleB();