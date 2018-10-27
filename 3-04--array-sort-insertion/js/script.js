"use strict";

// Shared functions in ../shared/_shared.js file

let array = [5, 10, 4, 36, 90, 1],
    startIndex = 0,
    endIndex = array.length - 1,
    temp;

console.log(array);

function insertionSortArray(array) {
  console.log("=== 3.04 - Arrays: Sorting Array Elements with Insertion Sort ===");
  console.log("page 60/61 - Insertion Sort");
  for (let i = startIndex + 1; i <= endIndex; i++) {
    for (let j = i; (j > startIndex) && (array[j - 1] > array[j]); j--) {
      temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
    }
  }
}

insertionSortArray(array);

console.log(array);