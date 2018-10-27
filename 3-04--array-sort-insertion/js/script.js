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

  // traverse array starting at second array element
  for (let i = startIndex + 1; i <= endIndex; i++) {
    /*
    * 1. Set J equal to I, while J is larger than starting point
    * 2. If left element IS NOT larger than right element, then move up one element within array and start over.
    * 3. If left element IS larger then move up within array by executing code inside for loop.
    *   - 3.a. assign value of left element (larger element with smaller index) to TEMP variable
    *   - 3.b. set value of left element (with smaller index) to the value of right element which was smaller
    *   - 3.c. set value of right element (with bigger index) to the value of TEMP which was storing the larger value
    *   - 3.d. reduce the value of J
    * 4. Continue looping while J is larger than 0 and left element is larger than right element
    */
    for (let j = i; (j > startIndex) && (arr[j - 1] > arr[j]); j--) {
      temp = arr[j - 1];   // 3.a.
      arr[j - 1] = arr[j]; // 3.b.
      arr[j] = temp;       // 3.c.
    }
  }
}

insertionSortArray(arrayInput);

console.log(arrayInput);