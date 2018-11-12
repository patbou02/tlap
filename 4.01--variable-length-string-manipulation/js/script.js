"use strict";

// Shared functions in ../shared/_shared.js file

let inputString = "test";
//console.log('Starting string: ' + inputString);
let inputArray = inputString.split('');
//console.log('Starting string converted to array: ' + inputArray);

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

function appendTester(str) {
  let testArray = convertStringToArray(str);
  console.log(testArray);
  console.log(append(testArray, '!'));
}

appendTester('testing');
appendTester('');

// Step 4: create concatenate function.
function concatenate(arr1, arr2) {
  let newArr = [];

  // copy arr1 element values to new array.
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr[arr1.length + j] = arr2[j];
  }

  arr1 = newArr;

  return arr1;
}

function concatenateTester(str1, str2) {
  console.log(`Entered strings are '${str1}' and '${str2}'.`);

  let testArr1 = convertStringToArray(str1),
      testArr2 = convertStringToArray(str2);

  console.log(`Converted to arrays, these strings are now '${testArr1}' and '${testArr2}'.`);

  console.log(concatenate(testArr1, testArr2));
}

concatenateTester('test', 'bed');