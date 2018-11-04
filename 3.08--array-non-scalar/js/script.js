"use strict";

// Shared functions in ../shared/_shared.js file

let studentsArray = [
  [87, 10001, "Fred"],
  [27, 10002, "Tom"],
  [100, 10003, "Alistair"],
  [78, 10004, "Sasha"],
  [84, 10005, "Erin"],
  [98, 10006, "Belinda"],
  [75, 10007, "Leslie"],
  [70, 10008, "Candy"],
  [81, 10009, "Aretha"],
  [68, 10010, "Veronica"],
];

console.log(studentsArray);

function getHighestGrade(arr) {
  console.log("=== 3.08 - Arrays: Non Scalar ===");
  console.log("page 70 - This function gets the highest grade from an array nested within another array and with non integer values.");
  let highestGrade = arr[0][0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] > highestGrade) {
      highestGrade = arr[i][0];
    }
  }
  return console.log(highestGrade);
}

getHighestGrade(studentsArray);