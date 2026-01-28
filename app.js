"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

// ======== TEST SEKTION ===========
//array med produkter i
const products = [
  {
    title: "Fjällraven Backpack",
    price: 849,
    inStock: true,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    description: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    category: "Outdoor gear",
  },
  {
    title: "Slim Fit T-Shirt For Men",
    price: 179,
    inStock: true,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-buttons",
    category: "men's clothing",
  },
  {
    title: "Comfortable Women's V-neck",
    price: 120,
    inStock: false,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    description:
      "Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit",
    category: "Fitness",
  },
];

//lagerstatus
let stockText;
let stockClass;
if (products.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

//displayProduct funktionen
function displayProduct(product) {
  const html = /*html*/ `
  <article class="product-card">
    <img src="${products[0].image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${products[0].title}</h2>
      <p class="product-description">${products[0].description}</p>
      <p class="product-price">${products[0].price} kr</p>
      <span class="product-stock ${stockClass}">${stockText}</span>
    </div>
  </article>
`;
  document.querySelector("#test").insertAdjacentHTML("beforeend", html);
}
displayProduct(products[0]);

//displayAllProducts funktionen
function displayAllProducts() {
  innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    displayProduct(products[i]);
  }
}

displayAllProducts();
