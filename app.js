"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

// ======== TEST SEKTION ===========
//produkt objekter

const product1 = {
  title: "Fjällraven - Foldsack No. 1 Backpack",
  price: 849,
  inStock: true,
};

const product2 = {
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 179,
  inStock: true,
};

console.log(product1);
console.log(product2);
