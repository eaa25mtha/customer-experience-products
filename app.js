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

const product3 = {
  title: "Opna Women's Short Sleeve Moisture",
  price: 120,
  inStock: false,
  image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
  description:
    "Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit",
  category: "Fitness",
};

//vis lagerstatus korrekt i stedet for true/false
//produkt 1
let stockText;
let stockClass;
if (product1.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

//produkt 2
let stockText2;
let stockClass2;
if (product2.inStock) {
  stockText2 = "På lager";
  stockClass2 = "in-stock";
} else {
  stockText2 = "Udsolgt";
  stockClass2 = "out-of-stock";
}

//produkt 3
let stockText3;
let stockClass3;
if (product3.inStock) {
  stockText3 = "På lager";
  stockClass3 = "in-stock";
} else {
  stockText3 = "Udsolgt";
  stockClass3 = "out-of-stock";
}

//vis objekterne på siden
//prdoukt 1
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

//produkt 2
const html2 = /*html*/ `
  <article class="product-card">
    <img src="${product2.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product2.title}</h2>
      <p class="product-description">${product2.description}</p>
      <p class="product-price">${product2.price} kr</p>
      <span class="product-stock ${stockClass2}">${stockText2}</span>
    </div>
  </article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html2);

//produkt 3
const html3 = /*html*/ `
  <article class="product-card">
    <img src="${product3.image}" class="product-image">
    <div class="product-info">
      <h2 class="product-name">${product3.title}</h2>
      <p class="product-description">${product3.description}</p>
      <p class="product-price">${product3.price} kr</p>
      <span class="product-stock ${stockClass3}">${stockText3}</span>
    </div>
  </article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html3);
