"use strict";

// Shared functions in js/_shared.js file
//let asciiCode = "5"; //prompt("Please enter one digit positive number (0 - 9):");

  console.log("=== 1.9 - Convert ASCII digit code to Integer Equivalent ===");
  console.info("page 35 - Input Processing: Convert Character Digit to Integer");

let inputArray  = ["18", "12312", "171", "98423", "1208", "216", "11", "500", "18", "241", "0", "32", "20620", "27", "10"],
    outputArray = [],
    modeArray   = ["U", "L", "P"];

function swapMode(modeIndex) {
  let mode;
  switch (modeIndex) {
    case 0:
      modeIndex++;
      mode = modeArray[modeIndex];
      break;
    case 1:
      modeIndex++;
      mode = modeArray[modeIndex];
      break;
    case 2:
      modeIndex = 0;
      mode = modeArray[modeIndex];
      break;
  }
  return mode;
}

function convertInputToCode(input, mode) {
  let letters     = "abcdefghijklmnopqrstuvwxyz",
      punctuation = "!?,. ;\"'";

  // set divisor based on mode
  let divisor;
  switch(mode) {
    case "U":
    case "L":
      divisor = 27;
      break;
    case "P":
      divisor = 9;
      break;
  }

  // set possible characters based on mode
  let possibleCharacters = [];
  if (mode === "U") {
    for (let i = 0; letters.length; i++) {
      possibleCharacters.push(letters[i].toUpperCase());
    }
  } else if (mode === "L") {
    for (let i = 0; letters.length; i++) {
      possibleCharacters.push(letters[i].toLowerCase());
    }
  } else if (mode === "P") {
    for (let j = 0; punctuation.length; j++) {
      possibleCharacters.push(punctuation[j]);
    }
  }

  let characterIndex  = (input % divisor) - 1;

  return console.log(possibleCharacters);
}
convertInputToCode(763, "P");


function processInput() {
  for (let i = 0; i < inputArray.length; i++) {
    console.log('number: ' + inputArray[i]);
  }
}
//processInput();

let headerEl  = document.getElementById('header-h4');
console.log('starting mode: ' + modeArray[0]);
headerEl.addEventListener('click', function (e) {
  let mode = swapMode();
  convertInputToCode(763, mode);
});