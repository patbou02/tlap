"use strict";

// Shared functions in js/_shared.js file
//let asciiCode = "5"; //prompt("Please enter one digit positive number (0 - 9):");

console.log("=== 1.12 - Decode a Message ===");
console.info("page 41 - Decode a Message");

// Global Variables
let inputArray       = ["18", "12312", "171", "763", "98423", "1208", "216", "11", "500", "18", "241", "0", "32", "20620", "27", "10"],
    modeArray        = ["U", "L", "P"],
    modeIndex        = 0,
    currentMode      = modeArray[modeIndex],
    letters          = "abcdefghijklmnopqrstuvwxyz".split(''),
    punctuation      = "!?,. ;\"'".split(''),
    uppercaseArray   = [],
    lowercaseArray   = [],
    punctuationArray = [],
    divider,
    characterCode,
    inputCode,
    inputCodeArray   = [],
    character,
    processedInputArray = [],
    decodedMessage;

function convertArrayStringsToNumbers() {
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = parseInt(inputArray[i]);
  }
}

function initializeArrays(inputArray, mode) {
  if (mode === "U") {
    //console.log('UPPERCASE array initialized');
    for (let i = 0; i < inputArray.length; i++) {
      uppercaseArray.push(inputArray[i].toUpperCase());
    }
    return uppercaseArray;
  } else if (mode === "L") {
    //console.log('LOWERCASE array initialized');
    for (let i = 0; i < inputArray.length; i++) {
      lowercaseArray.push(inputArray[i].toLowerCase());
    }
    return lowercaseArray;
  } else if (mode === "P") {
    //console.log('PUNCTUATION array initialized');
    for (let i = 0; i < inputArray.length; i++) {
      punctuationArray = inputArray;
    }
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

function getCharacter(characterCode, mode) {
  if (characterCode === 0) {
    character = "";
  } else {
    if (mode === "U") {
      character = uppercaseArray[characterCode - 1];
    } else if (mode === "L") {
      character = lowercaseArray[characterCode - 1];
    } else if (mode === "P") {
      character = punctuationArray[characterCode - 1];
    }
  }
  return character;
}

function processInput(input) {
  //console.log(input);
  for (let i = 0; i < input.length; i++) {
    //console.log('current mode: ' + currentMode);
    //console.log('starting input: ' + input[i]);
    inputCode = getCharacterCode(input[i], getDivider(currentMode));
    //console.log('divider: ' + divider);
    //console.log('input code: ' + inputCode);
    inputCodeArray.push(inputCode);
    if (inputCodeArray[i] === 0) {
      currentMode = swapMode();
      //console.log('swapping mode to: ' + currentMode);
    }
    //console.log('resulting mode: ' + currentMode);
    processedInputArray.push(getCharacter(characterCode, currentMode));
    //console.log('input code in Code array: ' + inputCodeArray[i]);
    //console.log('character in character array: ' + processedInputArray[i]);
    //console.log('=== moving on to next input value ===');
  }
  //console.log(inputCodeArray);
  //console.log  (processedInputArray);

  return processedInputArray;
}

function decodeProcessedInput(input) {
  decodedMessage = input.join('');

  return console.log(decodedMessage);
}

convertArrayStringsToNumbers();

initializeArrays(letters, modeArray[0]);
initializeArrays(letters, modeArray[1]);
initializeArrays(punctuation, modeArray[2]);

processInput(inputArray);
decodeProcessedInput(processedInputArray);