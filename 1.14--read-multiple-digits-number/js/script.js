"use strict";

let input           = "4334569", //prompt("Please enter a positive or negative number.");
    inputArray      = input.split(''),
    digitsArray     = [],
    unitMultiplier,
    answerNumber,
    answerArray     = [],
    multiplierArray = [],
    finalAnswer = 0;

function readMultipleDigitsNumber() {
  console.log("=== 1.14 - Read Multiple Digits Number ===");
  console.info("page 44 - Tracking State: Read multiple digits number. This is an expanded version of 1.13 so that it can accommodate larger numbers");

  console.log(`Starting number: ${input}`);

  // push numbers to digitsArray
  for(let i = 0; i < inputArray.length; i++) {
    digitsArray.push(parseInt(inputArray[i]));
  }

  console.log('The digits array contains the following digits: [' + digitsArray + '] and has the following length: ' + digitsArray.length);

  function processMultipliers(input) {
    for(let i = input.length; i > 0; i--) {
      if (i === input.length) {
        unitMultiplier = 1;
      } else {
        unitMultiplier *= 10;
      }
      multiplierArray.unshift(unitMultiplier);
    }
    return console.log(multiplierArray);
  }
  processMultipliers(inputArray);

  function processInput(input) {
    for(let i = 0; i < digitsArray.length; i++) {
      answerNumber = digitsArray[i] * multiplierArray[i];
      answerArray.push(answerNumber);
      console.log('answer array contains: [' + answerArray + '].');
      finalAnswer += answerNumber;
    }
    return console.log(finalAnswer);
  }
  processInput(inputArray);
}

readMultipleDigitsNumber();