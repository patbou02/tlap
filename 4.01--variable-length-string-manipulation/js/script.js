"use strict";

// Shared functions in ../shared/_shared.js file

let inputString = "test";
console.log(inputString);
let inputArray = inputString.split('');
console.log(inputArray);

// Step 1: convert string to array
function convertStringToArray(str) {
  return str.split('');
}
convertStringToArray(inputString);

// Step 2: return array (arr) element at position (pos)
function characterAt(arr, pos) {
  return arr[pos];
}
characterAt(inputString, 1);

// Step 3: combine both #1 and #2 together
function characterAtFinal(str, pos) {
  let arr = str.split('');

  return arr[pos];
}
characterAtFinal(inputString, 2);

function append(arr, char) {
  let oldLength = 0;

  // calculate the character that terminates the array (0/null)
  while(arr[oldLength] !== 0) {
    oldLength++;
  }

  // create new array
  let newArr = [];

  // copy element from original array to new array
  for (let i = 0; i < oldLength; i++) {
    newArr[i] = arr[i];
  }

  newArr[oldLength] = char;  // append character (char) to the end of the new array
  newArr[oldLength + 1] = 0; // append null value (0) to after appended character
  arr = newArr; // set original array to new array

  return console.log(arr);
}

function appendTester() {
  let testArray = ['t', 'e', 's', 't', 0];
  append(testArray, '!');
}

appendTester();