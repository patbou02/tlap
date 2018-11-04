"use strict";

// Shared functions in ../shared/_shared.js file

function determineLicenseCost(grossSales) {
  console.log("=== 3.07 - Arrays: Fixed Data Arrays ===");
  console.log("page 67/69 - Assigning constant (fixed) data to two arrays and retrieving information from them.");

  let numberOfCategories = 4,
      category = 0;

  const categoryThresholds = [0.0, 50000.0, 150000.0, 500000.0],
        licenseCost = [50.0, 200.0, 1000.0, 5000.0];

  while ((category < numberOfCategories) && (categoryThresholds[category] <= grossSales)) {
    category++;
  }

  let cost = licenseCost[category - 1];

  return console.log(cost);
}

determineLicenseCost(50000);