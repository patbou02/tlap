"use strict";

// Shared functions in ../shared/_shared.js file

function createTriangleA() {
  console.info("=== 2.01 - Triangle or Half a Square === (multiple console.log - one per row)");
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