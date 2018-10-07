"use strict";

// Shared functions in js/_shared.js file

function computeChecksum() {
  console.log("=== 1.8 - Compute Check Digit for simple checksum validation ===");
  console.log("This function will:\n - Process entered number\n - Calculate check digit\n - Add it to final checksum number\n");
  console.info("page 32 - Output Patterns: Luhn Checksum formula completed\n\n");

  let userInput      = '176248', //prompt("Please enter a number"), // gather input
      userInputArray = userInput.split(''), // convert input from string to array
      checksum       = []; // create empty checksum array

  console.info(`Input: ${userInput} converted to an array is:`);
  console.info(userInputArray);
  console.info("Starting at the end with last element from right to left and continuing with every other element");

  // loop through number array from right to left
  for (let i = (userInputArray.length - 1); i >= 0; i--) {
    if (((userInputArray.length - 1) - i) % 2 === 0) { // if array element even then multiply number by 2
      let doubledDigit = userInputArray[i] * 2;
      console.log(`- Digit ${userInputArray[i]} IS doubled to ${doubledDigit}\n`);
      if (doubledDigit >= 10) { // if double digit is larger than 10 then
        doubledDigit = doubledDigit.toString(); // convert to string
        for (let j = (doubledDigit.length - 1); j >= 0; j--) {
          // starting from right to left, push individual digits to beginning of 'checksum' array
          checksum.unshift((parseInt(doubledDigit[j])));
        }
      } else {
        // push doubled digit to beginning of 'checksum' array
        checksum.unshift(parseInt(doubledDigit));
      }
    } else { // otherwise leave number "as is"
      console.log(`- Digit ${userInputArray[i] } IS NOT doubled\n`);
      checksum.unshift(parseInt(userInputArray[i])); // add same number to beginning of 'checksum' array
    }
  }

  console.info("New array of numbers is:");
  console.info(checksum);

  // Add all checksum array elements together
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sumOfChecksumElements = checksum.reduce(reducer, 0);
  console.info(`Sum of all numbers is: ${sumOfChecksumElements}`);

  // Set checkDigit so that sum of all elements plus check digit results in number divisible by 10.
  let checkDigit = Shared.validateIfDivisibleBy(sumOfChecksumElements, 10);

  // add check digit and checksum together
  Shared.addCheckDigitToChecksum(checksum, checkDigit);
}

computeChecksum();