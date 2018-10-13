"use strict";

let globalVars = {
  //width:   "13", //parseInt(prompt("Please enter a width value")),
  //height:  "4", //parseInt(prompt("Please enter a height value")),
  lineBreak: "\n",
};

const Error = {
  generic:    "ERROR: ",
  isNaN:      "Character(s) entered not a number.",
  isNegative: "Character(s) entered negative.",
  isNull:     "Nothing was entered or cancel button was pressed.",
  tooLong:    "Character(s) entered too long.",
  tooShort:   "Character(s) entered too short.",
  tryAgain:   "Please try again.",
};

const Shared = (function() {
  return {
    validateUserInput:       function(input) {
      if (input === null) {
        return console.log(Error.generic + Error.isNull);
      } else {
        if (input.length > 1 || input.length === 0) {
          return console.log(Error.generic + Error.tooLong);
        } else {
          //console.log('userInput is VALID');
          return input;
        }
      }
    },
    validateDimension:       function(dimension) {
      if (dimension === null) {
        return console.log(Error.generic + Error.isNull);
      } else {
        if (isNaN(dimension)) {
          return console.log(Error.generic + Error.isNaN);
        } else {
          //console.log('dimension is VALID');
          return dimension;
        }
      }
    },
    validateIfDivisibleBy:   function(number, i) {
      let result        = i - (number % i),
          resultMessage = console.info(`In order to make them divisible by ${i} when added together, check digit must be: ${result}`);
      return {
        result,
        resultMessage,
      }
    },
    addCheckDigitToChecksum: function(checksum, checkDigit) {
      checksum.push(checkDigit);       // push (add) check digit to the end of 'checksum' array
      checksum = checksum.toString();       // convert checksum from array to string
      checksum = checksum.replace(/,/g,''); // search for commas and replace with empty string
      checksum = parseInt(checksum);        // convert checksum from string to number
      return console.info(`Final computed checksum number is: ${checksum}`);
    },
  };
})();