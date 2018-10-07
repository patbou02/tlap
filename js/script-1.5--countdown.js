"use strict";

// Shared functions in js/_shared.js file
let dimension = parseInt(prompt("Please enter a dimension"));

function countdownByCountingUpWithNumbers() {
  console.log("=== 1.5 - Countdown by Counting Up === (with numbers)");
  console.info("page 28 - Output Patterns: Countdown by Counting Up");

  Shared.validateDimension(dimension);

  let countdown = "";

  for (let i = 0; i < dimension; i++) {
    countdown += (dimension - i) + globalVars.lineBreak;
  }
  return console.log(countdown);
}

countdownByCountingUpWithNumbers();