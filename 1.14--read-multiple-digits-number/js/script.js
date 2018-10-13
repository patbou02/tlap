"use strict";

let answer,
    answerArray = [],
    finalAnswer = 0,
    input       = prompt("Please enter a positive number."),
    inputArray  = input.split(''),
    unitArray   = [],
    unitMultiplier,
    unitMultiplierArray = [];

function readMultipleDigitsNumber() {
  console.log("=== 1.14 - Read Multiple Digits Number ===");
  console.info("page 44 - Tracking State: Read multiple digits number. This is an expanded version of 1.13 so that it can accommodate larger numbers");

  console.log(`Starting number: ${input}`);

  // push numbers to digitsArray
  for(let i = 0; i < inputArray.length; i++) {
    unitArray.push(parseInt(inputArray[i]));
  }

  console.log('The units array contains the following values: [' + unitArray + '] and has the following length: ' + unitArray.length);

  function processMultipliers(input) {
    for(let i = input.length; i > 0; i--) {
      if (i === input.length) {
        unitMultiplier = 1;
      } else {
        unitMultiplier *= 10;
      }
      unitMultiplierArray.unshift(unitMultiplier);
    }
    return console.log(unitMultiplierArray);
  }
  processMultipliers(inputArray);

  function processInput(input) {
    for(let i = 0; i < unitArray.length; i++) {
      answer = unitArray[i] * unitMultiplierArray[i];
      answerArray.push(answer);
      console.log('answer array contains: [' + answerArray + '].');
      finalAnswer += answer;
    }
    return console.log(finalAnswer);
  }
  processInput(inputArray);
}

readMultipleDigitsNumber();


//TODO: extend to handle negative numbers