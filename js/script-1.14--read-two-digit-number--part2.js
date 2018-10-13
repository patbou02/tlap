"use strict";

function readTwoDigitNumber() {
  console.log("=== 1.14 - Read Two Digit Number PART 2 ===");
  console.info("page 44 - Tracking State: Read two digit number. This is an expanded version of 1.13 so that it can accommodate larger numbers");

  let input = "43"; //prompt("Please enter a positive or negative number.");
  let inputArray = input.split(''),
      digitsArray = [],
      digits = digitsArray.length,
      unit = 1,
      unitLabel,
      unitMultiplier,
      answerNumber,
      answerArray = [],
      answerArrayMultiplier = [],
      finalAnswer = 0;

  console.log(`Starting number: ${input}`);

  // push numbers to digitsArray
  for(let i = 0; i < inputArray.length; i++) {
    digitsArray.push(parseInt(inputArray[i]));
  }

  console.log('The digits array contains the following digits: [' + digitsArray + '] and has the following length: ' + digits);

  let multiplier = 1,
      multiplierArray = [];
  function processMultipliers(input) {
    for(let i = 1; i <= input.length; i++) {
      if (i === 1) {
        multiplier = 10;
      } else {
        while (i <= input.length) {
          multiplier*= 10;
        }
      }
      multiplier*= 10;
      multiplierArray.push(multiplier);
    }
    return console.log(multiplierArray);
  }

  console.log('testing');
  processMultipliers(input);
  console.log('testing');

  function processInput(input, digits) {
    for(let i = (digits - 1); i >= 0; i--) {

    }
  }

  // process from right to left
  for(let i = (digits - 1); i >= 0; i--) {
    // get unitLabel and unitMultiplier
    switch(unit) {
      case 1:
        unitLabel = "Units";
        unitMultiplier = 1;
        break;
      case 2:
        unitLabel = "Tens";
        unitMultiplier = 10;
        break;
    }
    // increase unit value
    unit++;
    // calculate digit by its corresponding multiplier
    answerNumber = digitsArray[i] * unitMultiplier;
    // push answerNumber to answer array
    answerArray.push(answerNumber);
    answerArrayMultiplier.unshift(digitsArray[i] * unitMultiplier);
    // calculate finalAnswer by adding each number in array
    finalAnswer+= answerNumber;
  }
  console.log(answerArrayMultiplier);
  console.log(finalAnswer);
}

readTwoDigitNumber();