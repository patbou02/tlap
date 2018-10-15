"use strict";

// Shared functions in ../shared/_shared.js file

let input                 = "43"; //prompt("Please enter a positive or negative number.");
let inputArray            = input.split(''),
  digitsArray           = [],
  unit                  = 1,
  unitLabel,
  unitMultiplier,
  answerNumber,
  answerArray           = [],
  answerArrayMultiplier = [],
  finalAnswer = 0;

//TODO: fix variables above or at least cleanup

function readTwoDigitNumber() {
  console.log("=== 2.13 - Read Two Digit Number ===");
  console.info("page 44 - Tracking State: Read two digit number.");

  console.log(input);

  // push numbers to digitsArray
  for(let i = 0; i < inputArray.length; i++) {
    digitsArray.push(parseInt(inputArray[i]));
  }

  console.log(digitsArray);

  // process from right to left
  for(let i = digitsArray.length - 1; i >= 0; i--) {
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