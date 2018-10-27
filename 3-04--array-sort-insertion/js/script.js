"use strict";

// Shared functions in ../shared/_shared.js file

let arrayInput = [5, 10, 4, 36, 90, 1];

console.log(arrayInput);

function insertionSortArray(arr) {
  console.log("=== 3.04 - Arrays: Sorting Array Elements with Insertion Sort ===");
  console.log("page 60/61 - Insertion Sort");

  let startIndex = 0,
      endIndex = arr.length - 1,
      temp;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    for (let j = i; (j > startIndex) && (arr[j - 1] > arr[j]); j--) {
      temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
    }
  }
}

insertionSortArray(arrayInput);

console.log(arrayInput);