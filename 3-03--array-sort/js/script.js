"use strict";

// Shared functions in ../shared/_shared.js file

let inputArray = [5, 45, 341, 3, 66, 13, 10, 70, 532, 2];

console.log(inputArray);

function sortArray(array) {
  console.log("=== 3.03 - Arrays: Sorting Array Elements ===");
  console.log("page 59/60 - Sort");

  console.log('Starting order: ' + array);

  array.sort(function(a, b) {
    return a - b;
  });

  console.log('Ending order: ' + array);
}


sortArray(inputArray);

console.log(inputArray);