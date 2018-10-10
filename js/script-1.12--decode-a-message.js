"use strict";

// Shared functions in js/_shared.js file
//let asciiCode = "5"; //prompt("Please enter one digit positive number (0 - 9):");

console.log("=== 1.12 - Decode a Message ===");
console.info("page 41 - Decode a Message");

// Variables
let inputArray = ["18", "12312", "171"],
    modeArray  = ["U", "L", "P"],
    modeIndex = 0,
    letters = "abcdefghijklmnopqrstuvwxyz",
    punctuation = "!?,. ;\"'";

function processInput(input) {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}

function swapMode() {
  let modeInEffect;
  if (modeIndex != "2") {
    modeIndex++;
  } else {
    modeIndex = 0;
  }
  modeInEffect = modeArray[modeIndex];

  return modeInEffect;
}

processInput(inputArray);

