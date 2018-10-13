"use strict";

// Shared functions in ../shared/_shared.js file

function positiveOrNegative() {
  console.log("=== 2.10 - Positive or Negative ===");
  console.info("page 39 - Input Processing: Positive or Negative - gather numbers and then ask which to display and how many there were.");

  let userNumber,
      positiveCount = 0,
      negativeCount = 0,
      positiveArray = [],
      negativeArray = [],
      response;

  for (let i = 1; i <= 10; i++) {
    userNumber = prompt("Please enter a positive or negative number.");
    if (userNumber > 0) {
      positiveCount++;
      positiveArray.push(parseInt(userNumber));
    } else if (userNumber < 0) {
      negativeCount++;
      negativeArray.push(parseInt(userNumber));
    } else {
      console.log("Please do NOT enter the number 0.");
    }
  }
  let userWants = prompt("Do you want the Positive (p) or the Negative (n) count?");
  if (userWants === "p") {
    response = positiveCount;
    console.log(`Positive count is: ${response}.`);
    console.log("These were the numbers entered:");
    console.log(positiveArray);
  } else {
    response = negativeCount;
    console.log(`Negative count is: ${response}.`);
    console.log("These were the numbers entered:");
    console.log(negativeArray);
  }
}

positiveOrNegative();