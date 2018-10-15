"use strict";

// Shared functions in ../shared/_shared.js file

let inputArray = [18, 12312, 171, 763, 98423, 1208, 216, 11, 500, 18, 241, 0, 32, 20620, 27, 10],
    highestValue = inputArray[0],
    targetPosition = 0;

function criterionBasedSearch(array) {
  console.log("=== 3.02 - Arrays: Criterion-Based Search ===");
  console.info("page 58 - Array Fundamentals: Searching for a value that fits a specific criteria such as the highest value and outputing its position within the array.");

  for (let i = 1; i < array.length; i++) {
    if (array[i] > highestValue) {
      highestValue = array[i];
    }
  }

  while ((array[targetPosition] != highestValue) && (targetPosition < array.length)) {
    targetPosition++;
    if (array[targetPosition] === array.length) {
      targetPosition = "VALUE NOT FOUND";
    }
  }

  console.log('Array to be searched contains:');
  console.log(array);
  console.log(`Highest value within array is: ${highestValue}.`);
  console.log(`Position of highest value within array is: ${targetPosition} (0 based).`);
}

criterionBasedSearch(inputArray);