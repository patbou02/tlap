"use strict";

// Shared functions in ../shared/_shared.js file

/* - Write in PSEUDO CODE - */
/* - Write in PSEUDO CODE -
ARRAY;

MOST_FREQUENT;
CURRENT_FREQUENCY;
HIGHEST_FREQUENCY;

LOOP ARRAY {
  INCREASE CURRENT_FREQUENCY;
  IF (CURRENT ELEMENT IS LAST OF ITS KIND) {
    IF (CURRENT_FREQUENCY > HIGHEST_FREQUENCY) {
      HIGHEST_FREQUENCY IS EQUAL TO CURRENT_FREQUENCY;
      MOST_FREQUENT = CURRENT_ELEMENT;
    }
    CURRENT_FREQUENCY RESETS TO ZERO;
  }
}
*/

let groupedArr = [4, 7, 7, 9, 9, 9, 8, 3, 3, 3, 3, 10];

function mostFrequentInGroupedArray(arr) {
  console.log("=== 3.05 - Arrays: Solving Array Problems (GROUPED) ===");
  console.log("page 60/64 - Finding the most common array element (mode) in a grouped array.");
  let mostFrequent, // don't know yet which one it is.
      currentFrequency = 0,
      highestFrequency = 0;

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    currentFrequency++;
    // If grouped then "last of its kind" is whenever element changes kind
    if (arr[i] !== arr[i + 1]) {
      if (currentFrequency > highestFrequency) {
        highestFrequency = currentFrequency;
        mostFrequent = arr[i];
      }
      currentFrequency = 0;
    }
  }

  return console.log(`The most frequent element (${mostFrequent}) is present ${highestFrequency} times in the Array.`);
}
mostFrequentInGroupedArray(groupedArr);

let ungroupedArr = [4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10];

function mostFrequentInUngroupedArray(arr) {
  console.log("=== 3.05 - Arrays: Solving Array Problems (UNGROUPED) ===");
  console.log("page 60/64 - Finding the most common array element (mode) in a non-grouped array.");
  let mostFrequent, // don't know yet which one it is.
      currentFrequency = 0,
      highestFrequency = 0;

  console.log(`Starting Array: ${arr}`);

  Shared.arraySortInsertion(arr);

  console.log(`Sorted Array: ${arr}`);

  for (let i = 0; i < arr.length; i++) {
    currentFrequency++;
    // If grouped then "last of its kind" is whenever element changes kind
    if (arr[i] !== arr[i + 1]) {
      if (currentFrequency > highestFrequency) {
        highestFrequency = currentFrequency;
        mostFrequent = arr[i];
      }
      currentFrequency = 0;
    }
  }



  return console.log(`The most frequent element (${mostFrequent}) is present ${highestFrequency} times in the Array.`);
}

mostFrequentInUngroupedArray(ungroupedArr);