"use strict";

// Shared functions in js/_shared.js file
//let asciiCode = "5"; //prompt("Please enter one digit positive number (0 - 9):");

console.log("=== 1.12 - Decode a Message ===");
console.info("page 41 - Decode a Message");

// Global Variables
let inputArray       = ["18", "12312", "171"],
    modeArray        = ["U", "L", "P"],
    modeIndex        = 0,
    mode             = modeArray[modeIndex],
    letters          = "abcdefghijklmnopqrstuvwxyz".split(''),
    punctuation      = "!?,. ;\"'".split(''),
    uppercaseArray   = [],
    lowercaseArray   = [],
    punctuationArray = [];

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

function initializeArrays(inputArray, mode) {
  if (mode === "U") {
    console.log('UPPERCASE array initialized');
    for (let i = 0; i < inputArray.length; i++) {
      uppercaseArray.push(inputArray[i].toUpperCase());
    }
    return uppercaseArray;
  } else if (mode === "L") {
    console.log('LOWERCASE array initialized');
    for (let i = 0; i < inputArray.length; i++) {
      lowercaseArray.push(inputArray[i].toLowerCase());
    }
    return lowercaseArray;
  } else if (mode === "P") {
    console.log('PUNCTUATION array initialized');
    for (let i = 0; i < inputArray.length; i++) {
      punctuationArray = inputArray;
    }
    return punctuationArray;
  }
}


initializeArrays(letters, "U");
initializeArrays(letters, "L");
initializeArrays(punctuation, "P");



//processInput(inputArray);
//initializeAnswerArrays();

