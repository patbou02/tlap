"use strict";

// Shared functions in ../shared/_shared.js file

let modeTypeArray = ["UPPERCASE", "LOWERCASE", "PUNCTUATION"],
    inputArray    = ["2","1","0","52","53","54","55","6","7","8","9","10","-1"],
    mode = modeTypeArray[0],
    number,
    message = "";

function swapModes() {
  console.log("=== 2.15 - Swap Modes Alternate ===");
  console.info("page 50-51 - Tracking State: Swap Mode");

  let i = 0;
  do {
    message += 'Number read: ' + inputArray[i];

    switch(mode) {
      case "UPPERCASE":
        number = inputArray[i] % 27;
        message += '. Modulo 27: ' + number + '.';
        if (number === 0) {
          message += ' Switch to LOWERCASE.';
          mode = modeTypeArray[1]; // LOWERCASE
        }
        break;
      case "LOWERCASE":
        number = inputArray[i] % 27;
        message += '. Modulo 27: ' + number + '.';
        if (number === 0) {
          message += ' Switch to PUNCTUATION';
          mode = modeTypeArray[2]; // PUNCTUATION
        }
        break;
      case "PUNCTUATION":
        number = inputArray[i] % 9;
        message += '. Modulo 9: ' + number + '.';
        if (number === 0) {
          message += ' Switch to UPPERCASE';
          mode = modeTypeArray[0]; // UPPERCASE
        }
        break;
    }
    message += '\n';

    i++;
  } while (inputArray[i] != "-1");

  console.log(message);
}


swapModes();

//TODO: may want to look into pulling repeated lines into a smaller function that's called inside each 'case' (i.e. lines 21, 22,23,24,25,26)