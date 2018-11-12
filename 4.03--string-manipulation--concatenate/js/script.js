"use strict";

// Shared functions in ../shared/_shared.js file

function concatenate(arr1, arr2) {
  console.log("=== 4.03 - Variable-Length String Manipulation ===");
  console.log("page 98/100 - Concatenate one array at the end of another array.");
  console.log(`Concatenate array 2 '${arr2}' at the end of array 1 '${arr1}'.`);

  // create new array.
  let newArr = [];

  // copy arr1 element values to new array.
  for (let i = 0; i < arr1.length; i++) {
    newArr[i] = arr1[i];
  }
  // copy arr2 element values to new array starting at the end based on length of original array1.
  for (let j = 0; j < arr2.length; j++) {
    newArr[arr1.length + j] = arr2[j];
  }

  // reset array1 to be equal to new array.
  arr1 = newArr;

  return arr1;
}

function concatenateTester(str1, str2) {
  console.log(`Entered strings are '${str1}' and '${str2}'.`);

  let testArr1 = str1.split(''),
      testArr2 = str2.split('');

  console.log(`Converted to arrays, these strings are now '${testArr1}' and '${testArr2}'.`);

  console.log(concatenate(testArr1, testArr2));
}

concatenateTester('test', 'bed');
