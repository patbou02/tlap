"use strict";

// Shared functions in ../shared/_shared.js file

console.log("=== 2.12 - Decode a Message ===");
console.info("page 41 - Tracking State: Decode a Message by converting array of numbers into letters");

function convertArrayStringsToNumbers() {
  for (let i = 0; i < inputArray.length; i++) {
    inputArray[i] = parseInt(inputArray[i]);
  }
}

function initializeArrays(input, mode) {
  if (mode === "U") {
    console.log('UPPERCASE array initialized');
    for (let i = 0; i < input.length; i++) {
      uppercaseArray.push(input[i].toUpperCase());
    }
    return uppercaseArray;
  } else if (mode === "L") {
    console.log('LOWERCASE array initialized');
    for (let i = 0; i < input.length; i++) {
      lowercaseArray.push(input[i].toLowerCase());
    }
    return lowercaseArray;
  } else if (mode === "P") {
    console.log('PUNCTUATION array initialized');
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
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    console.log('current mode: ' + currentMode);
    console.log('starting input: ' + input[i]);
    inputCode = getCharacterCode(input[i], getDivider(currentMode));
    console.log('divider: ' + divider);
    console.log('input code: ' + inputCode);
    inputCodeArray.push(inputCode);
    if (inputCodeArray[i] === 0) {
      currentMode = swapMode();
      console.log('swapping mode to: ' + currentMode);
    }
    console.log('resulting mode: ' + currentMode);
    processedInputArray.push(getCharacter(characterCode, currentMode));
    console.log('input code in Code array: ' + inputCodeArray[i]);
    console.log('character in character array: ' + processedInputArray[i]);
    console.log('     === moving on to next input value ===');
  }
  console.log(inputCodeArray);
  console.log(processedInputArray);

  return processedInputArray;
}

function decodeProcessedInput(input) {
  decodedMessage = input.join('');

  return console.log(decodedMessage);
}

//TODO: encapsulate multiple functions below into single function that's later invoked
convertArrayStringsToNumbers();

initializeArrays(lettersArray, modeArray[0]);
initializeArrays(lettersArray, modeArray[1]);
initializeArrays(punctuationArray, modeArray[2]);

processInput(inputArray);
decodeProcessedInput(processedInputArray);