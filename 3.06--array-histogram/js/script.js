"use strict";

// Shared functions in ../shared/_shared.js file

let groupedArr = [4, 7, 7, 9, 9, 9, 8, 3, 3, 3, 3, 10];

function createHistogram(arr) {
  console.log(`Array elements to be analyzed with histogram: ${arr}`);

  // 1. create empty array called 'histogram'
  let histogram = [];
  console.log('Empty histogram');
  console.log(histogram);

  // 2. Set 'histogram' to hold 10 elements and initialize each element to 0
  for (let i = 0; i < 10; i++) {
    histogram[i] = 0;
  }
  console.log(`Histogram with values set to 0: ${histogram}.`);

  // 3. Increment specific 'histogram' element
  for (let i = 0; i < arr.length; i++) {
    histogram[arr[i] - 1]++;
  }
  console.log(`Histogram with values updated based on array elements frequency: ${histogram}.`);

  // 4. Find most frequent histogram element
  let mostFrequent = 0;
  for (let i = 0; i < 10; i++) {
    if (histogram[i] > histogram[mostFrequent]) {
      mostFrequent = i;
    }
  }
  mostFrequent++;
}

createHistogram(groupedArr);