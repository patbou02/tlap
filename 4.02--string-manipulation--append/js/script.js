"use strict";

// Shared functions in ../shared/_shared.js file

function append(arr, char) {
  console.log("=== 4.02 - Variable-Length String Manipulation ===");
  console.log("page 93/97 - Append character (char) at the end of array.");
  console.log(`append new character ${char} at the end of array '${arr}'.`);

  // create new array
  let newArr = [];

  // copy original array elements into new array.
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  newArr[arr.length] = char;  // append 'char' to end of new array.

  arr = newArr; // set original array equal to new array.

  return arr;
}

function appendTester(str, char) {
  let testArray = str.split('');
  console.log(testArray);
  console.log(append(testArray, char));
}

appendTester('testing', '!');
appendTester('', '#');
