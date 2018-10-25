"use strict";

// Shared functions in ../shared/_shared.js file

let inputArray = [18, 12312, 171, 763, 98423, 1208, 216, 11, 500, 18, 241, 0, 32, 20620, 27, 10],
    targetValue = 1208,
    targetPosition = 0;

function sequentialSearch(array) {
  console.log("=== 3.01 - Arrays: Sequential Search ===");
  console.info("page 58 - Array Fundamentals: Searching for a Specific Value.");

  while((array[targetPosition] != targetValue) && (targetPosition < array.length)) {
    targetPosition++;
    if (targetPosition === array.length) {
      targetPosition = "VALUE NOT FOUND";
    }
  }

  console.log('Array to be searched contains:');
  console.log(array);
  console.log(`Target being searched within array is: ${targetValue}.`);
  console.log(`Position of target within array is: ${targetPosition} (0 based).`);

}

sequentialSearch(inputArray);