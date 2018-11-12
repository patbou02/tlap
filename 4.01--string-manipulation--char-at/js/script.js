"use strict";

// Shared functions in ../shared/_shared.js file

let inputString = "test";
//console.log('Starting string: ' + inputString);
let inputArray = inputString.split('');
//console.log('Starting string converted to array: ' + inputArray);

// convert string to array
function convertStringToArray(str) {
  return str.split('');
}
convertStringToArray(inputString);

// return array (arr) element at position (pos).
function characterAt(arr, pos) {
  return arr[pos];
}
characterAt(inputString, 1);

// combine both together.
function characterAtFinal(str, pos) {
  console.log("=== 4.01 - Variable-Length String Manipulation ===");
  console.log("page 91/92 - Output character at position (pos) within string.");
  let arr = str.split('');

  return arr[pos];
}
console.log(characterAtFinal(inputString, 2));