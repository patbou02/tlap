"use strict";

// Global Variables
let modeIndex   = 0,
  letters     = "abcdefghijklmnopqrstuvwxyz",
  punctuation = "!?,. ;\"'",
  divider,
  characterCode,
  inputCode,
  character,
  decodedMessage;

// Global Arrays
let inputArray          = ["18", "12312", "171", "763", "98423", "1208", "216", "11", "500", "18", "241", "0", "32", "20620", "27", "10"],
  modeArray           = ["U", "L", "P"],
  currentMode         = modeArray[modeIndex],
  lettersArray        = letters.split(''),
  punctuationArray    = [],
  uppercaseArray      = [],
  lowercaseArray      = [],
  inputCodeArray      = [],
  processedInputArray = [];