"use strict";

// Shared functions in js/_shared.js file
let userInput = prompt("Please enter one character (letter, number or symbol)"),
    width     = parseInt(prompt("Please enter a width value")),
    height    = parseInt(prompt("Please enter a height value"));

function createRectangle(width, height) {
  console.info("=== 1.04 - Rectangle === (single console.log - one for entire shape)");
  console.info("page 27 - Output Patterns: A Square");

  Shared.validateUserInput(userInput);

  let rectangle = "";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      rectangle += userInput;
    }
    rectangle += globalVars.lineBreak;
  }
  return console.log(rectangle);
}

createRectangle(width, height);