"use strict";

// Shared functions in js/_shared.js file
//let asciiCode = "5"; //prompt("Please enter one digit positive number (0 - 9):");

  console.log("=== 1.9 - Convert ASCII digit code to Integer Equivalent ===");
  console.info("page 35 - Input Processing: Convert Character Digit to Integer");

let inputArray  = ["18", "12312", "171", "98423", "1208", "216", "11", "500", "18", "241", "0", "32", "20620", "27", "10"],
    outputArray = [],
    modeArray   = ["U", "L", "P"],
    modeIndex = 2;

// set modeValue based on modeIndex
function swapMode() {
  let modeValue;
  switch (modeIndex) {
    case 0:
      modeIndex++;
      modeValue = modeArray[modeIndex];
      break;
    case 1:
      modeIndex++;
      modeValue = modeArray[modeIndex];
      break;
    case 2:
      modeIndex = 0;
      modeValue = modeArray[modeIndex];
      break;
  }
  //console.log('mode is now: ' + modeValue);
  return modeValue;
}

function convertInputToCode(input, modeValue) {
  let letters     = "abcdefghijklmnopqrstuvwxyz",
      punctuation = "!?,. ;\"'",
      characters  = [],
      character,
      divisor;

  // set divisor based on modeValue
  switch(modeValue) {
    case "U":
    case "L":
      divisor = 27;
      break;
    case "P":
      divisor = 9;
      break;
  }

  let characterIndex  = (input % divisor) - 1;

  //set possible characters based on modeValue
  if (modeValue === "U") {
    character = letters[characterIndex].toUpperCase();
  } else if (modeValue === "L") {
    character = letters[characterIndex].toLowerCase();
  } else if (modeValue === "P") {
    character = punctuation[characterIndex];
  }

  return console.log(`Current mode is ${modeValue} and based on this mode, character is: ${character}.`);
}
//convertInputToCode(763, "P");

let headerEl     = document.getElementById('header-h4');
console.log('starting mode: ' + modeArray[0]);
headerEl.addEventListener('click', function (e) {
  let swap = swapMode();
  convertInputToCode(763, swap);
});