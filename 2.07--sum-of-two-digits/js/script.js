"use strict";

// Shared functions in ../shared/_shared.js file

const Utilities = (function () {
  return {
    sumOfTwoDigits: function() {
      console.info("=== 2.07 - Sum of Two Digits === (will assist in finding solution to LUHN CHECKSUM VALIDATION)");
      console.info("page 33 - Input Processing: Breaking down the problem\n\n");

      console.info("Step 1. Enter a DIGIT between 0 and 9 into function:");
      let initialDigit = prompt("Please enter a digit between 0 and 9");
      console.log(`- Initial digit is: ${initialDigit}.\n`);

      console.info("Step 2. Double initial digit:");
      let initialDigitDoubled = initialDigit * 2;
      console.log(`- Initial digit (${initialDigit}) doubled is: ${initialDigitDoubled}.\n`);

      console.info(`Step 3. If resulting # (${initialDigitDoubled}) is greater or equal to 10, then add each digit with each other (i.e. 7 becomes 14 which then becomes 5) otherwise return resulting digit:`);
      let sumOfDigits, firstDigit, secondDigit;

      if (initialDigitDoubled >= 10) {
        sumOfDigits = 1 + initialDigitDoubled % 10;
        firstDigit = initialDigitDoubled.toString().charAt(0);
        secondDigit = initialDigitDoubled.toString().charAt(1);
        if (initialDigitDoubled > 10) {
          console.log(`- Initial number (${initialDigit}) doubled, resulted in (${initialDigitDoubled}) which is GREATER than 10, therefore SUM OF first digit (${firstDigit}) and second digit (${secondDigit}) is equal to: ${sumOfDigits}.`);
        } else {
          console.log(`- Initial number (${initialDigit}) doubled, resulted in (${initialDigitDoubled}) which is EQUAL to 10, therefore SUM OF first digit (${firstDigit}) and second digit (${secondDigit}) is equal to: ${sumOfDigits}.`);
        }
      } else {
        sumOfDigits = initialDigitDoubled;
        console.log(`- Initial number (${initialDigit}) doubled, resulted in (${initialDigitDoubled}) which is LESS THAN 10, therefore resulting number remains the same (${sumOfDigits}).`);
      }
    },
  };
})();

Utilities.sumOfTwoDigits();