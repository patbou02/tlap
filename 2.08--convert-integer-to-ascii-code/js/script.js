"use strict";

// Shared functions in ../shared/_shared.js file
let userInput = "5"; //prompt("Please enter one digit positive number (0 - 9):");

function convertIntegerToCode() {
  console.log("=== 2.08 - Convert Integer to ASCII digit code ===");
  console.info("page 35 - Input Processing: Convert Character Digit to Integer");

  if (userInput === null) {
    return console.log(Error.generic + Error.isNull + " " + Error.tryAgain);
  } else {
    if ((userInput.charCodeAt(0) < 48) || (userInput.charCodeAt(0) > 57)) {
      return console.log(Error.generic + "\n - " + Error.isNaN + "\n - " + Error.isNegative + "\n" + Error.tryAgain);
    } else {
      if (userInput.length > 1 || userInput === "") {
        return console.log(Error.generic + "\n - " + Error.tooLong + "\n - " + Error.tooShort + "\n" + Error.tryAgain);
      } else {
        let code = userInput.charCodeAt(0);
        return console.log(`The number entered (${userInput}) has an ASCII code of: ${code}.`);
      }
    }
  }
}

convertIntegerToCode();