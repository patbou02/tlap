"use strict";

// Shared functions in ../shared/_shared.js file

let inputArray = [18, 12312, 171, 763, 98423, 1208, 216, 1, 500, 18, 241, 32, 206200, 27, 10];

function findHighestValue(arr) {
  console.info("=== 3.02 - Arrays: Criterion-Based Search ===");
  console.info("page 58 - Array Fundamentals: Searching for a Specific Value (highest value in this case).");

  let highestValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highestValue) {
      highestValue = arr[i];
    }
  }

  console.info(arr);

  return console.log('max value is: ' + highestValue);
}

function findSmallestValue(arr) {
  let smallestValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
      smallestValue = arr[i];
    }
  }

  return console.log('min value is: ' + smallestValue);
}


function criteriaBasedSearch(arr) {
  let criteria = prompt('Enter which criteria (MAX or MIN) to use for this array value search (case sensitive):'),
      highestValue = arr[0],
      smallestValue = arr[0];

  if (criteria === 'MAX') {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > highestValue) {
        highestValue = arr[i];
      }
    }
    return console.log(highestValue);

  } else if (criteria === 'MIN') {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallestValue) {
        smallestValue = arr[i];
      }
    }
    return console.log(smallestValue);

  } else {
    console.log('Please enter a proper CRITERIA value (MIN or MAX).');
    criteriaBasedSearch(arr);
  }
}


criteriaBasedSearch(inputArray);