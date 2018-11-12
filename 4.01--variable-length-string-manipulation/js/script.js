"use strict";

// Shared functions in ../shared/_shared.js file

let inputString = "test";
console.log('Starting string: ' + inputString);
let inputArray = inputString.split('');
console.log('Starting string converted to array: ' + inputArray);

// Step 1: convert string to array
function convertStringToArray(str) {
  return str.split('');
}
convertStringToArray(inputString);

// Step 2: return array (arr) element at position (pos).
function characterAt(arr, pos) {
  return arr[pos];
}
characterAt(inputString, 1);

// Step 3: combine both #1 and #2 together.
function characterAtFinal(str, pos) {
  let arr = str.split('');

  return arr[pos];
}
characterAtFinal(inputString, 2);

function append(arr, char) {
  let oldLength = 0;

  // find array index whose value equal null or 0.
  while(arr[oldLength] !== 0) {
    oldLength++;
  }

  // create new array
  let newArr = [];

  // copy original array elements into new array.
  for (let i = 0; i < oldLength; i++) {
    newArr[i] = arr[i];
  }

  newArr[oldLength] = char;  // append 'char' to end of new array.
  newArr[oldLength + 1] = 0; // append null value (0) after appended character in new array.
  arr = newArr; // set original array equal to new array.

  return console.log(arr);
}

function appendTester() {
  let testArray = ['t', 'e', 's', 't', 0];
  append(testArray, '!');
}

appendTester();