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

//vis lagerstatus korrekt i stedet for true/false
let stockText;
let stockClass;
if (product1.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

//vis objekterne på siden
const html = /*html*/ `
  <article class="product-card">
    <img src="${product1.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product1.title}</h2>
      <p class="product-description">${product1.description}</p>
      <p class="product-price">${product1.price} kr</p>
      <span class="product-stock ${stockClass}">${stockText}</span>
    </div>
  </article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);
