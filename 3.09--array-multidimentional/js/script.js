"use strict";

// Shared functions in ../shared/_shared.js file

let sales = [
      [1856, 498, 30924, 87478, 328, 2653, 387, 3754, 387587, 2873, 276, 32],
      [5865, 5456, 3983, 6464, 9957, 4875, 3875, 3838, 4959, 1122, 7766, 2534],
      [23, 57, 67, 99, 265, 376, 232, 223, 4546, 564, 4544, 3434],
    ];

console.log(sales);

function getHighestSale(arr) {
  console.log("=== 3.09 - Arrays: Multi-dimentional ===");
  console.log("page 71/72 - How to handle multi-dimentional arrays.");

  let highestSale = arr[0][0];

  for (let agent = 0; agent < arr.length; agent++) {
    for (let month = 0; month < arr[agent].length; month++) {
      if (sales[agent][month] > highestSale) {
        highestSale = sales[agent][month];
      }
    }
  }
  return console.log(highestSale);
}

getHighestSale(sales);