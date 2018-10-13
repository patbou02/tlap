"use strict";

// Shared functions in js/_shared.js file

function createTriangleB() {
  console.info("=== 1.01 - Triangle or Half a Square === (single console.log - one for entire shape)");
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