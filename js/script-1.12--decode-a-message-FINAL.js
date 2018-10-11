"use strict";

console.log("=== 1.12 - Decode a Message ===");
console.info("page 41 - Decode a Message");

// Global Variables
let modeIndex   = 0,
    letters     = "abcdefghijklmnopqrstuvwxyz",
    punctuation = "!?,. ;\"'",
    divider,
    characterCode,
    inputCode,
    character,
    decodedMessage;

// Global Arrays
let inputArray          = ["18", "12312", "171", "763", "98423", "1208", "216", "11", "500", "18", "241", "0", "32", "20620", "27", "10"],
    modeArray           = ["U", "L", "P"],
    currentMode         = modeArray[modeIndex],
    lettersArray        = letters.split(''),
    punctuationArray    = [],
    uppercaseArray      = [],
    lowercaseArray      = [],
    inputCodeArray      = [],
    processedInputArray = [];

function convertArrayStringsToNumbers() {
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = parseInt(inputArray[i]);
  }
}

function initializeArrays(input, mode) {
  if (mode === "U") {
    for (let i = 0; i < input.length; i++) {
      uppercaseArray.push(input[i].toUpperCase());
    }
    return uppercaseArray;
  } else if (mode === "L") {
    for (let i = 0; i < input.length; i++) {
      lowercaseArray.push(input[i].toLowerCase());
    }
    return lowercaseArray;
  } else if (mode === "P") {
    punctuationArray = punctuation.split('');
    return punctuationArray;
  }
}

function swapMode() {
  if (modeIndex != "2") {
    modeIndex++;
  } else {
    modeIndex = 0;
  }
  currentMode = modeArray[modeIndex];
  return currentMode;
}

function getDivider(mode) {
  switch(mode) {
    case "U":
    case "L":
      divider = 27;
      break;
    case "P":
      divider = 9;
      break;
    default:
      divider = 0;
      console.log('Please enter a correct mode in order to get appropriate divider');
      break;
  }
  return divider;
}

function getCharacterCode(input, divider) {
  characterCode = input % divider;
  return characterCode;
}

function getCharacter(code, mode) {
  if (code === 0) {
    character = "";
  } else {
    if (mode === "U") {
      character = uppercaseArray[code - 1];
    } else if (mode === "L") {
      character = lowercaseArray[code - 1];
    } else if (mode === "P") {
      character = punctuationArray[code - 1];
    }
  }
  return character;
}

function processInput(input) {
  for (let i = 0; i < input.length; i++) {
    inputCode = getCharacterCode(input[i], getDivider(currentMode));
    inputCodeArray.push(inputCode);
    if (inputCodeArray[i] === 0) {
      currentMode = swapMode();
    }
    processedInputArray.push(getCharacter(characterCode, currentMode));
  }
  return processedInputArray;
}

function decodeProcessedInput(input) {
  decodedMessage = input.join('');
  return console.log(decodedMessage);
}

convertArrayStringsToNumbers();

initializeArrays(lettersArray, modeArray[0]);
initializeArrays(lettersArray, modeArray[1]);
initializeArrays(punctuationArray, modeArray[2]);

processInput(inputArray);
decodeProcessedInput(processedInputArray);