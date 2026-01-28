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
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  description: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  category: "Outdoor gear",
};

const product2 = {
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 179,
  inStock: true,
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  description: "Slim-fitting style, contrast raglan long sleeve, three-buttons",
  category: "men's clothing",
};

console.log(product1);
console.log(product2);
console.log(product1.title);
console.log(product1.title + "koster" + product1.price + "kr");
